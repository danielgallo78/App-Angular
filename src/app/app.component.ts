import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './componentes/padre-input/padre.component';
import { HijoComponent } from './componentes/hijo-input/hijo.component';
import { HijoOutputComponent } from './componentes/hijo-output/hijo-output.component';
import { PadreOutputComponent } from './componentes/padre-output/padre-output.component'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent, HijoComponent, HijoOutputComponent,PadreOutputComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'App-Angular';
}
