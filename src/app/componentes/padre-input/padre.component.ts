import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from '../hijo-input/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [RouterOutlet, HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {
  dataPadre = 'mensaje escrito desde componente padre';
}
