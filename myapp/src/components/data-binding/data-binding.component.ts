import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [NgStyle],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
 color : string = ""; 

 changeColor(colorName:string){
  this.color = colorName
 }
}
