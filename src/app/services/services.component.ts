import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [RouterLink, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
