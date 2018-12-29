import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {
  identifyingInfo: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.identifyingInfo = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      sex: [''],
      age: [''],
      ethnicity: [''],
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
