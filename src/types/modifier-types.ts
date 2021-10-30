export interface ModifierDesc {
    amend: {
        class: {
            [klass: string]: ClassModifier;
        },
        function: {
            [func: string]: FunctionModifier;
        }
    }
}

export interface ClassModifier {
    doc?: string;
    function: {
        [klass: string]: FunctionModifier;
    },
    generic?: string;
}

export interface FunctionModifier {
    doc?: string;
    return_type?: ParamModifier;
    param?: {
        [param_name: string]: ParamModifier;
    },
    newParam?: NewParam[];
    generic?: string;
}

export interface NewParam {
    optional?: boolean;
    doc?: string;
    type: string;
    name: string;
}

export interface ParamModifier {
    doc?: string;
    type?: string;
    type_extension?: string[];
    optional?: boolean;
    newName?: string;
    skip?: boolean
}