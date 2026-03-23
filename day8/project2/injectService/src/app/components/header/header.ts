import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ThemeService} from '../../services/theme-service'

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(public themeService: ThemeService){}

  togglebtn(){
    this.themeService.toggleTheme()
  }
}
