import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhoneError {

  isValidPhoneNumber(phoneNumber: string): boolean {
  
  if(phoneNumber.length === 0) {
    return true;
  }
  if(phoneNumber.length !== 10) {
    return false;
  }
  if( phoneNumber[0] !== '7' && phoneNumber[0] !== '9' && phoneNumber[0] !== '8') return false;

  let count = 0;

  for (let i = 0; i < phoneNumber.length - 1; i++) {

    if (isNaN(Number(phoneNumber[i]))) {
      return false;
    }

    if (phoneNumber[i] === phoneNumber[i + 1]) {
      count++;
    }

    if (count >= 8) {
      return false;
    }

  }
   if (isNaN(Number(phoneNumber[phoneNumber.length - 1]))) {
      return false;
    }
  return true;
}
}
