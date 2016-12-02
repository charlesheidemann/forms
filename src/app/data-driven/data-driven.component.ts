import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

//ReactiveFormsModule 113

@Component({
  selector: 'ngf-data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('Charles', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      }),
      'password': new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);

  }

}
