import {Component, OnInit} from '@angular/core';
import {Billete} from "../../../models/billete";
import {Cliente} from "../../../models/cliente";
import {ClienteService} from "../../../clientes/cliente.service";
import {ViajeService} from "../../viaje.service";
import {BilletesService} from "../../billetes.service";

@Component({
  selector: 'app-crear-billete',
  templateUrl: './crear-billete.component.html',
  styleUrls: ['./crear-billete.component.css']
})
export class CrearBilleteComponent implements OnInit {
  billete: Billete = {
    dni: "",
    idTren: "",
    Asiento: "",
    Precio: 0
  }
  clientes!: any[];
  trenes!: any[];

  constructor(private clienteService: ClienteService, private viajeService: ViajeService, private billeteService: BilletesService) {
    this.clienteService.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    })
    this.viajeService.getViajes().subscribe((viajes) => {
      this.trenes = viajes;
    })
  }

  ngOnInit(): void {

  }

  crearBillete() {
    this.billeteService.crearBillete(this.billete).subscribe((respuesta) => {
      console.log(respuesta)
    })
  }
}
