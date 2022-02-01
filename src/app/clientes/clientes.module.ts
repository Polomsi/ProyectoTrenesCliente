import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainClienteComponent} from './main-cliente/main-cliente.component';
import {GetClientesComponent} from './componentes/get-clientes/get-clientes.component';
import {ClientesRoutingModule} from "./clientes-routing.module";
import {ClienteService} from "./cliente.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearClienteComponent } from './componentes/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './componentes/actualizar-cliente/actualizar-cliente.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainClienteComponent,
    GetClientesComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClientesModule {
}
