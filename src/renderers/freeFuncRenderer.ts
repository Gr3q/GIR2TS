import { FunctionNode } from "../types/gir-types";
import { FunctionModifier } from "../types/modifier-types";
import { getFunctionInfo } from "../utils/functionUtils";
import { renderDocString } from "./docStringRenderer";

export function renderFreeFunction(func_node: FunctionNode, func_nodes: FunctionNode[], ns_name: string, exclude_list: string[] | null = null, modifier?: FunctionModifier, shadow_name?: string): string {
    if (func_node.$["shadowed-by"] != null) {
        const newNode = func_nodes.find(node => node.$.name == func_node.$["shadowed-by"]);
        if (newNode == null)
            throw Error(`inconsistent .gir file "${ns_name}: function "${func_node.$.name}" is shadowed by "${func_node.$["shadowed-by"]}" but it can't be found!`);
        return renderFreeFunction(newNode, func_nodes, ns_name, exclude_list, modifier, func_node.$.name);
    }

    if (/*c.$.introspectable == "0" ||*/shadow_name == undefined && func_node.$.shadows != null)
        return "";

    let { name, return_type, params, doc } = getFunctionInfo(func_node, modifier, false, shadow_name);

    let str = `${renderDocString(doc, params, return_type, { ns_name: ns_name})}`;
    if (exclude_list && exclude_list.indexOf(name) !== -1) {
        str += '// ';
    }
    str += `function ${name}(${params.map((p) => `${p.name}: ${p.type}`).join(', ')})${(return_type != null) ? (": " + return_type.type) : ""};`;
    return str;
}