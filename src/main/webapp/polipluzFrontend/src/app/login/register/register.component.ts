import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { confirmPassword } from '../../shared/inputTweaks';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup = this.fb.group({
    nome: [null, [Validators.required]],
    email: [null, [Validators.email, Validators.required]],
    senha: [null, [Validators.required, Validators.minLength(8)]],
    confirmarSenha: [null, []]
  });

  hidePass = true;
  hideConfirmPass = true;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForms()
  }

  initForms() {
    this.registerForm.get('confirmarSenha')?.setValidators([
      Validators.required,
      Validators.minLength(8),
      confirmPassword(this.registerForm.get('senha'))
    ])
  }

}
