import { FunctionNode } from "../types/gir-types";
import { FunctionModifier } from "../types/modifier-types";
import { renderDocString } from "./docStringRenderer";
import { renderMethod } from "./methodRenderer";

export function renderCallback(cb_node: FunctionNode, ns_name: string, modifier?: FunctionModifier): string {
    const cb_name = cb_node.$.name;
    let body = renderDocString(cb_node?.doc?.[0]?._ ?? null, undefined, undefined, { ns_name: ns_name});
    body += `interface ${cb_name}${modifier?.generic ? modifier?.generic : ""} {\n${renderMethod(cb_node, [], ns_name, modifier, { include_name: false, include_access_modifier: false, indentNum: 1 })}\n}`;
    return body;
}