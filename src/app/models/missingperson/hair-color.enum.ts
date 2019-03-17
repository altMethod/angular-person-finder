export enum HairColor {
    Blond = 0,
    Brown,
    Black,
    White,
    Sandy,
    Gray,
    Red,
    Other
}

export namespace HairColor {
    export function values() {
        return Object.keys(HairColor).filter(type => isNaN(<any>type) && type !== 'values');
    }
}
