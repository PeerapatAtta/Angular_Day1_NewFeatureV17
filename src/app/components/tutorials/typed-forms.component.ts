import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-typed-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
  <div>
    <form [formGroup]="login">
      username: <input type="text" formControlName="username"> <br>
      password: <input type="text" formControlName="password"> <br>
      age: <input type="text" formControlName="age"> <br>
      {{login.value|json}} <br>
      <button type="button" (click)="reset()">Reset</button>
    </form>
  </div>  
  `,
})

export class TypedFormsComponent {
  //Property
  login = new FormGroup({
    username: new FormControl<string>('test', {nonNullable:true}),
    password: new FormControl<string>('1234'),
    age: new FormControl<number>(20),
  })
  //Method
  submit() {
    const value = this.login.value;
  }
  //Method
  reset(){
    this.login.reset();
  }

}
