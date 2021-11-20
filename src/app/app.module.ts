import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ADDComponent } from './add/add.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacienteComponent } from './paciente/paciente.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';

@NgModule({
  declarations: [
    AppComponent,
    ADDComponent,
    MedicosComponent,
    PacienteComponent,
    LaboratorioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
