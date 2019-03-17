export enum EyeColor {
    Black = 0,
    Blue,
    Brown,
    Gray,
    Green,
    Hazel,
    Other
}

export namespace EyeColor {
    export function values() {
        return Object.keys(EyeColor).filter(type => isNaN(<any>type) && type !== 'values');
    }
}
