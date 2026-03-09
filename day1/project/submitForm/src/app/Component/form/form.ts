import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  text: string = '';
  password: string = '';
  email: string = '';
  radioOption: string = '';
  checkboxOption: string = '';
  dropdown: string = '';

  checkboxOptions: string[]=[];
  onCheckboxChange(e: any){
    const value=e.target.value;

    if(e.target.checked){
     this.checkboxOptions.push(value);
    }
    else{
      this.checkboxOptions = this.checkboxOptions.filter(v => v !== value);
    }
  }

  async hashPassword(password: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
  }

  

  async onSubmit() {
    const hashedPassword = await this.hashPassword(this.password);

     const formData = {
      text: this.text,
      password: hashedPassword,
      email: this.email,
      radioOption: this.radioOption,
      checkboxOptions: this.checkboxOptions,
      dropdown: this.dropdown
     };
     console.log(JSON.stringify(formData, null, 2));
  }

}
