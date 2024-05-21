import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit {


  constructor(){


  }


  ngOnInit(): void {
      
  }


  
}
