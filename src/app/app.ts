import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaPrincipalComponent } from './pages/public/pagina-principal/pagina-principal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaginaPrincipalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('health-test-front-end');
}

