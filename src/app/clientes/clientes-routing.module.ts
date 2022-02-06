import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetClientesComponent} from "./componentes/get-clientes/get-clientes.component";
import {CrearClienteComponent} from "./componentes/crear-cliente/crear-cliente.component";
import {ActualizarClienteComponent} from "./componentes/actualizar-cliente/actualizar-cliente.component";
import {DetailClienteComponent} from "./componentes/detail-cliente/detail-cliente.component";

const routes: Routes = [
    {
      path: "",
      component: GetClientesComponent,
    },
    {
      path: "cliente/todos",
      redirectTo: "",
      pathMatch: "full"
    },
    {
      path: "cliente/crear",
      component: CrearClienteComponent,
    },
    {
      path: "cliente/actualizar/:dni/:nombre/:telefono",
      component: ActualizarClienteComponent,
    },
    {
      path: "cliente/detail/:dni",
      component: DetailClienteComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
