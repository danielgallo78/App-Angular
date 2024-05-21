import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit{

  


constructor(){

}

ngOnInit(): void {
    
}

}

