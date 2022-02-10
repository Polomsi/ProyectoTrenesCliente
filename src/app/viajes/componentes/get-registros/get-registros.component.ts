import { Component, OnInit } from '@angular/core';
import {BilletesService} from "../../billetes.service";
import {RegistrosService} from "../../registros.service";

@Component({
  selector: 'app-get-registros',
  templateUrl: './get-registros.component.html',
  styleUrls: ['./get-registros.component.css']
})
export class GetRegistrosComponent implements OnInit {

  registros!: any[];

  constructor(private registroService: RegistrosService) { }

  ngOnInit(): void {
    this.registroService.getRegistros().subscribe((respuesta) => {
      this.registros = respuesta;
    })
  }

  deleteRegistro(id: string){
    console.log(id)
  }

  getFecha(fecha: string) {
    let date = new Date(fecha);
    return date.getDate() + "/" + date.getMonth()+1 + "/" + date.getFullYear();
  }

}
