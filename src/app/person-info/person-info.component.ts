import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EyeColor, HairColor, Race, Sex, State } from '@models/missing-person';

@Component({
    selector: 'app-person-info',
    templateUrl: './person-info.component.html',
    styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {
    identifyingInfo: FormGroup;
    secondFormGroup: FormGroup;
    eyeColorOptions = EyeColor;
    hairColorOptions = HairColor;
    raceOptions = Race;
    sexOptions = Sex;
    stateOptions = State;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.identifyingInfo = this._formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            sex: [''],
            age: [''],
            race: [''],
            hairColor: [''],
            eyeColor: [''],
            addressStreet: [''],
            addressCity: [''],
            addressState: [''],
            addressZip: [''],
            phoneNumber: [''],
            emailAddress: [''],
            additonalInfo: ['']
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }

}
