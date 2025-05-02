import { Component } from '@angular/core';
import {faBuilding, faEnvelope, faPhoneAlt,} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact',
  imports: [
    FaIconComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  faBuilding = faBuilding;
  faPhone = faPhoneAlt;
  faEmail = faEnvelope;
  protected readonly faEnvelope = faEnvelope;
}
