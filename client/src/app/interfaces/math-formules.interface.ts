export interface DiffOperator {
    order: number;
    values: Array<number>;
}


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
        val: DiffOperator | null;
        editing: boolean;
    };
}