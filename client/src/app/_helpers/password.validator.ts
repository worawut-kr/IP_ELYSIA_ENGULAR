import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const PasswordValidator = (minLength: number, maxLength: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value as string;

    if (!password) {
      return { required: true };
    }

    else if (password.length < minLength) {
        return {invalidLength: true};
    }

    else if (password.length > maxLength) {
        return {invalidLength: true};
    }

    else if (!/[A-Z]/.test(password)) {
      return { invalidUppercase: true };
    }

    else if (!/[a-z]/.test(password)) {
      return { invalidLowercase: true };
    }

    else if (!/[0-9]/.test(password)) {
      return { invalidNumber: true };
    }
    
    else if (!/[!@#$%^&*()_+=[\]{};':"\\|,.<>\/?~]/.test(password)) {
      return { invalidSpecialChar: true };
    }

    return null;
  };
};