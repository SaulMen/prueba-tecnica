import { Colaborador } from '../../core/models/colaborador';
import { ColaboradorService } from '../../core/services/colaborador';
import { CommonModule } from '@angular/common';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { Component, inject, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ModalFormulario } from './modals/modal-formulario/modal-formulario';
import { ModalDetalle } from './modals/modal-detalle/modal-detalle';
import { ModalConfirmacion } from './modals/modal-confirmacion/modal-confirmacion';
import { ModalRiesgo } from './modals/modal-riesgo/modal-riesgo';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-lista-colaboradores',
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule, 
    MatButtonModule, 
    MatIconModule,
    MatSortModule,
    MatRippleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './lista-colaboradores.html',
  styleUrl: './lista-colaboradores.css',
})

export class ListaColaboradores implements OnInit{
  private colaboradorService = inject(ColaboradorService);
  private dialog = inject(MatDialog);

  private cdr = inject(ChangeDetectorRef);

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (sort) {
      this.dataSource.sort = sort;
    }
  }

  dataSource = new MatTableDataSource<Colaborador>([]);
  columnasMostradas: string[] = ['idcolaborador', 'nombre', 'apellido', 'edad', 'profesion', 'acciones'];

  appIniciada: boolean = false;
  transicionando: boolean = false;

  ngOnInit(): void {}

  iniciarApp() {
    if (this.transicionando) return;
    this.transicionando = true;

    this.appIniciada = true;
  }

  cargarColaboradores() {
    this.colaboradorService.getColaboradores().subscribe({
      next: (response) => {
        if (response.ok) {
          this.dataSource.data = response.data;
          this.cdr.detectChanges();
        }
      },
      error: (err) => console.error('Error al cargar:', err)
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  abrirModalCrear() {
    const dialogRef = this.dialog.open(ModalFormulario, { width: '500px' });

    dialogRef.afterClosed().subscribe(datos => {
      if (datos) {
        this.colaboradorService.crearColaborador(datos).subscribe({
          next: () => this.cargarColaboradores(),
          error: (err) => console.error('Error al crear', err)
        });
      }
    });
  }

  abrirModalVer(colaborador: Colaborador) {
    this.dialog.open(ModalDetalle, {
      width: '400px',
      data: colaborador
    });
  }

  abrirModalEditar(colaborador: Colaborador) {
    const dialogRef = this.dialog.open(ModalFormulario, { 
      width: '500px',
      data: colaborador
    });

    dialogRef.afterClosed().subscribe(datosModificados => {
      if (datosModificados) {
        this.colaboradorService.actualizarColaborador(colaborador.idcolaborador, datosModificados).subscribe({
          next: () => this.cargarColaboradores(),
          error: (err) => console.error('Error al actualizar', err)
        });
      }
    });
  }

  abrirModalEliminar(id: number) {
    const dialogRef = this.dialog.open(ModalConfirmacion, {
      width: '350px',
      data: id
    });

    dialogRef.afterClosed().subscribe(confirmado => {
      if (confirmado) {
        this.colaboradorService.eliminarColaborador(id).subscribe({
          next: () => this.cargarColaboradores(),
          error: (err) => console.error('Error al eliminar', err)
        });
      }
    });
  }

  abrirModalRiesgo(edad: number) {
    this.dialog.open(ModalRiesgo, {
      width: '400px',
      data: edad
    });
  }
}
