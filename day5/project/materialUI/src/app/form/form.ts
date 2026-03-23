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
import { phoneValidator } from '../Validators/phone-validator/phone-validator';
import { NameError } from '../errorComp/name-error/name-error';
@Component({
  selector: 'app-form',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatRadioModule, MatCheckboxModule, MatButtonModule, ReactiveFormsModule, Error, NameError],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  showVehicleAlert: boolean = false;
  formElements = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z ]+@[a-zA-Z ]+\\.[a-zA-Z ]+$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    dateOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    Car: new FormControl(false),
    Motorcycle: new FormControl(false),
    Truck: new FormControl(false),
    address: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$'), phoneValidator]),
  });

  onSubmit() {

    const vehicles: string[] = [];
    if(!this.formElements.value.Car &&
     !this.formElements.value.Motorcycle &&
     !this.formElements.value.Truck){

    this.showVehicleAlert = true;
    return;
    }

    if (this.formElements.value.Car) vehicles.push('Car');
    if (this.formElements.value.Motorcycle) vehicles.push('Motorcycle');
    if (this.formElements.value.Truck) vehicles.push('Truck');
    const data = {
      name: this.formElements.value.name,
      email: this.formElements.value.email,
      password: this.formElements.value.password,
      dateOfBirth: this.formElements.value.dateOfBirth,
      gender: this.formElements.value.gender,
      vehicleType: vehicles,
      address: this.formElements.value.address,
      state: this.formElements.value.state,
      phoneNumber: this.formElements.value.phoneNumber
    }
      console.log(JSON.stringify(data, null, 2));
    }

  

  formCheck() : boolean{
    if(this.formElements.valid && (this.formElements.value.Car || this.formElements.value.Motorcycle || this.formElements.value.Truck)){
      return true;
    }
    return false;
  }

  NameError(): boolean{
    let flag = false;
    const nameControl = this.formElements.get('name');
    if(nameControl?.errors?.['pattern']){
      flag = true;
    }
    return flag;
  }
}

