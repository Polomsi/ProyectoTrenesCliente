import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetClientesComponent} from "./componentes/get-clientes/get-clientes.component";
import {CrearClienteComponent} from "./componentes/crear-cliente/crear-cliente.component";
import {ActualizarClienteComponent} from "./componentes/actualizar-cliente/actualizar-cliente.component";

const routes: Routes = [
    {
      path: "",
      component: GetClientesComponent,
    },
    {
      path: "todos",
      redirectTo: "",
      pathMatch: "full"
    },
    {
      path: "crear",
      component: CrearClienteComponent,
    },
    {
      path: "actualizar/:dni/:nombre/:telefono",
      component: ActualizarClienteComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
