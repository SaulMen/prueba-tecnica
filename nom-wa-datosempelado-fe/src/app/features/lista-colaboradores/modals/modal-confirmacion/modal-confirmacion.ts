import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal-confirmacion',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './modal-confirmacion.html'
})
export class ModalConfirmacion {
  constructor(
    public dialogRef: MatDialogRef<ModalConfirmacion>,
    @Inject(MAT_DIALOG_DATA) public id: number
  ) {}

  confirmar() { this.dialogRef.close(true); }
  cancelar() { this.dialogRef.close(false); }
}
