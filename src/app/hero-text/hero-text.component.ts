import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-text',
  templateUrl: './hero-text.component.html',
  styleUrls: ['./hero-text.component.css']
})
export class HeroTextComponent {

  @Input() title: string | undefined;

  constructor() {}

  ngOnInit () {}

}
