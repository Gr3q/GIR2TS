import { FunctionNode } from "../types/gir-types";
import { FunctionModifier } from "../types/modifier-types";
import { FunctionInfo, getFunctionInfo } from "../utils/functionUtils";
import { renderDocString } from "./docStringRenderer";

export function renderSignal(node: FunctionNode, ns_name: string, exclude: boolean = false, indent: number = 0, modifiers?: FunctionModifier) {
    const info = getFunctionInfo(node, modifiers);
    
    //#region Generate callback docstring
    let callbackDocstring = "Callback function\n - owner: owner of the emitted event \n";
    for (const param of info.params) {
        callbackDocstring+= ` - ${param.name}: ${param.docString ?? ""} \n`;
    }
    if (info.return_type?.type != "void") {
        callbackDocstring+= ` - returns ${info.return_type?.docString ?? ""} \n`;
    }
    //#endregion

    let result = renderDocString(
        info.doc,
        [
            {
                docString: "",
                name: "signal",
                type: info.name,
                optional: false
            },
            {
                name: "callback",
                optional: false,
                docString: callbackDocstring,
                type: ""

            }
        ],
        {
            docString: "Callback ID",
            name: "",
            type: "",
            optional: false
        },
        { 
            indent: indent,
            ns_name: ns_name
        }
    );
    result += "\t".repeat(indent);
    if (exclude)
        result += "// ";

    result+= `connect(signal: "${info.name}", callback: (owner: this${info.params.length > 0 ? ", " : ""}${info.params.map(x => x.name + ": " + x.type).join(", ")}) => ${info.return_type?.type}): number;\n`;
    return result;
}

export function renderSignalFromInfo(info: FunctionInfo, ns_name: string, exclude: boolean = false, indent: number = 0) {  
    let result = renderDocString(info.doc, undefined, undefined, {indent: indent, ns_name: ns_name});
    result += "\t".repeat(indent);
    if (exclude)
        result += "// ";

    result+= `connect(signal: "${info.name}", callback: (owner: this${info.params.length > 0 ? ", " : ""}${info.params.map(x => x.name + ": " + x.type).join(", ")}) => ${info.return_type?.type}): number;\n`;
    return result;
}