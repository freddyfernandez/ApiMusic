import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MusicModuleModule } from './music-module/music-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BusquedaCancionComponent } from './Components/Buscador/busqueda-cancion.component';
import { ListaCancionComponent } from './Components/Listado/lista-cancion/lista-cancion.component';
import { ObjetoCancionComponent } from './Components/Objeto/objeto-cancion/objeto-cancion.component';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaCancionComponent,
    ListaCancionComponent,
    ObjetoCancionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MusicModuleModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
