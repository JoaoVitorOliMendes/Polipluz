import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../models/login.model';
import { authJwt } from '../auth/authJwt';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.email, Validators.required]],
    senha: [null, [Validators.required]]
  });

  hide = true;

  constructor(
    private authJwt: authJwt,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    
    if(this.loginForm.valid) {
      const login: Login = {
        email: this.loginForm.get('email')?.value,
        senha: this.loginForm.get('senha')?.value
      }
      this.authJwt.login(login).subscribe(() => {
        this.router.navigate(['/home'])
      });
    }else {
      this.loginForm.markAllAsTouched();
    }
  }

}
