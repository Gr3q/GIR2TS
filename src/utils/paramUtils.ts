import { ClassNode, EnumNode, FunctionNode, InterfaceNode, NamespaceNode, ParameterNode, Node, RecordNode } from "../types/gir-types";
import { ParamModifier } from "../types/modifier-types";

function convertToJSType(native_type?: string): string {
    // If undefined ti should be any
    if (native_type == null)
        return "any";
    
    switch (native_type) {
        case 'guint':
        case 'guint8':
        case 'guint16':
        case 'guint32':
        case 'guint64':
        case 'gint':
        case 'gint8':
        case 'gint16':
        case 'gint32':
        case 'gint64':
        case 'glong':
        case 'gulong':
        case 'gshort':
        case 'gushort':
        case 'guint':
        case 'gfloat':
        case 'gufloat':
        case 'gdouble':
        case 'gudouble':
        case 'gsize':
        case 'gssize':
        case 'long double':
        case 'int32':
        case 'guintptr':
            return 'number';
        case 'utf8':
        case 'gchar':
        case 'gunichar':
        case 'filename':
            return 'string';
        case 'gboolean':
            return 'boolean';
        case 'none':
            return 'void';
        case 'GType':
            return 'GObject.Type';
        case 'gpointer':
            return 'any';
        case 'va_list':
            return 'any[]';
        default:
            return native_type;
    }
}

export interface TypeInfo {
    type: string;
    docString: string | null;
    /** Should only be used when processing tuple return types */
    name: string | null;
    optional: boolean;
}

export function GetTypeInfo(param_node: ParameterNode, modifier?: ParamModifier): TypeInfo {
    let type: string | null = null;
    let doc: string | null = "";
    let name: string | null = null;
    if (param_node?.type?.[0]) {
        // This can only happen if we are in some kind of list type, just convert it to array
        if (param_node.type[0]?.type?.[0] != null)
            type = convertToJSType(param_node.type[0].type[0].$.name) + "[]";
        else
            type = convertToJSType(param_node.type[0].$.name);
        doc = param_node.doc?.[0]?._ ?? null;
        name = param_node?.$?.name ?? null;
    } else if ((param_node.array) && param_node.array[0].type) {
        type = convertToJSType(param_node.array[0].type[0].$.name) + '[]';
        doc = param_node.doc?.[0]?._ ?? null;
    } else if (param_node.array && param_node.array[0].array) {
        ({ type, docString:doc } = GetTypeInfo(param_node.array[0] as ParameterNode, modifier));
        type += "[]";
    } else {
        console.log("can't get param type", JSON.stringify(param_node, null, 4))
        return {
            type: modifier?.type ?? "any",
            docString: modifier?.doc ?? doc,
            name: null,
            optional: false,
        };
    }

    let finalType: string;
    if (modifier?.type != null) {
        finalType = modifier?.type;
    }
    else {
        finalType = ((modifier?.type_extension?.length ?? 0) > 0) ? `${type} | ${modifier?.type_extension?.join(" | ")}`  : type
    }

    let optional: boolean = false;
    if (param_node?.$?.["allow-none"] == 1 || param_node?.$?.["nullable"] == 1) {
        finalType+= " | null";
        optional = true;
    }
    return {
        type: finalType,
        docString: modifier?.doc ?? doc,
        name: name,
        optional: optional
    };
}