import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../../cliente.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  cliente: any;
  nombre_cliente!: string;
  dni_cliente!: string;
  telefono_cliente!: string;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.cliente = {
      nombre: <string>this.route.snapshot.paramMap.get("nombre"),
      dni: <string>this.route.snapshot.paramMap.get("dni"),
      telefono: <string>this.route.snapshot.paramMap.get("telefono"),
    }
  }

  actualizarTlfCli(dni: string, telefono: string) {
    let telefono_number: number = parseInt(telefono);
    this.clienteService.actualizarTlfCli(dni, telefono_number).subscribe((response) => {
      console.log(response);
    });
  }
}
