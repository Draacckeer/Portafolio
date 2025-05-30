import {Component} from '@angular/core';
import { USER_DATA } from '../../shared/user-data';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user = USER_DATA;
  showButton = true;


}
