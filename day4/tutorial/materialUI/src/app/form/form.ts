import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Error } from "../errorComp/error/error";

@Component({
  selector: 'app-form',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatRadioModule, MatCheckboxModule, MatButtonModule, ReactiveFormsModule, Error],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  formElements = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    dateOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    Car: new FormControl(false),
    Motorcycle: new FormControl(false),
    Truck: new FormControl(false),
    address: new FormControl('', Validators.required),
    prefix: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')])
  });

  onSubmit() {
    console.log(this.formElements.value);
  }

  // phoneValidation(control: AbstractControl) : ValidationErrors | null {
  //   const phoneNumber = String(control.value);
  //   let flag= true;

  //   for(let i = 0; i < phoneNumber.length; i++){
  //       if(isNaN(Number(phoneNumber[i]))){
  //         return { invalidPhoneNumber: true };
  //       }
  //       else if(i+1<phoneNumber.length && phoneNumber[i] === phoneNumber[i+1]){
  //         flag = false;
  //       }
  //       else{
  //         flag = true;
  //       }
  //   }
  //   if(!flag){
  //     return { invalidPhoneNumber: true };
  //   }
  //   return null;
  // }

    phoneValidation(num: number): boolean {
      const phoneNumber = String(num);
      let flag= true;

      for(let i = 0; i < phoneNumber.length; i++){
          if(isNaN(Number(phoneNumber[i]))){
            return false;
          }
          else if(i+1<phoneNumber.length && phoneNumber[i] === phoneNumber[i+1]){
            flag = false;
          }
          else{
            flag = true;
          }
      }
      if(!flag){
        return false;
      }
      return true;
  }

  formCheck() : boolean{
    if(this.formElements.valid && (this.formElements.value.Car || this.formElements.value.Motorcycle || this.formElements.value.Truck)){
      return true;
    }
    return false;
  }
}
