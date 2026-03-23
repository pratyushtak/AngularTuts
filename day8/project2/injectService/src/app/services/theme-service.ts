import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  toggleCSS = false;

  toggleTheme(){
    this.toggleCSS = !this.toggleCSS;
  }
}
