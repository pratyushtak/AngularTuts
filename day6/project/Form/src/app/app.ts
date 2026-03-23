import { Component, signal } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { Name } from './customErrors/name/name';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PhoneError } from './customErrors/phone-error'; 



@Component({
  selector: 'app-root',
  imports: [MatInputModule, FormsModule, MatDatepickerModule, MatNativeDateModule, 
    MatRadioModule, MatCheckboxModule, MatSelectModule, MatButtonModule, Name, NgbAlertModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Form');
  vehicles: string[] = [];
  constructor(public phoneError: PhoneError) {}

  name: string = '';
  email: string = '';
  password: string = '';
  dateOfBirth: string = '';
  maxDate: Date = new Date();
  gender: string = '';
  car: boolean = false;
  motorcycle: boolean = false
  truck: boolean = false;
  address: string = '';
  state: string = '';
  country: string = '';
  phoneNumber: string = '';
  alertMessage: boolean = false;
  
  checkedVehicle(): boolean {
    return this.car || this.motorcycle || this.truck;
  }

  onSubmit() {

    if(this.car) {
      this.vehicles.push('Car');
    }
    if(this.motorcycle) { 
      this.vehicles.push('Motorcycle');
    }
    if(this.truck) {
      this.vehicles.push('Truck');  
    }
    if(!this.checkedVehicle()) {
      this.alertMessage= true;
      return;
    }
    if(this.vehicles.length === 0) {
      this.alertMessage= true;
      return;
    }
    const data = ({
      name: this.name,
      email: this.email,
      password: this.password,
      dateOfBirth: this.dateOfBirth, 
      gender: this.gender,
      vehicles: this.vehicles, 
      address: this.address,
      state: this.state,
      phoneNumber: this.phoneNumber
    })

    console.log(JSON.stringify(data, null, 2))
  }

  isValidName(): boolean {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(this.name);
  }
  
}
