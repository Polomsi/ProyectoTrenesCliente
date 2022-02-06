import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../cliente.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-cliente',
  templateUrl: './detail-cliente.component.html',
  styleUrls: ['./detail-cliente.component.css']
})
export class DetailClienteComponent implements OnInit {

  cliente: any;
  cliente_dni!: string;
  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {
    this.cliente_dni = <string>this.route.snapshot.paramMap.get("dni");
  }

  ngOnInit(): void {
    this.clienteService.getClienteDNI(this.cliente_dni).subscribe((data) => {
      this.cliente = data;
      console.log(this.cliente)
    });
  }

}
