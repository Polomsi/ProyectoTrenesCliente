import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainClienteComponent} from "./clientes/main-cliente/main-cliente.component";
import {MainEmpleadoComponent} from "./empleados/main-empleado/main-empleado.component";

const routes: Routes = [
  {
    path: "cliente",
    component: MainClienteComponent,
    loadChildren: () => import("./clientes/clientes.module").then(m => m.ClientesModule)
  },
  {
    path: "empleado",
    component: MainEmpleadoComponent,
    loadChildren: () => import("./empleados/empleados.module").then(m => m.EmpleadosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
