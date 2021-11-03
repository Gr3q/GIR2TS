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
}

export interface Parameter {
    type: string;
    name: string;
    docString: string | null;
    optional: boolean;
}

export function getFunctionInfo(func_node: FunctionNode, modifier?: FunctionModifier, constructor: boolean = false): FunctionInfo {
    let func_name = func_node.$.name;
    let return_type: string = "any", returnDoc: string | null = null;
    if (!constructor) {
        ({ type:return_type, docString:returnDoc } = GetTypeInfo(func_node['return-value']?.[0]));

        // Modifiers
        return_type = modifier?.return_type?.type ?? return_type;
        returnDoc = modifier?.return_type?.doc ?? returnDoc;
    }
    let params: Parameter[] = [];
    const doc = func_node.doc?.[0]?.["_"] ?? null;
    //var has_params = "parameter" in method_node.parameters[0];

    let return_params: ParameterNode[] = [];

    if (func_node.parameters && func_node.parameters[0].parameter) {
        for (var param_node of func_node.parameters[0].parameter) {
            if (param_node.$.name === '...' || param_node.$.name === 'user_data') continue;
            let param_name = param_node.$.name;

            // Return param if direction is out an it's not caller allocated
            if (param_node.$.direction == "out" && param_node.$["caller-allocates"] == 0) {
                return_params.push(param_node);
                continue;
            }

            // Should never include non-caller allocated params
            if (param_node.$["caller-allocates"] == 0)
                continue;

            if (modifier?.param?.[param_name]?.skip)
                continue;

            if (js_reserved_words.includes(param_name)) { // if clashes with JS reserved word.
                param_name = '_' + param_name;
            }
            let { type, docString } = GetTypeInfo(param_node);

            const finalType = modifier?.param?.[param_name]?.type ?? ((modifier?.param?.[param_name]?.type_extension?.length ?? 0 > 1) ? `${type} | ${modifier?.param?.[param_name]?.type_extension?.join(" | ")}` : type);
            params.push({
                name: modifier?.param?.[param_name]?.newName ?? param_name,
                type: finalType,
                docString: modifier?.param?.[param_name]?.doc ?? docString,
                optional: modifier?.param?.[param_name]?.optional ?? false
            });
        }
    }

    if (modifier?.newParam != null) {
        for (const param of modifier.newParam) {
            params.push({
                docString: param?.doc ?? null,
                type: param.type,
                name: param.name,
                optional: param.optional ?? false
            })
        }
    }

    // Tuple return type
    if (return_params.length > 1 && return_type == "void") {
        let tupleReturnTypes: TypeInfo[] = [];
        for (const outParam of return_params) {
            const typeInfo = GetTypeInfo(outParam);
            tupleReturnTypes.push(typeInfo);
        }
        returnDoc = `${tupleReturnTypes.map(x => x.docString).join("\n\n")}`;
        if (tupleReturnTypes.every(x => x.name != null)) {
            return_type = `[ ${tupleReturnTypes.map(x => `${x.name}: ${x.type}`).join(", ")} ]`;
        }
        else {
            return_type = `[ ${tupleReturnTypes.map(x => x.type).join(", ")} ]`;
        } 
    }

    return {
        name: func_name,
        return_type: (constructor) ? undefined : {
            type: modifier?.return_type?.type ?? ((modifier?.return_type?.type_extension?.length ?? 0 > 1) ? `${return_type} | ${(modifier?.return_type?.type_extension?.join(" | "))}` : return_type),
            docString: modifier?.return_type?.doc ?? returnDoc,
            name: null
        },
        params: params,
        doc: modifier?.doc ?? doc
    }
}