import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Colaborador } from '../../../../core/models/colaborador';

@Component({
  selector: 'app-modal-detalle',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './modal-detalle.html'
})
export class ModalDetalle {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Colaborador) {}
}
