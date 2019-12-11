import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/pages/home/home.component';
import {SimpsonComponent} from '../app/pages/simpson/simpson.component';
import {SecanteComponent} from '../app/pages/secante/secante.component';
import {RegresionComponent} from '../app/pages/regresion/regresion.component';



const routes: Routes =[
  {path: "regresion" , component: RegresionComponent},
  {path: "simpson", component: SimpsonComponent},
  {path: "secante", component: SecanteComponent},
  {path: "home", component: HomeComponent},
  {path:"", component: HomeComponent}
]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
