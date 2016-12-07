import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ngf-data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  genders = ['male', 'female'];

  constructor(private formBuilder: FormBuilder) {

    // alt+shift+a
    /*      
          this.myForm = new FormGroup({
          'userData': new FormGroup({
            'username': new FormControl('Charles', Validators.required),
            'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
          }),
          'password': new FormControl(''),
          'gender': new FormControl('male'),
          'hobbies': new FormArray([
            new FormControl('Cooking', Validators.required)
          ])
        });
    */

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['Charles', [Validators.required, this.exampleValidator]],
        'email': formBuilder.control('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      }),
      'password': [''],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', [Validators.required], this.asyncExampleValidator]
      ])
    });

    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );

  }

  ngOnInit() {
  }

  onAddHobby() {
    let formArray = <FormArray>this.myForm.controls['hobbies'];
    formArray.push(new FormControl('', Validators.required, this.asyncExampleValidator));
  }

  onSubmit() {
    console.log(this.myForm);
    console.log((<FormArray>this.myForm.controls['hobbies']));
  }

  exampleValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Example') {
      return { example: true };
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({ example: true });
          } else {
            resolve(null);
          }
        }, 2000);
      }
    );
    return promise;
  }

}