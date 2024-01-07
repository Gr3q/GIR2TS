import { ClassNode, FieldNode, FunctionNode, ParameterNode } from "../types/gir-types";
import { ClassModifier, FunctionModifier, ModifierDesc } from "../types/modifier-types";
import { ExcludeClass } from "../types/exclude-types";
import { renderMethod } from "./methodRenderer";
import { BuildConstructorNode, NeedNewLine } from "../utils/utils";
import { renderDocString } from "./docStringRenderer";
import { ignored_property_names } from "../consts";
import { renderProperty } from "./propertyRenderer";
import { renderSignal, renderSignalFromInfo } from "./signalRenderer";

/*
    Render class as a TS interface with construct signature.
    Saves us a lot of hassle with generating stud declarations for implemented
    methods.
    @exclude_list : An array of member names to exclude.
*/
export function renderClassAsInterface(class_node: ClassNode, ns_name: string, exclude?: ExcludeClass, modifier?: ClassModifier): string {

    const class_name = class_node.$.name;
    const ifaces: string[] = [];
    const methods: FunctionNode[] = [];
    const ctors: FunctionNode[] = [];
    const static_funcs: FunctionNode[] = [];
    const fields: ParameterNode[] = [];
    const signals: FunctionNode[] = [];
    let exclude_method_list: string[] = [];
    let exclude_self = false;
    let exclude_all_members = false;

    exclude_method_list = exclude_method_list.concat(exclude?.method ?? []);
    exclude_all_members = exclude?.members ?? false;
    if (exclude?.self) {
        exclude_self = exclude_all_members = true;
    }

    if (class_node.$.parent) {
        ifaces.push(class_node.$.parent);
    }
    
    if (class_node.implements) {
        for (let iface of class_node.implements) {
            ifaces.push(iface.$.name);
        }
    }

    if (class_node.method) {
        for (let m of class_node.method) {
            methods.push(m);
        }
    }

    if (class_node.property) {
        for (let prop of class_node.property) {
            if (prop.$.private == 1 || prop.$.readable == 0 || ignored_property_names.includes(prop.$.name))
                continue;
            fields.push(prop);
        }
    }

    if (class_node.field) {
        for (let field of class_node.field) {
            if (field.$.private == 1 || field.$.readable == 0 || ignored_property_names.includes(field.$.name))
                continue;
            fields.push(field);
        }
    }

    if (class_node["glib:signal"]) {
        for (const signal of class_node["glib:signal"]) {
            signals.push(signal);
        }
    }

    // console.log('rendering ' + class_node.$.name);
    if (class_node.hasOwnProperty('constructor')) {
        // console.log(class_node.constructor);
        for (let c of class_node.constructor) {
            if (typeof c !== 'function')
                ctors.push(c);
        }
    }

    if (class_node.function) {
        for (let f of class_node.function) {
            static_funcs.push(f);
        }
    }

    const mixin = renderMixinPart(class_name, ifaces);
    const extension = renderInterfacePart(class_name, class_node, ns_name, exclude_self);
    const iface_str = renderIInterfacePart(class_name, methods, fields, signals, ns_name, exclude, modifier);
    const constructorOptions = renderInitOptionsInterface(class_name, fields, ifaces);
    const static_side = renderClassPart(ctors, static_funcs, class_name, ns_name, exclude, modifier);

    return iface_str + constructorOptions + mixin + extension + static_side;
}


function getAdvisoryDocstring(class_name: string): string {
    let mixinDocstring = ""
    mixinDocstring += `/** This construct is only for enabling class multi-inheritance,\n`;
    mixinDocstring += ` * use {@link ${class_name}} instead.\n`
    mixinDocstring += ` */\n`;
    return mixinDocstring;
}

