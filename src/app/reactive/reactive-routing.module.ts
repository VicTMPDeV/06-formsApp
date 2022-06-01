import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from '../reactive/components/basics/basics.component';
import { DynamicsComponent } from '../reactive/components/dynamics/dynamics.component';
import { SwitchesComponent } from '../reactive/components/switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basics', 
        component: BasicsComponent
      },
      {
        path: 'dynamics', 
        component: DynamicsComponent
      },
      {
        path: 'switches', 
        component: SwitchesComponent
      },
      {
        path: '**', 
        redirectTo: 'basics'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ReactiveRoutingModule { }
