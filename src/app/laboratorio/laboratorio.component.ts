import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../services/paciente/paciente.service';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {

  pacienteForm: FormGroup;
  pacientes: any;
  constructor(
    public fb: FormBuilder,
    public pacienteService: PacienteService
  ) {

   }
  ngOnInit(): void {
    this.pacienteForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo:['', Validators.required],
      edad:['', Validators.required],
      examen:['', Validators.required],
      estado:['', Validators.required],
      informe:['', Validators.required],
    });

    this.pacienteService.getAllPacientes().subscribe(resp => {
      this.pacientes = resp;
    },
      error => { console.error(error) }
    );

  }

  guardar(): void {
    this.pacienteService.savePaciente(this.pacienteForm.value).subscribe(resp => {
      this.pacienteForm.reset();
      this.pacientes=this.pacientes.filter(paciente=> resp.id!==paciente.id);
      this.pacientes.push(resp);
    },
      error => { console.error(error) }
    )
  }

  eliminar(paciente){
    this.pacienteService.deletePaciente(paciente.id).subscribe(resp=>{
      if(resp===true){
        this.pacientes.pop(paciente)
      }
    })
  }

  editar(paciente){
    this.pacienteForm.setValue({
      id:paciente.id,
      nombre: paciente.nombre ,
      apellido: paciente.apellido ,
      correo: paciente.correo,
      edad: paciente.edad,
      examen: paciente.examen,
      estado: paciente.estado,
      informe: paciente.informe
    })
  }

}

