import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
    name : ['Pajilleitor Evolution'],
    price: [150],
    stock: [5]
  })

  constructor(private readonly fb: FormBuilder) { }




}
