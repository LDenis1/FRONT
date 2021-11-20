import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicosService } from '../services/medicos/medicos.service';



@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicoForm: FormGroup;
  medicos: any;
  constructor(
    public fb: FormBuilder,
    public medicoService: MedicosService
  ) {

   }
  ngOnInit(): void {
    this.medicoForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo:['', Validators.required],
      especialidad:['', Validators.required],
    });

    this.medicoService.getAllMedicos().subscribe(resp => {
      this.medicos = resp;
    },
      error => { console.error(error) }
    );

  }
  
  guardar(): void {
    this.medicoService.saveMedico(this.medicoForm.value).subscribe(resp => {
      this.medicoForm.reset();
      this.medicos=this.medicos.filter(medico=> resp.id!==medico.id);
      this.medicos.push(resp);
    },
      error => { console.error(error) }
    )
  }

  eliminar(medico){
    this.medicoService.deleteMedico(medico.id).subscribe(resp=>{
      if(resp===true){
        this.medicos.pop(medico)
      }
    })
  }

  editar(medico){
    this.medicoForm.setValue({
      id:medico.id,
      nombre: medico.nombre ,
      apellido: medico.apellido ,
      correo: medico.correo,
      especialidad: medico.especialidad,
    })
  }

}
