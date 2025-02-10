import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  input:string = "";
 
  // appendValues(value:string){
  //   this.input = value;
  // }

  appendValues(value:string){
    this.input += value
  }

  clear():string{
    return this.input = "";
  }

  calculate(){
    try{
      this.input = eval(this.input).toString();
    }
    catch(error){
      this.input = "error";
    }
  }

}


