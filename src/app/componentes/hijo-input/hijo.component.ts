import { Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent{

  @Input()
  
  data:string ='texto escrito en componente hijo';

  
  
}

