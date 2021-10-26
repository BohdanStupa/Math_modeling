export interface DiffOperator {
    order: number;
    values: Array<number>;
}

export interface XValue {
    power: number;
    index: number;
}

export type MathLiteralType = "diff_operator" | "x_value";

export interface EqPart {
    sign: {
        val: boolean;
        editing: boolean;
    }
    coef: {
        val: number;
        editing: boolean;
    }
    op: {
        val: DiffOperator | XValue | null;
        editing: boolean;
    };
}

export interface MathLiteral {
    type: MathLiteralType;
    literal: DiffOperator | XValue;
}