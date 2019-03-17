import { Race } from './race.enum';
import { Sex } from './sex.enum';
import { HairColor } from './hair-color.enum';
import { EyeColor } from './eye-color.enum';
import { State } from './state.enum';

export interface MissingPerson {
    firstName: string;
    lastName: string;
    sex: Sex;
    age: number;
    race: Race;
    hairColor: HairColor;
    eyeColor: EyeColor;
    addressStreet: string;
    addressCity: string;
    addressState: State;
    addressZip: number;
    phoneNumber: string;
    emailAddress: string;
    additionalInfo: string;
}
