import { Component, OnInit } from '@angular/core';
import {ViajeService} from "../../viaje.service";

@Component({
  selector: 'app-get-viajes',
  templateUrl: './get-viajes.component.html',
  styleUrls: ['./get-viajes.component.css']
})
export class GetViajesComponent implements OnInit {
  viajes!: any[];

  constructor(private viajeService: ViajeService) {
    this.viajeService.getViajes().subscribe((data) => {
      this.viajes = data;
    })
  }

  ngOnInit(): void {
  }

  deleteTrenes(id_tren: string) {
    this.viajeService.deleteTrenes(id_tren).subscribe((response) => {
      console.log(response)
    })
  }

}
