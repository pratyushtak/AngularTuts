import { AbstractControl, ValidationErrors } from '@angular/forms';

export function phoneValidator(control: AbstractControl): ValidationErrors | null {

  const phoneNumber = control.value;

  if (!phoneNumber) return null;
  if( phoneNumber[0] !== '7' && phoneNumber[0] !== '9' && phoneNumber[0] !== '8') return { invalidPhoneNumber: true };

  let count = 0;

  for (let i = 0; i < phoneNumber.length - 1; i++) {

    if (isNaN(Number(phoneNumber[i]))) {
      return { invalidPhoneNumber: true };
    }

    if (phoneNumber[i] === phoneNumber[i + 1]) {
      count++;
    }

    if (count >= 8) {
      return { invalidPhoneNumber: true };
    }

  }
   if (isNaN(Number(phoneNumber[phoneNumber.length - 1]))) {
      return { invalidPhoneNumber: true };
    }
  return null;
}