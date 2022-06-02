import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent{

  // NO RECOMENDABLE HACER ASI, SOLO PARA FINES DOCENTES
  // myReactiveForm: FormGroup = new FormGroup({
  //   name : new FormControl('Pajilleitor Evolution'),
  //   price: new FormControl(150),
  //   stock: new FormControl(5)
  // }) 

  myReactiveForm: FormGroup = this.fb.group({
    name : ['Pajilleitor Evolution', [Validators.required, Validators.minLength(3)]],
    price: [150, [Validators.required, Validators.min(0)]],
    stock: [5, [Validators.required, Validators.min(0)]]
  })

  constructor(private readonly fb: FormBuilder) { }




}
