import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../../models/cliente";
import {ClienteService} from "../../cliente.service";

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  cliente!: any;

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
  }

  crearCliente(nombre: string, dni: string, telefono: string | number, email: string) {
    this.cliente = {
      dni: dni,
      nombre: nombre,
      telefono: telefono,
      email: email
    }
    console.log(JSON.stringify(this.cliente));
    this.clienteService.crearCliente(this.cliente).subscribe((response) => {
      console.log(response);
    });
  }
}
