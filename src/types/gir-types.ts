export interface NodeAttributes {
    name: string;
    "shadowed-by"?: string;
    introspectable?: "0";
    shadows?: string;
}


export interface ParameterAttributes extends NodeAttributes {
    direction?: string;
    readable?: number;
    private?: number;
    writable?: number;
    "caller-allocates"?: number;
    "optional"?: number;
    "allow-none"?: number;
    "nullable"?: number;
    deprecated?: number;
}

export interface MemberAttributes extends NodeAttributes {
    value: number;
}

export interface ClassAttributes extends NodeAttributes {
    parent?: string;
}

export interface Node {
    "$": NodeAttributes
    "_": string;
    // doc can't have another doc inside
    doc?: Omit<Node, "doc">[];
}
export interface TypeNode extends Omit<Node, "$"> {
    "$": Partial<NodeAttributes>;
    /** This can only happen if we are in some kind of list type */
    type?: TypeNode[];
}

export interface ParameterNode extends Node {
    $: ParameterAttributes;
    type?: TypeNode[];
    array?: NodeWithType[];
    doc?: Node[];
    "doc-deprecated"?: Node[];
}

export interface NodeWithType extends Node {
    type?: Node[];
    array?: NodeWithType[];
}

export interface ParametersNode extends Node {
    parameter: ParameterNode[];
}

export interface FunctionNode extends Node {
    "return-value": ParameterNode[];
    parameters: ParametersNode[];
    "doc-deprecated"?: Node[];
    doc?: Node[];
}

export interface MemberNode extends Node {
    $: MemberAttributes;
    doc?: Node[];
}

export interface EnumNode extends Node {
    member: MemberNode[];
    doc?: Node[];
}

export interface FieldNode extends ParameterNode {
    "callback"?: FunctionNode[];
}

export interface RecordNode extends Node {
    field: FieldNode[];
    method: FunctionNode[];
    "virtual-method": FunctionNode[];
    "constructor"?: FunctionNode[]
    doc?: Node[];
}

export interface ClassNode extends Node {
    $: ClassAttributes;
    "implements": Node[];
    "constructor": FunctionNode[];
    "function": FunctionNode[];
    "field": ParameterNode[];
    "glib:signal": FunctionNode[];
    "method": FunctionNode[];
    "virtual-method": FunctionNode[];
    "property": ParameterNode[];
    "doc": Node[];
}

export interface InterfaceNode extends Node {
    "method": FunctionNode[];
    "virtual-method": FunctionNode[];
    "property": ParameterNode[];
}

export interface NamespaceNode extends Node {
    "class": ClassNode[];
    "record": RecordNode[];
    "interface": InterfaceNode[];
    "enumeration": EnumNode[];
    "bitfield": EnumNode[];
    "callback": FunctionNode[];
    "function": FunctionNode[];
    "union": ClassNode[];
    "alias": ParameterNode[];
    "constant": NodeWithType[];
}