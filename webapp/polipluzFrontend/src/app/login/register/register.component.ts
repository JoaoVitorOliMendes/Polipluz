import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models/login.model';
import { User } from '../../models/user.model';
import { registerService } from '../../services/registerService';
import { confirmPassword } from '../../shared/inputTweaks';
import { authJwt } from '../auth/authJwt';

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
    private fb: FormBuilder,
    private regService: registerService,
    private router: Router,
    private authJwt: authJwt,
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

  register() {
    if(this.registerForm.valid) {
      const u: User = {
        email: this.registerForm.get('email')?.value,
        id: null,
        nome: this.registerForm.get('nome')?.value,
        senha: this.registerForm.get('senha')?.value,
      }

      this.regService.register(u).subscribe(() => {
        const login: Login = {
          email: u.email,
          senha: u.senha
        }

        this.authJwt.login(login).subscribe(() => {
          this.router.navigate(['/main'])
        })
      });
    }else {
      this.registerForm.markAllAsTouched();
    }
  }

}
