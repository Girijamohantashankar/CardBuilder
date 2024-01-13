
import { VisitingCardService } from './visiting-card.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { maxLengthValidator } from './validators';
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  visitingCardForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private visitingCardService: VisitingCardService) {
    this.visitingCardForm = this.fb.group({
      fullName: ['', [Validators.required, maxLengthValidator(40, 'Name should be under 40 characters')]],
      email: ['', [Validators.required, Validators.email, maxLengthValidator(50, 'Email should be under 30 characters')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      companyName: ['', [Validators.required, maxLengthValidator(20, 'Company should be under 20 characters')]],
      designation: ['', [Validators.required, maxLengthValidator(20, 'Designation should be under 20 characters')]],
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.logNavigation(event);
      }
    });
  }
  onSubmit(): void {
    if (this.visitingCardForm.valid) {
      console.log('Form is valid. Navigating to preview.');
      this.visitingCardService.setVisitingCardData(this.visitingCardForm.value);
      this.router.navigate(['/preview']);
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  private markAllFieldsAsTouched(): void {
    Object.values(this.visitingCardForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.visitingCardForm.get(fieldName);
    return (
      control !== null &&
      control !== undefined &&
      control.invalid &&
      control.touched
    );
  }

  private logNavigation(event: NavigationEnd): void {
    console.log('Navigation ended:', event);
  }
}
