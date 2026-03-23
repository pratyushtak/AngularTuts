import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Content } from './components/content/content';
import { ThemeService } from './services/theme-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, Content, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('injectService');
  constructor(public themeService: ThemeService){}
}
