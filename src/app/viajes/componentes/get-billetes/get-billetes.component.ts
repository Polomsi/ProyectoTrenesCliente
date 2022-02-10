import {Component, OnInit} from '@angular/core';
import {RegistrosService} from "../../registros.service";
import {BilletesService} from "../../billetes.service";

@Component({
  selector: 'app-get-billetes',
  templateUrl: './get-billetes.component.html',
  styleUrls: ['./get-billetes.component.css']
})
export class GetBilletesComponent implements OnInit {
  billetes!: any[];

  constructor(private billeteService: BilletesService) {
  }

  ngOnInit(): void {
    this.billeteService.getBilletes().subscribe((respuesta) => {
      this.billetes = respuesta;
    })
  }

  sumarIva(billete: any) {
    return billete._precio + (billete._precio * 0.21);
  }

  deleteBillete(id: string) {
    this.billeteService.deleteBilletes(id).subscribe((respuesta) => {
      console.log(respuesta)
    })
  }


  getFecha(fecha: string) {
    let date = new Date(fecha);
    return date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
  }
}
