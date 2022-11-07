import { js_reserved_words } from "../consts";
import { FunctionNode, ParameterNode } from "../types/gir-types";
import { GetTypeInfo, TypeInfo } from "./paramUtils";
import { ClassModifier, FunctionModifier, ModifierDesc } from "../types/modifier-types";

export interface FunctionInfo {
    name: string;
    /** Only undefined if it's a constructor */
    return_type?: TypeInfo;
    params: Parameter[];
    doc: string | null;
    deprecatedDoc: string | null;
}

export interface Parameter {
    type: string;
    name: string;
    docString: string | null;
    optional: boolean;
}

export function getFunctionInfo(func_node: FunctionNode, modifier?: FunctionModifier, constructor: boolean = false, shadowedName: string | null = null): FunctionInfo {
    let func_name = shadowedName ?? func_node.$.name;
    let return_type: string = "any", returnDoc: string | null = null, returnName: string | null = null;
    if (!constructor) {
        ({ type:return_type, docString:returnDoc, name:returnName  } = GetTypeInfo(func_node['return-value']?.[0]));

        // Modifiers
        return_type = modifier?.return_type?.type ?? return_type;
        returnDoc = modifier?.return_type?.doc ?? returnDoc;
    }
    let params: ([param: Parameter, index: number])[] = [];
    const doc = func_node.doc?.[0]?.["_"] ?? null;
    //var has_params = "parameter" in method_node.parameters[0];

    let return_params: ParameterNode[] = [];

    let closure_index: number[] = [];
    let array_length_index: number[] = [];
    if (func_node.parameters && func_node.parameters[0].parameter) {
        for (let i = 0; i < func_node.parameters[0].parameter.length; i++) {
            const param_node = func_node.parameters[0].parameter[i];

            if (param_node.$.name === '...') 
                continue;
            let param_name = param_node.$.name;

            // Return param if direction is out an it's not caller allocated
            if (param_node.$.direction == "out") {
                return_params.push(param_node);
                continue;
            }

            // Should never include non-caller allocated params
            if (param_node.$["caller-allocates"] == 0)
                continue;

            if (modifier?.param?.[param_name]?.skip)
                continue;

            if (param_node.$.closure != null) {
                closure_index.push(param_node.$.closure);
            }

            if (param_node.array?.[0]?.$?.length != null) {
                array_length_index.push(param_node.array[0].$.length);
            }

            if (js_reserved_words.includes(param_name)) { // if clashes with JS reserved word.
                param_name = '_' + param_name;
            }

            let { type, docString, optional } = GetTypeInfo(param_node);

            if (type.includes("GLib.DestroyNotify"))
                continue;

            const finalType = modifier?.param?.[param_name]?.type ?? ((modifier?.param?.[param_name]?.type_extension?.length ?? 0 > 1) ? `${type} | ${modifier?.param?.[param_name]?.type_extension?.join(" | ")}` : type);
            params.push([{
                name: modifier?.param?.[param_name]?.newName ?? param_name,
                type: finalType,
                docString: modifier?.param?.[param_name]?.doc ?? docString,
                optional: modifier?.param?.[param_name]?.optional ?? optional
            }, i]);
        }
    }

    // Remove closures and length indicators
    params = params.filter(([v, i]) => {
        if (array_length_index.find(v => v == i))
            return false;
        if (closure_index.find(v => v == i))
            return false;

        return true;
    });

    if (modifier?.newParam != null) {
        for (const param of modifier.newParam) {
            params.push([{
                docString: param?.doc ?? null,
                type: param.type,
                name: param.name,
                optional: param.optional ?? false
            }, -1])
        }
    }

    let canBeOptional = true;
    for (const [param] of [...params].reverse()) {
        if (param.optional && !canBeOptional) {
            param.optional = false;
            param.type = param.type.includes("null") ? param.type : (param.type + " | null");
            continue;
        }

        if (!param.optional && canBeOptional) {
            canBeOptional = false;
            continue;
        }
    }

    // Returns multiple things, it should be a tuple
    if (return_params.length > 0) {
        let tupleReturnTypes: TypeInfo[] = [];

        // If already has something to return, it should be the first one
        if (return_type != "void") {
            tupleReturnTypes.push({
                docString: returnDoc,
                type: return_type,
                name: returnName,
                optional: false
            })
        }
        // Get info
        for (const outParam of return_params) {
            const typeInfo = GetTypeInfo(outParam);
            tupleReturnTypes.push(typeInfo);
        }

        returnDoc = `${tupleReturnTypes.map(x => x.docString).join("\n\n")}`;
        // Single return item, it should not be a tuple
        if (tupleReturnTypes.length == 1) {
            return_type = tupleReturnTypes[0].type;
        }
        // named or non-named tuple
        else {
            if (tupleReturnTypes.every(x => x.name != null)) {
                return_type = `[ ${tupleReturnTypes.map(x => `${x.name}: ${x.type}`).join(", ")} ]`;
            }
            else {
                return_type = `[ ${tupleReturnTypes.map(x => x.type).join(", ")} ]`;
            }
        }
    }

    return {
        name: func_name,
        return_type: (constructor) ? undefined : {
            type: modifier?.return_type?.type ?? ((modifier?.return_type?.type_extension?.length ?? 0 > 1) ? `${return_type} | ${(modifier?.return_type?.type_extension?.join(" | "))}` : return_type),
            docString: modifier?.return_type?.doc ?? returnDoc,
            name: null,
            optional: false,
        },
        params: params.map(n => n[0]),
        doc: modifier?.doc ?? doc,
        deprecatedDoc: func_node["doc-deprecated"]?.[0]?.["_"] ?? null
    }
}