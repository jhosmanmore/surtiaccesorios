import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  constructor(private renderer: Renderer2){}

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/menu.js';
    this.renderer.appendChild(document.body, script);
  }

}
