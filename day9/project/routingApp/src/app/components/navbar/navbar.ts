import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthState } from '../../service/auth-state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  numID: number = 1434; 
  constructor(public AuthState: AuthState, private router: Router){};

  login(){
    let name = prompt("Enter user id: ");
    if(name === 'admin'){
      this.AuthState.loginState = true;
    }
  }

  logout(){
    this.AuthState.loginState = false;
    this.router.navigate(['/']);
  }
}
