import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit{

  // NO RECOMENDABLE HACER ASI
  // myReactiveForm: FormGroup = new FormGroup({
  //   name : new FormControl('Pajilleitor Evolution'),
  //   price: new FormControl(150),
  //   stock: new FormControl(5)
  // }) 

  public myReactiveForm: FormGroup = this.fb.group({
    name : [ , [Validators.required, Validators.minLength(3)]],
    price: [ , [Validators.required, Validators.min(0)]],
    stock: [ , [Validators.required, Validators.min(0)]]
  });

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public buildForm(): void {
    this.myReactiveForm = this.fb.group({
      name : ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]]
    })
  }

  // public validateField( field: string ) {
    
  //   return this.myReactiveForm.controls[field].errors 
  //          && this.myReactiveForm.controls[field].touched;
  // }

//TODO -> usar eventos keypress o similar de los campos para ejecutar los ngif entorno a propiedades

  public save(): void {
    if(this.myReactiveForm.invalid){
      this.myReactiveForm.markAllAsTouched();
      return;
    }
    console.log(this.myReactiveForm.value);
    this.myReactiveForm.reset();
  }

}
