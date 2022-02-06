import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetClientesComponent} from "../clientes/componentes/get-clientes/get-clientes.component";
import {GetViajesComponent} from "./componentes/get-viajes/get-viajes.component";
import {CrearViajeComponent} from "./componentes/crear-viaje/crear-viaje.component";

const routes: Routes = [
  {
    path: "",
    component: GetViajesComponent,
  },
  {
    path: "viaje/todos",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "viaje/crear-tren",
    component: CrearViajeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajesRoutingModule { }
