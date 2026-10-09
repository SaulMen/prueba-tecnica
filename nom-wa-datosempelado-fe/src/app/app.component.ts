import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaColaboradores } from './features/lista-colaboradores/lista-colaboradores';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaColaboradores],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'nom-wa-datosempleado-fe';
}