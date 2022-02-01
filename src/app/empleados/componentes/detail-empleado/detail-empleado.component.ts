import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from "../../empleado.service";

@Component({
  selector: 'app-detail-empleado',
  templateUrl: './detail-empleado.component.html',
  styleUrls: ['./detail-empleado.component.css']
})
export class DetailEmpleadoComponent implements OnInit {
  empleado: any;
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

}
