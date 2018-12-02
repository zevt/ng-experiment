import { Component, OnInit } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import * as validator from 'validator';
import {debounce, debounceTime} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  personForm: FormGroup;
  firstName: FormControl = new FormControl('',
    [Validators.required, Validators.pattern('[\\w\\s]+'), myValidator(0)]);
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: ['', [Validators.required, Validators.pattern('[\\w\\s]+'), myValidator(1)]],
    });

    // this.personForm.setValue({
    //   firstName: 'John',
    //   lastName: 'Carpenter'
    // });

    // this.personForm.patchValue({
    //   firstName: 'David'
    // });

    this.personForm.get('firstName').valueChanges.pipe(debounceTime(1200)).subscribe( value => {
      this.personForm.patchValue( {
        firstName: value
      });
    });
  }

  save() {
    console.log('save');
    console.log(this.personForm.value);
    console.log(validator.isAlpha('adf'));

  }

  getErrors(): any[] {
    const errors = [];
    if (this.firstName.errors) {
      for (const e of Object.keys(this.firstName.errors)) {
        if (this.firstName.errors[e]) {
          errors.push(e);
        }
      }
    }

    return errors;
  }

}

function myValidator(v: any): ValidatorFn {
  return (c: AbstractControl) => {
    if (c.value == null || c.value.length < 5) {
      return {'Must have length greater than 5': true};
    }
    return null;
  };
}

// const firtNameVadAsync: AsyncValidatorFn = {
//   return Observable.create(obs => {
//     (c: AbstractControl) => this.personForm.get('firstName').pipe( debounceTime(1200))
//     .subscribe(v => {
//       obs.next({ 'cannot contain numbers ' : validator.isNumeric(v)});
//       obs.complete();
//     });
//   });

// }


