import { ClassNode, EnumNode, FunctionNode, InterfaceNode, NamespaceNode, ParameterNode, Node, RecordNode } from "./types/gir-types";
import { FunctionModifier, ModifierDesc } from "./types/modifier-types";
import { ExcludeDesc } from "./types/exclude-types";
import { Parser } from 'xml2js';
import { GetTypeInfo } from "./utils/paramUtils";
import { getFunctionInfo } from "./utils/functionUtils";
import { renderDocString } from "./renderers/docStringRenderer";
import { renderRecordAsClass } from "./renderers/recordRenderer";
import { renderMethod } from "./renderers/methodRenderer";
import { renderClassAsInterface } from "./renderers/classRenderer";
import { renderFreeFunction } from "./renderers/freeFuncRenderer";
import { renderCallback } from "./renderers/freeCallbackRenderer";
import { renderEnumeration } from "./renderers/enumRenderer";
import { RenderConstant } from "./renderers/constantRenderer";
import { js_reserved_words } from "./consts";
import { GatherNodeNames, getSnakeCaseNamespaceMap, getSnakeCaseNodeNameMap } from "./utils/utils";


function renderNodeAsBlankInterface(node: Node, ns_name: string) {
    let result = renderDocString(node?.doc?.[0]?._ ?? null, undefined, undefined, { ns_name: ns_name });
    result += `interface ${node.$.name} {}`;
    return result;
}

function renderAlias(alias_node: ParameterNode, ns_name: string): string {
    let result = renderDocString(alias_node?.doc?.[0]?._ ?? null, undefined, undefined, { ns_name: ns_name });
    result += `type ${alias_node.$.name} = ${GetTypeInfo(alias_node).type};`;
    return result;
}

