import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-haru',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeHaruPop {
  faCoffee = faMagnifyingGlass;
  faCircle = faCircle;
}
