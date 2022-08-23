import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  public myReactiveForm!: FormGroup;

  constructor(private _fB: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.myReactiveForm = this._fB.group({
      name : ['', [Validators.required, Validators.minLength(3)]],
      favorites: this._fB.array([
        //DE MOMENTO NO LE PONGO NADA PARA QUE NO AÑADA UN ELEMENTO NULL AL ARRAY
        // [  , Validators.minLength(3)] //COMO NO ME DEJA PONERLE NOMBRE AL IDENTIFICADOR DEL CONTROL, NECESITO EL GETTER DE MAS ABAJO
        // this._fB.control(  , Validators.minLength(3)) //OTRA FORMA DE AÑADIR EL CONTROL
      ], [Validators.required, Validators.min(1)]) //ARRAY DE FORM CONTROLS
    })
  }

  get favoritesArray(): FormArray {
    return this.myReactiveForm.get('favorites') as FormArray;
  }

  //ESTE CONTROL NO SE VA A ENVIAR CON EL FORMULARIO, PERO SIRVE PARA AÑADIR DATOS AL MISMO
  //EN EL TEMPLATE NO PUEDO USAR FORMCONTROLNAME PORQUE NO ESTÁ EN [formGroup]="myReactiveForm"
  //EN SU LUGAR TENGO QUE USAR [formControl]="addFavoriteControl"
  addFavoriteControl: FormControl = this._fB.control('', Validators.minLength(3)); 

  addFavorite(): void {
    if(this.addFavoriteControl.invalid){
      return;
    }
    this.favoritesArray.push(new FormControl( this.addFavoriteControl.value, Validators.required));
    this.addFavoriteControl.reset();
  }

  deleteFavorite( index: number): void {
    this.favoritesArray.removeAt(index);
  }


  public save(): void {
    if(this.myReactiveForm.invalid){
      this.myReactiveForm.markAllAsTouched();
      return;
    }
    console.log(this.myReactiveForm.value);
    this.myReactiveForm.reset();
  }

}
