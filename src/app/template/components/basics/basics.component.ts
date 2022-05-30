import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myFormTS!: NgForm;

  initialValues = {
    product: '',
    price: 0,
    stock: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  validateName(): boolean {
    return this.myFormTS?.controls['product']?.invalid 
           && this.myFormTS?.controls['product']?.touched
  }

  validatePrice(): boolean {
    return this.myFormTS?.controls['price']?.touched
           && this.myFormTS?.controls['price']?.value < 0
  }

  // save(myForm: NgForm){
  //   console.log(myForm);
  // }

  save(){
    console.log('Posteo correcto',this.myFormTS);
    this.myFormTS.resetForm({
      price: 0,
      stock: 0
    });
  }

}
