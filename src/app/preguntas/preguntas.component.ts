import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  constructor(private renderer: Renderer2){}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/questions.js';
    this.renderer.appendChild(document.body, script);
  }
}
