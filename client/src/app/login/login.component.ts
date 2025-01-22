import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordValidator } from '../_helpers/password.validator';
import { PasswordMatchValidator } from '../_helpers/password-match.validator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule, 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  mode: 'login' | 'register' = 'login'
  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      username: new FormGroup(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)
      ]),
      password: new FormGroup(null, [
        Validators.required,
        PasswordValidator(8, 16)
      ])
    })
  }

  toggleMode() {
    this.mode = this.mode === 'login' ? 'register' : 'login'
    this.updateForm()
  }

  private updateForm() {
    if (this.mode === 'register') {

      this.form.addControl('confirm_password', new FormControl(null, Validators.required));

      this.form.addValidators(PasswordMatchValidator('password', 'confirm_password'));

      this.form.addControl('display_name', new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(18),
      ]));

      this.form.addControl('date_of_birth', new FormControl(null, Validators.required));

      this.form.addControl('gender', new FormControl(null, Validators.required));

      this.form.addControl('looking_for', new FormControl(null, Validators.required));

    } else {
      this.form.removeControl('confirm_password');
      this.form.removeValidators(PasswordMatchValidator('password', 'confirm_password'));

      this.form.removeControl('display_name');
      this.form.removeControl('date_of_birth');
      this.form.removeControl('gender');
      this.form.removeControl('looking_for');
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  errorMessages = {
    username: signal(''),
    password: signal(''),
    confirm_password: signal(''),
    display_name: signal(''),
  }

  updateErrorMessages(ctrlName: string) {
    const control = this.form.controls[ctrlName]
    if (control) {
      switch (ctrlName) {
        case 'username':
          if (control.hasError('required')) {
            this.errorMessages.username.set('required');
          } else if (control.hasError('minlength')) {
            this.errorMessages.username.set('must be at least 4 characters long');
          } else if (control.hasError('maxlength')) {
            this.errorMessages.username.set('must be 18 characters or fewer');
          } else {
            this.errorMessages.username.set('');
          }
          break;
        case 'password':
          if (control.hasError('required')) {
            this.errorMessages.password.set('required');
          } else if (control.hasError('invalidMinlength')) {
            this.errorMessages.password.set('must be at least 8 characters long');
          } else if (control.hasError('invalidMaxlength')) {
            this.errorMessages.password.set('must be 16 characters or fewer');
          } else if (control.hasError('invalidLowerCase')) {
            this.errorMessages.password.set('must contain minimum of 1 lower-case letter [a-z].');
          } else if (control.hasError('invalidUpperCase')) {
            this.errorMessages.password.set('must contain minimum of 1 capital letter [A-Z].');
          } else if (control.hasError('invalidNumeric')) {
            this.errorMessages.password.set('must contain minimum of 1 numeric character [0-9].');
          } else if (control.hasError('invalidSpecialChar')) {
            this.errorMessages.password.set('must contain minimum of 1 special character: !@#$%^&*(),.?":{}|<>');
          } else {
            this.errorMessages.password.set('');
          }
          break;
        case 'confirm_password':
          if (control.hasError('required')) {
            this.errorMessages.confirm_password.set('required');
          } else if (control.hasError('mismatch')) {
            this.errorMessages.confirm_password.set('do not match password');
          } else {
            this.errorMessages.confirm_password.set('');
          }
          break;
          case 'display_name':
            if (control.hasError('required')) {
              this.errorMessages.display_name.set('required');
            } else if (control.hasError('minlength')) {
              this.errorMessages.display_name.set('required');
            } else if (control.hasError('maxlength')) {
              this.errorMessages.display_name.set('required');
            } else {
              this.errorMessages.display_name.set('');
            }
            break;
      }
    }
  }
}
