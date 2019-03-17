export enum Sex {
    Female = 1,
    Male = 2,
    Other = 3
}

export namespace Sex {
    export function values() {
        return Object.keys(Sex).filter(type => isNaN(<any>type) && type !== 'values');
    }
}
