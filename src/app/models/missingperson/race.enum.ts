export enum Race {
    'American Indian or Alaskan Native' = 0,
    Asian,
    'Black or African American',
    'Native Hawaiin or Pacific Islander',
    White,
    Other
}

export namespace Race {
    export function values() {
        return Object.keys(Race).filter(type => isNaN(<any>type) && type !== 'values');
    }
}
