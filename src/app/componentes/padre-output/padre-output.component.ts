import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoOutputComponent } from '../hijo-output/hijo-output.component';
import { CommonModule } from '@angular/common';


 @Component({
  selector: 'app-padre-output',
  standalone: true,
  imports: [RouterOutlet,HijoOutputComponent,CommonModule],
  templateUrl: './padre-output.component.html',
  styleUrl: './padre-output.component.css'
})
export class PadreOutputComponent {

  // creo un array
  arrayNombres = ['Daniel', 'Paola', 'Franco']

  // creo un metodo para agregar al array
  agregarAlArray(nuevosNombres:string){
    this.arrayNombres.push(nuevosNombres)
  }

}
