export class AddTopping {
    static readonly type = '[salad] add topping';
    constructor(public payload: any) {}
}

export class RemoveTopping {
    static readonly type = '[salad] remove topping';
    constructor(public payload: any) {}
}

export class StartOver {
    static readonly type = '[salad] start over';
}
