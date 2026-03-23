import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthState {
  loginState: boolean = false;
}
