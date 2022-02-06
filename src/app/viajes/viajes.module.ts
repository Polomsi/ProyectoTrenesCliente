import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { GetViajesComponent } from './componentes/get-viajes/get-viajes.component';
import { MainViajeComponent } from './main-viaje/main-viaje.component';
import { CrearViajeComponent } from './componentes/crear-viaje/crear-viaje.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GetViajesComponent,
    MainViajeComponent,
    CrearViajeComponent
  ],
  imports: [
    CommonModule,
    ViajesRoutingModule,
    FormsModule
  ]
})
export class ViajesModule { }
