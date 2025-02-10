import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { CalculatorComponent } from '../components/calculator/calculator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserComponent,DataBindingComponent,CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
