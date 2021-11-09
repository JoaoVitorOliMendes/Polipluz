import { AbstractControl, ValidatorFn } from "@angular/forms";

export const confirmPassword = (passwordControl: AbstractControl | null): ValidatorFn => {
    return (confirmationControl: AbstractControl): { [key: string]: boolean } | null => {
      const confirmValue = confirmationControl.value;
      const passwordValue = passwordControl?.value;
      if (confirmValue === '') {
        return null;
      }
      if (confirmValue !== passwordValue) {
        return { mustMatch: true };
      }
      return null;
    };
};