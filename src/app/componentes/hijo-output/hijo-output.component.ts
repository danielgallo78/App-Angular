import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hijo-output',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './hijo-output.component.html',
  styleUrl: './hijo-output.component.css'
})
export class HijoOutputComponent {

    @Output()
    eventoEnviarDatos = new EventEmitter<string>()


    enviarData(valor:string){
      this.eventoEnviarDatos.emit(valor)
    }
}
