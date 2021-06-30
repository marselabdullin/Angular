import {Component, OnInit} from '@angular/core'
import {AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";

type countryKeys = 'ru' | 'ua' | 'by'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ], [
        MyValidators.uniqEmail as AsyncValidatorFn
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  ngOnInit() {
  }

  submit() {
    console.log('Form submited:', this.form)
    const formData = {...this.form.value}

    console.log('FormData:', formData)
    this.form.reset()
  }

  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    }

    const city = cityMap[this.form.get('address')!.get('country')!.value as countryKeys]

    this.form.patchValue({address: {city}})
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control)
  }

  getControls() {
    return (this.form.get('skills') as FormArray)!.controls
  }
}
