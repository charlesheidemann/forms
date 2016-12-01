import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngf-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`

.submitted .ng-invalid{
    border: 1px solid red;
}
  `
  ]
})
export class TemplateDrivenComponent implements OnInit {

  user = {
    username: '',
    email: '',
    password: '',
    gender: 'male'

  };

  genders = [
    'male',
    'female'
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.user['username']);
    console.log(this.user['email']);
    console.log(this.user['password']);
  }

}
