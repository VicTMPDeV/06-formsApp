import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myFormP!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  validateName(): boolean {
    return this.myFormP?.controls['product']?.invalid 
           && this.myFormP?.controls['product']?.touched
  }

  validatePrice(): boolean {
    return this.myFormP?.controls['price']?.touched
           && this.myFormP?.controls['price']?.value < 0
  }

  // save(myForm: NgForm){
  //   console.log(myForm);
  // }

  save(){
    console.log('Posteo correcto',this.myFormP);
  }

}
