import { AbstractControl, ValidatorFn } from "@angular/forms";

export const CNPJ_MASK = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
export const CEP_MASK = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
export const PHONE_MASK = ['(',/\d/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
export const TIME_MASK = [/\d/, /\d/, ':', /\d/, /\d/, ' ', 'a', 's', ' ', /\d/, /\d/, ':', /\d/, /\d/];

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