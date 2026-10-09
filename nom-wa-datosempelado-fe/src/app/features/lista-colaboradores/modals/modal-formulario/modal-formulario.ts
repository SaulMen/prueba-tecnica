import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Colaborador } from '../../../../core/models/colaborador';

@Component({
  selector: 'app-modal-formulario',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule
  ],
  templateUrl: './modal-formulario.html',
  styleUrls: ['./modal-formulario.css']
})
export class ModalFormulario implements OnInit {
  formColaborador: FormGroup;
  modoEdicion: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalFormulario>,
    @Inject(MAT_DIALOG_DATA) public data: Colaborador | null 
  ) {
    this.formColaborador = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      profesion: ['', Validators.required],
      estado_civil: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.modoEdicion = true;
      this.formColaborador.patchValue(this.data);
    }
  }

  guardar() {
    if (this.formColaborador.valid) {
      this.dialogRef.close(this.formColaborador.value);
    }
  }

  cancelar() {
    this.dialogRef.close();
  }
}