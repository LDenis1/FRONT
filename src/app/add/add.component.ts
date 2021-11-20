import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PersonaService } from '../services/persona/persona.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class ADDComponent implements OnInit {
  
  panelOpenState: boolean = true;


  personaForm: FormGroup;
  personas: any;
  constructor(
    public fb: FormBuilder,
    public personaService: PersonaService
  ) {

   }
  ngOnInit(): void {
    this.personaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      correo:['', Validators.required],
      telefono:['', Validators.required],
      query:['', Validators.required],
    });

    this.personaService.getAllPersonas().subscribe(resp => {
      this.personas = resp;
    },
      error => { console.error(error) }
    )
  }
  
  guardar(): void {
    this.personaService.savePersona(this.personaForm.value).subscribe(resp => {
      this.personaForm.reset();
      this.personas=this.personas.filter(persona=> resp.id!==persona.id);
      this.personas.push(resp);
    },
      error => { console.error(error) }
    )
  }
  eliminar(persona){
    this.personaService.deletePersona(persona.id).subscribe(resp=>{
      if(resp===true){
        this.personas.pop(persona)
      }
    })
  }

  editar(persona){
    this.personaForm.setValue({
      id:persona.id,
      nombre: persona.nombre ,
      apellido: persona.apellido ,
      edad: persona.edad,
      correo: persona.correo,
      telefono: persona.telefono,
      query: persona.query
    })
  }
}