function renderNamespace(ns_node: NamespaceNode, ns_name: string, exclude?: ExcludeDesc, modifiers?: ModifierDesc): string {
    let body = '';
    let class_nodes: ClassNode[] = [];
    if (ns_node.class)
        class_nodes = class_nodes.concat(ns_node.class);
        for (let class_node of class_nodes) {
            let class_name = class_node.$.name;
            // if (exclude && class_name in exclude.exclude.class)
            body += '\n\t' + (renderClassAsInterface(
                class_node,
                ns_name,
                exclude?.exclude?.class?.[class_name],
                modifiers?.amend?.class?.[class_name]
            )).replace(/\n/gm, "\n\t");
            
            const recordNodes = ns_node.record.filter((x) => x.$.name == `${class_name}Private` || x.$.name == `${class_name}Class`);
            ns_node.record = ns_node.record.filter((x) => x.$.name != `${class_name}Private` && x.$.name != `${class_name}Class`);
        }
    if (ns_node.record)
        for (let rec_node of ns_node.record) {
            body += '\n\t' + (renderRecordAsClass(
                rec_node,
                ns_name,
                exclude ? exclude.exclude.class[rec_node.$.name] : undefined,
                modifiers?.amend?.class?.[rec_node.$.name]
            ) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.interface)
        for (let iface_node of ns_node.interface) {
            body += '\n\t' + (renderClassAsInterface(
                iface_node as ClassNode,
                ns_name,
                exclude?.exclude?.class?.[iface_node.$.name],
                modifiers?.amend?.class?.[iface_node.$.name]
            ) + '\n\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.enumeration)
        for (let enum_node of ns_node.enumeration) {
            body += '\n\t' + (renderEnumeration(enum_node, ns_name, modifiers?.amend?.enumeration?.[enum_node.$.name]) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.bitfield)
        for (let bf_node of ns_node.bitfield) {
            body += '\n\t' + (renderEnumeration(bf_node, ns_name, modifiers?.amend?.enumeration?.[bf_node.$.name]) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.callback)
        for (let cb_node of ns_node.callback) {
            body += '\n\t' + (renderCallback(cb_node, ns_name, modifiers?.amend?.interface?.[cb_node.$.name]) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.union)
        for (let union_node of ns_node.union) {
            body += '\n\t' + (renderClassAsInterface(
                union_node,
                ns_name,
                exclude?.exclude?.class?.[union_node?.$?.name],
                modifiers?.amend?.class?.[union_node?.$?.name]
            ) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.alias)
        for (let alias_node of ns_node.alias) {
            body += '\n\t' + (renderAlias(alias_node, ns_name) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.function)
        for (let func_node of ns_node.function) {
            let exc = exclude && exclude.exclude.function ? exclude.exclude.function : undefined;
            const funcText = renderFreeFunction(
                func_node,
                ns_node.function,
                ns_name,
                exc,
                modifiers?.amend?.function?.[func_node.$.name]
            );

            if (!funcText)
                continue;

            body += '\n\t' + (funcText).replace(/\n/gm, "\n\t");
        }
    if (ns_node.constant)
        for (let constant of ns_node.constant) {
            let exclude = false;
            // reserved or starts with number
            if (js_reserved_words.includes(constant.$?.name) || constant.$?.name.match(/^\d/))
                exclude = true;

            body += '\n\t' + (RenderConstant(
                constant,
                ns_name,
                exclude,
            ) + '\n').replace(/\n/gm, "\n\t");
        }

    // Change lines with only whitespace chars to empty strings 
    body = body.split("\n").reduce((p, c) => p += (c.trim() == "" ? "\n" : `${c}\n`));
    let result = "/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */\n";
    result += `declare namespace imports.gi.${ns_node.$.name} {\n${body}}`;
    return result;
}

//#region Generator

interface ParseGIRResult {
    repository: {
        "namespace": NamespaceNode[];
    }
}

interface GeneratorResult {
    gir_name: string;
    typing_str: string;
}


export const nsNodeSnakeCaseMap: Record<string, Record<string, string>> = {};
export let nsSnakeCaseMap: Record<string, string> = {}; 

export class Generator {

    private lib_list: { lib_name: string; xml_str: string }[];
    private ns_list: { lib_name: string; ns_node: NamespaceNode }[] = [];
    private exclude_json_map: { [class_name: string]: any } = {};
    private modifier_json_map: { [lib_name: string]: ModifierDesc } = {};

    constructor(gir_xml_list: { lib_name: string; xml_str: string }[], exclude_json_map: { [class_name: string]: any } = {}, modifier_json_map: { [lib_name: string]: ModifierDesc }) {
        this.lib_list = gir_xml_list;
        this.exclude_json_map = exclude_json_map;
        this.modifier_json_map = modifier_json_map;
    }

    public generateTypings(cb: (res: GeneratorResult[]) => any) {
        let self = this;
        let count = 0;

        function cb_counter() {
            if (++count === self.lib_list.length)
                proceed();
        }

        const parser = new Parser();

        //let ns_list: NamespaceNode[] = [];
        for (let lib of this.lib_list) {
            parser.parseString(lib.xml_str, (err: Error, res: ParseGIRResult) => {
                // console.log(res.repository.namespace[0].class[4].constructor)
                this.ns_list.push({
                    lib_name: lib.lib_name,
                    ns_node: res.repository.namespace[0]
                });
                cb_counter();
            });
        }
        function proceed() {
            const res: GeneratorResult[] = [];
            const ns_names: string[] = [];
            for (let ns of self.ns_list) {
                const ns_name = ns.ns_node.$.name.replace(/\./g, "");
                ns_names.push(ns_name);
                nsNodeSnakeCaseMap[ns_name] = getSnakeCaseNodeNameMap(ns.ns_node);
            }
            nsSnakeCaseMap = getSnakeCaseNamespaceMap(ns_names);
            
            for (let ns of self.ns_list) {
                const ns_name = ns.ns_node.$.name;
                const typing_str = renderNamespace(ns.ns_node, ns_name, self.exclude_json_map[ns.lib_name], self.modifier_json_map[ns.lib_name]);
                res.push({
                    gir_name: ns.lib_name,
                    typing_str: typing_str
                });
            }
            cb(res);
        }
    }

    //#endregion

}