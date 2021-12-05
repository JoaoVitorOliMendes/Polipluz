import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Autoescola } from '../../../models/autoescola.model';
import { AutoescolaService } from '../../../services/autoescolaService';
import { CEP_MASK, CNPJ_MASK, PHONE_MASK, TIME_MASK } from '../../../shared/inputTweaks';

@Component({
  selector: 'app-autoescola-modal',
  templateUrl: './autoescola-modal.component.html',
  styleUrls: ['./autoescola-modal.component.scss']
})
export class AutoescolaModalComponent implements OnInit {

  cepMask = CEP_MASK
  cnpjMask = CNPJ_MASK
  phoneMask = PHONE_MASK
  timeMask = TIME_MASK

  autoescolaForm: FormGroup = this.fb.group({
    nome: [null, [Validators.required]],
    email: [null, [Validators.email, Validators.required]],
    telefone: [null, [Validators.required]],
    latitude: [null, [Validators.required]],
    longitude: [null, [Validators.required]],
    cep: [null, [Validators.required]],
    cnpj: [null, [Validators.required]],
    horarioFunc: [null, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private autoescolaService: AutoescolaService,
    public dialogRef: MatDialogRef<AutoescolaModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if(this.data) {
      this.autocomplete()
      console.log(this.data);
      
    }
  }

  save() {
    if(this.autoescolaForm.invalid) {
      this.autoescolaForm.markAllAsTouched()
      return
    }else {
      const autoescola: Autoescola = {
        id: null,
        nome: this.autoescolaForm.get('nome')?.value,
        email: this.autoescolaForm.get('email')?.value,
        telefone: this.autoescolaForm.get('telefone')?.value,
        cep: this.autoescolaForm.get('cep')?.value,
        cnpj: this.autoescolaForm.get('cnpj')?.value,
        horarioFunc: this.autoescolaForm.get('horarioFunc')?.value,
        latitude: this.autoescolaForm.get('latitude')?.value,
        longitude: this.autoescolaForm.get('longitude')?.value
      }

      if(this.data) {
        autoescola.id = this.data.autoescola.id
        this.autoescolaService.update(autoescola).subscribe((res) => {
          this.close();
        })
      }else {
        this.autoescolaService.create(autoescola).subscribe((res) => {
          this.close();
        })
      }
    }
  }

  autocomplete() {
    const autoescola = this.data.autoescola
    this.autoescolaForm.get('nome')?.setValue(autoescola.nome)
    this.autoescolaForm.get('email')?.setValue(autoescola.email)
    this.autoescolaForm.get('telefone')?.setValue(autoescola.telefone)
    this.autoescolaForm.get('cep')?.setValue(autoescola.cep)
    this.autoescolaForm.get('cnpj')?.setValue(autoescola.cnpj)
    this.autoescolaForm.get('horarioFunc')?.setValue(autoescola.horarioFunc)
    this.autoescolaForm.get('latitude')?.setValue(autoescola.latitude)
    this.autoescolaForm.get('longitude')?.setValue(autoescola.longitude)
  }

  close() {
    this.dialogRef.close();
  }

}
