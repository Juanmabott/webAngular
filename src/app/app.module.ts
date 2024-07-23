// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importa el componente AppComponent
import { CaruselComponent } from './carusel/carusel.component'; // Otros componentes que pertenezcan a este módulo

@NgModule({
  declarations: [
    AppComponent,
    CaruselComponent // Otros componentes, directivas y pipes que pertenezcan a este módulo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Especifica el componente raíz de la aplicación para el bootstrap
})
export class AppModule { }
