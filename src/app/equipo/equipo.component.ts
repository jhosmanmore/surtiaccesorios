import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {
  constructor(private renderer: Renderer2){}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/slider.js';
    this.renderer.appendChild(document.body, script);
  }
}
