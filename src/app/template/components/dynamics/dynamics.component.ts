import { Component } from '@angular/core';

interface Person {
  name: string,
  favorites: Favorite[] 
}

interface Favorite {
  id: number,
  name: string
}


@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  newFavorite: string = '';

  person: Person = {
    name: 'Víctor',
    favorites: [
      { id:1, name: 'Metal Gear'},
      { id:2, name: 'PES 6'}
    ]
  }

  save(){
    console.log('')
  }

  addNewElement(){
    const newElement: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newFavorite
    };
    this.person.favorites.push({...newElement});
    this.newFavorite = '';
  }

  deleteElement(index: number){
    this.person.favorites.splice(index,1);
  }

}
