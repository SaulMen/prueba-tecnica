import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal-riesgo',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './modal-riesgo.html'
})
export class ModalRiesgo implements OnInit {
  mensajeRiesgo: string = '';
  colorHex: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public edad: number) {}

  ngOnInit() {
    if (this.edad >= 18 && this.edad <= 25) {
      this.mensajeRiesgo = 'FUERA DE PELIGRO';
      this.colorHex = '#4caf50';
    } else if (this.edad >= 26 && this.edad <= 50) {
      this.mensajeRiesgo = 'TENGA CUIDADO, TOME TODAS LAS MEDIDAS DE PREVENCIÓN';
      this.colorHex = '#ff9800';
    } else if (this.edad >= 51) {
      this.mensajeRiesgo = 'POR FAVOR QUEDARSE EN CASA';
      this.colorHex = '#f44336';
    } else {
      this.mensajeRiesgo = 'Edad fuera de los rangos establecidos';
      this.colorHex = '#9e9e9e';
    }
  }
}
