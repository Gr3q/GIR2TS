import { renderDocString } from "./docStringRenderer";
import { FunctionNode, ParameterNode, RecordNode } from "../types/gir-types";
import { ExcludeClass } from "../types/exclude-types";
import { BuildConstructorNode } from "../utils/utils";
import { GetTypeInfo } from "../utils/paramUtils";
import { renderMethod } from "./methodRenderer";
import { ClassModifier, FunctionModifier, ParamModifier } from "../types/modifier-types";
import { ignored_property_names } from "../consts";
import { renderProperty } from "./propertyRenderer";

function getAllMethods(object: RecordNode): FunctionNode[] {
    let methods: FunctionNode[] = [];
    if (object.method) {
        methods = methods.concat(object.method);
    }
    if (object['virtual-method']) {
        methods = methods.concat(object['virtual-method']);
    }
    return methods;
}

function renderCallbackField(cb_node: FunctionNode, ns_name: string, indent: number, exclude: boolean): string {
    let cb_name = cb_node.$.name;
    if (cb_name === 'constructor') {
        cb_name += '_'; // Append an underscore.
    }

    let result = `${"\t".repeat(indent)}`;
    if (exclude)
        result += "// ";
    result += `public ${cb_name}: {${renderMethod(cb_node, [], ns_name, undefined, { include_name: false, include_access_modifier: false })}};`;
    return result;
}

/** Some static functions are in constructor nodes, render them as static functions */
function renderConstructorField(constructor_node: FunctionNode, nodes: FunctionNode[], ns_name: string, indent: number, exclude: boolean, modifier?: FunctionModifier) {
    return `${renderMethod(constructor_node, nodes, ns_name, modifier, { indentNum: indent, exclude: exclude, staticFunc: true })}`
}

export function renderRecordAsClass(rec_node: RecordNode, ns_name: string, exclude?: ExcludeClass, modifier?: ClassModifier): string {
    let props: ParameterNode[] = [];
    let callback_fields: FunctionNode[] = [];
    let methods = getAllMethods(rec_node);
    let exclude_all_members = exclude?.members ?? false;

    if (rec_node.field)
        for (let f of rec_node.field) {
            if ((f.type || f.array) && !ignored_property_names.includes(f.$.name)) {
                props.push(f);
            } else if (f.callback) {
                callback_fields.push(f.callback[0]);
            }
        }
    let body = '';

    let staticFuncs: FunctionNode[] = [];
    // Constructor keyword causes problems here so we need to check with stringify as well
    // even if value is null it still comes up as function
    if (JSON.stringify(rec_node.constructor) != undefined && rec_node.constructor != null) {
        staticFuncs = staticFuncs.concat(rec_node.constructor);
        
    }

    if (rec_node["function"]) {
        staticFuncs = staticFuncs.concat(rec_node["function"])
    }

    for (let func of staticFuncs) {
        if (JSON.stringify(func) == undefined || func == null)
            continue;
        const func_name = func.$.name;
        const excluded = (exclude?.static?.includes(func_name) ?? false) || exclude_all_members;
        const modifierFunc = modifier?.function?.[func_name];
        const func_text = renderConstructorField(func, staticFuncs, ns_name, 1, excluded, modifierFunc);

        if (!func_text)
            continue;

        body += func_text + "\n";
    }

    for (let f of props) {
        const excluded = (exclude?.prop?.includes(f.$.name) ?? false) || exclude_all_members;
        body += renderProperty(f, ns_name, modifier?.prop?.[f.$.name], true, 1, excluded) + '\n';
    }

    for (let c of callback_fields) {
        const func_name = c.$.name;
        const excluded = (exclude?.callback?.includes(func_name) ?? false) || exclude_all_members;
        body += renderCallbackField(c, ns_name, 1, excluded) + '\n';
    }

    for (let m of methods) {
        const func_name = m.$.name;
        const excluded = (exclude?.method?.includes(func_name) ?? false) || exclude_all_members;
        const modifierFunc = modifier?.function?.[func_name];
        const func_text = renderMethod(m, methods, ns_name, modifierFunc, { indentNum: 1, exclude: excluded });

        if (!func_text)
            continue;
            
        body += func_text + '\n';
    }

    let result = `export interface ${rec_node.$.name}InitOptions {}\n`;
    result += renderDocString(rec_node?.doc?.[0]?._ ?? null, undefined, undefined, {ns_name: ns_name});
    result += `interface ${rec_node.$.name} {}\n`;

    const genericModifier = modifier?.generic ?? "";
    result += `class ${rec_node.$.name}${genericModifier} {\n`;

    const constructor_modifier = modifier?.function?.["constructor"];
    result += `${renderMethod(BuildConstructorNode(rec_node.$.name), [], ns_name, constructor_modifier, { indentNum: 1, isConstructor: true })}\n`;
    result += `${body}}`;
    return result
}