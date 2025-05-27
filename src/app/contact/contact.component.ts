import { Component } from '@angular/core';
import { faBuilding, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [
    FaIconComponent,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  faBuilding = faBuilding;
  faPhone = faPhoneAlt;
  faEmail = faEnvelope;
  protected readonly faEnvelope = faEnvelope;

  // Form data model
  formData = {
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: ''
  };

  // Form submission status
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Reset status
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.errorMessage = '';

    // Validate form
    if (!this.validateForm()) {
      this.isSubmitting = false;
      this.submitError = true;
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    // In a real application, you would send this data to a backend API
    // For demonstration purposes, we'll simulate a successful API call

    // Simulating API call with timeout
    setTimeout(() => {
      // Simulate successful submission
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      this.submitSuccess = true;

      // Reset form after successful submission
      this.resetForm();

      // In a real application, you would use HttpClient to send the data to your backend:
      /*
      this.http.post('https://api.afrikatek.co.za/contact', this.formData)
        .subscribe({
          next: (response) => {
            this.isSubmitting = false;
            this.submitSuccess = true;
            this.resetForm();
          },
          error: (error) => {
            this.isSubmitting = false;
            this.submitError = true;
            this.errorMessage = 'An error occurred. Please try again later.';
            console.error('Error submitting form:', error);
          }
        });
      */
    }, 1500);
  }

  validateForm(): boolean {
    // Basic validation
    if (!this.formData.firstName || !this.formData.lastName || !this.formData.email || !this.formData.message) {
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      return false;
    }

    return true;
  }

  resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      message: ''
    };
  }
}
