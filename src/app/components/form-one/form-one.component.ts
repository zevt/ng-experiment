import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss']
})
export class FormOneComponent implements OnInit {
  person: Person;
  languages = ['English', 'Spanish'];

  constructor() { }

  ngOnInit() {
    this.person = new Person();
  }

  submit() {
    console.log(this.person);
  }

  changeDoB(value) {
    console.log(value);
  }
}

class Person {
  firstName: String;
  lastName: String;
  DOB: String;
  gender: String;
  citizen: boolean;
  language: String;
}

