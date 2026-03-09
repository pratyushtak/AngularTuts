import { Component, signal } from '@angular/core';
import { Products } from './services/products';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private productsService: Products){
    
  }
  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      console.log(data);
    });
  }
}
