import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EquipoComponent } from './equipo/equipo.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeroTextComponent } from './hero-text/hero-text.component';
import { Article1Component } from './articles/article1/article1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    ServiciosComponent,
    EquipoComponent,
    PreguntasComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    InicioComponent,
    HeroTextComponent,
    Article1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
