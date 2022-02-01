import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from "../../empleado.service";

@Component({
  selector: 'app-get-empleados',
  templateUrl: './get-empleados.component.html',
  styleUrls: ['./get-empleados.component.css']
})
export class GetEmpleadosComponent implements OnInit {
  empleados!: any[];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {

    this.empleadoService.getEmpleados().subscribe((data) => {
      console.log(data)
      this.empleados = data;
    })
  }
  deleteCliente(dni: string) {
    this.empleadoService.deleteEmpleado(dni).subscribe((respuesta) => {
      this.ngOnInit();
    })
  }

}
