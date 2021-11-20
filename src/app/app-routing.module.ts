import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicosComponent } from './medicos/medicos.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ADDComponent } from './add/add.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';



const routes: Routes = [
{path:'add', component:ADDComponent},
{path:'medicos', component:MedicosComponent},
{path:'paciente', component:PacienteComponent},
{path:'laboratorio', component:LaboratorioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
