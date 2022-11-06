import { renderDocString } from "./docStringRenderer";
import { getFunctionInfo } from "../utils/functionUtils";
import { FunctionNode } from "../types/gir-types";
import { FunctionModifier } from "../types/modifier-types";

export interface RenderMethodOptions {
    include_name?: boolean;
    include_access_modifier?: boolean;
    indentNum?: number;
    staticFunc?: boolean;
    isConstructor?: boolean;
    exclude?: boolean;
    shadow_name?: string;
}

/*
    Produces the TS string declaring the method represented by method_node.
*/
export function renderMethod(
    method_node: FunctionNode,
    methods: FunctionNode[],
    ns_name: string,
    funcModifier?: FunctionModifier,
    options: RenderMethodOptions = {
        include_access_modifier: true,
        include_name: true,
        indentNum: 0,
        exclude: false,
        staticFunc: false,
        isConstructor: false,
    },
): string {

    const {
        include_access_modifier = true,
        include_name = true,
        indentNum = 0,
        exclude = false,
        staticFunc = false,
        isConstructor = false,
        shadow_name
    } = options;

    if (method_node.$["shadowed-by"] != null) {
        const newNode = methods.find((node) => node.$?.name == method_node.$["shadowed-by"]);
        if (newNode == null)
            throw Error(`inconsistent .gir file "${ns_name}: function "${method_node.$.name}" is shadowed by "${method_node.$["shadowed-by"]}" but it can't be found!`)
        return renderMethod(newNode, methods, ns_name, funcModifier, { ...options, shadow_name: method_node.$.name })
    }

    if (/*c.$.introspectable == "0" ||*/shadow_name == undefined && method_node.$.shadows != null)
        return "";

    const info = getFunctionInfo(method_node, funcModifier, isConstructor, shadow_name ?? null);
    const ind = "\t".repeat(indentNum);
    let indentAdded = false;
    let str = '';
    str += renderDocString(
        info.doc,
        info.params,
        info.return_type,
        { 
            ns_name: ns_name,
            indent: indentNum,
            deprecatedDoc: info.deprecatedDoc ?? undefined
        }
    );
    
    if (exclude) {
        str += `${ind}// `;
        indentAdded = true;
    }

    if (include_access_modifier) {
        if (!indentAdded) {
            str += ind;
            indentAdded = true;
        }
        str += `public `;
        indentAdded = true;
    }
    if (staticFunc) {
        if (!indentAdded) {
            str += ind;
            indentAdded = true;
        }
        str += `static `;
        indentAdded = true;
    }
    if (include_name) {
        if (!indentAdded) {
            str += ind;
            indentAdded = true;
        }
        str += info.name;
        if (funcModifier?.generic != null)
            str += funcModifier?.generic;
    }

    if (!indentAdded) {
        str += ind;
        indentAdded = true;
    }
    str += '(';

    if (info.params.length > 0) {
        let params: string[] = [];
        for (const param of info.params) {
            params.push(param.name + (param.optional ? "?" : "") + ': ' + param.type);
        }
        str += params.join(", ");
    }

    str += ')'
    if (info.return_type != null)
        str += ': ' + info.return_type.type;
    str += ";";

    return str;
}