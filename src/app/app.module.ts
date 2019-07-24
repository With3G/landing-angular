import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaProfesionalComponent } from './components/experiencia-profesional/experiencia-profesional.component';
import { FormacionAcademicaComponent } from './components/formacion-academica/formacion-academica.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { FormacionAdicionalComponent } from './components/formacion-adicional/formacion-adicional.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SobreMiComponent,
    ExperienciaProfesionalComponent,
    FormacionAcademicaComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    TecnologiasComponent,
    FormacionAdicionalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
