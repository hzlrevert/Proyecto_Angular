import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { TarjetaComponent } from './partials/tarjeta/tarjeta.component';
import { PaginaEstudianteComponent } from './partials/paginas/pagina-estudiante/pagina-estudiante.component';
import { RegistroComponent } from './partials/paginas/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TarjetaComponent,
    PaginaEstudianteComponent,
    RegistroComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
