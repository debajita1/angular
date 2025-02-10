import { CommonModule, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    bg_color : String ="";

}
