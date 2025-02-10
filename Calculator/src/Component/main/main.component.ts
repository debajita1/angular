import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
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