function renderIInterfacePart(
    class_name: string,
    methods: FunctionNode[],
    fields: FieldNode[],
    signals: FunctionNode[],
    ns_name: string, 
    exclude?: ExcludeClass, 
    modifier?: ClassModifier
    ): string {

    let exclude_all_members = exclude?.self ?? exclude?.members ?? false;

    let headerDocstring = getAdvisoryDocstring(class_name);
    let header = '';
    header += headerDocstring;
    header += `interface I${class_name}`;

    let body = "";

    //#region Render props
    let fieldsAdded: Set<string> = new Set();
    if (fields.length > 0) {
        const methodNames = new Set(methods.map((x) => x.$.name));
        for (const field of fields) {
            const fieldName = field.$.name.replace(/-/g, "_");

            // Exclude if duplicate of method, duplicate of prop
            let excluded = false;
            if (methodNames.has(fieldName)) 
                excluded = true;
            if (fieldsAdded.has(fieldName))
                excluded = true;
            if (exclude_all_members || exclude?.prop?.includes(fieldName))
                excluded = true

            body+= `${renderProperty(field, ns_name, modifier?.prop?.[fieldName] , false, 1, excluded)}\n`;
            fieldsAdded.add(fieldName);
        }
    }
    //#endregion

    //#region Methods
    const method_str_list = methods.map((m) => {
        // if method is present in exclude_list
        const excluded = (exclude?.method?.includes(m.$.name) || exclude_all_members);
        const funcModifier = modifier?.function?.[m.$.name];
        let method_str = renderMethod(m, methods, ns_name, funcModifier, { include_access_modifier: false, indentNum: 1, exclude: excluded });
        return method_str;
    });

    if (method_str_list.length > 0) {
        body += method_str_list.filter(v => !!v).join('\n');
    }

    //#endregion

    //#region Signals
    if (signals.length > 0) {
        body+= "\n";
        for (const signal of signals) {
            body+= renderSignal(signal, ns_name, exclude_all_members, 1);
        }
    }

    //#endregion

    //#region generate notify signals for props
    if (fields.length > 0) {
        body+= "\n";
        for (const signal of fields) {
            const fieldName = signal.$.name;
            body+= renderSignalFromInfo({
                doc: null,
                name: `notify::${fieldName}`,
                params: [
                    {
                        docString: "",
                        name: "...args",
                        type: "any",
                        optional: false,
                    }
                ],
                return_type: {
                    docString: "",
                    type: "void",
                    name: null,
                    optional: false
                },
                deprecatedDoc: null
            }, ns_name, exclude_all_members, 1);
        }
    }
    //#endregion

    body = ` {\n` +
        `${body}\n` +
        `}\n\n`;

    let iface_str = header + body;
    return iface_str;
}

function renderMixinPart(class_name: string, ifaces: string[]): string {
    let mixin = "";
    mixin += getAdvisoryDocstring(class_name);
    mixin += `type ${class_name}Mixin = I${class_name}`;
    if (ifaces.length > 0) {
        mixin += " &"
        mixin += ` ${ifaces.join(' & ')}`;
    }
    mixin += ";\n\n";
    return mixin;
}

function renderInterfacePart(class_name: string, class_node: ClassNode, ns_name: string, exclude_self: boolean): string {
    let extension = "";
    extension += renderDocString(class_node?.doc?.[0]?._ ?? null, undefined, undefined, { ns_name: ns_name})
    extension += `${exclude_self ? '// ' : ''}interface ${class_name} extends ${class_name}Mixin {}\n`;
    return extension;
}

function renderInitOptionsInterface(class_name: string, fields: FieldNode[], ifaces: string[]): string {
    let constructorOptions = `type ${class_name}InitOptionsMixin `;

    // omit readonly props
    fields = fields.filter((v) => v?.$?.writable == 1);

    if (fields.length > 0 || ifaces.length > 0)
        constructorOptions+= "= ";
    else {
        constructorOptions+= " = {};"
    }
    
    if (ifaces.length > 0) {
        constructorOptions += `${ifaces.map(x => `${x}InitOptions`).join(' & ')}`;
    }

    if (fields.length > 0) {
        if (ifaces.length > 0)
            constructorOptions += " & \n"
        constructorOptions+= `Pick<I${class_name},\n\t`;
        constructorOptions+= fields.map(x => `"${x.$.name.replace(/\-/g, "_")}"`).join(" |\n\t")
        constructorOptions+= ">;\n";
    }
    
    constructorOptions += `\nexport interface ${class_name}InitOptions extends ${class_name}InitOptionsMixin {}\n\n`;
    return constructorOptions;
}

function renderClassPart(ctors: FunctionNode[], static_funcs: FunctionNode[], class_name: string, ns_name: string, exclude?: ExcludeClass, modifier?: ClassModifier): string {
    const ctor_str_list = ctors.map((c) => {
        const funcModifier = modifier?.function?.[c.$.name];
        return renderMethod(c, ctors, ns_name, funcModifier, { indentNum: 1, staticFunc: true, exclude: exclude?.static?.includes(c.$.name) });
    });
    const ctors_body = ctor_str_list.filter(n => !!n).join('\n');

    const static_func_str_list = static_funcs.map((sf) => {
        const funcModifier = modifier?.function?.[sf.$.name];
        return renderMethod(sf, static_funcs, ns_name, funcModifier, { indentNum: 1, staticFunc: true, exclude: exclude?.static?.includes(sf.$.name) });
    });
    const static_func_body = static_func_str_list.filter(n => !!n).join('\n');

    const constructor_modifier = modifier?.function?.["constructor"];
    const classGenericModifier = modifier?.generic ?? "";
    const static_side = '\n' +
        `class ${class_name}${classGenericModifier} {\n` +
        `${renderMethod(BuildConstructorNode(class_name), [], ns_name, constructor_modifier, {
            indentNum: 1,
            isConstructor: true
        })}\n` +
        `${ctors_body}` + NeedNewLine(ctors_body) +
        `${static_func_body + NeedNewLine(static_func_body)}` +
        `}\n`;

    return static_side;
}