import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-autoescola-modal',
  templateUrl: './autoescola-modal.component.html',
  styleUrls: ['./autoescola-modal.component.scss']
})
export class AutoescolaModalComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    nome: [null, [Validators.required]],
    email: [null, [Validators.email, Validators.required]],
    telefone: [null, [Validators.required]],
    cep: [null, [Validators.required]],
    cnpj: [null, [Validators.required]],
    horarioFunc: [null, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  save() {

  }

  cancel() {
    
  }

}
