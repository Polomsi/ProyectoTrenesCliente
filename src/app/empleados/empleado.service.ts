import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Operario} from "../models/operario";
import {Limpiador} from "../models/limpiador";
import {Revisor} from "../models/revisor";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url_api = "https://proyecto-trenes-alv.herokuapp.com";
  constructor(
    private http: HttpClient
  ) { }

  getEmpleados() {
    const url = `${this.url_api}/empleados`;
    return this.http.get<any[]>(url);
  }
  deleteEmpleado(dni: string) {
    const url = `${this.url_api}/deleteEmpleado/${dni}`;
    return this.http.delete(url);
  }
  crearOperario(operario: Operario) {
    const url = `${this.url_api}/crearOperario`;
    return this.http.post(url, operario);
  }
  crearLimpiador(limpiador: Limpiador) {
    const url = `${this.url_api}/crearLimpiador`;
    return this.http.post(url, limpiador);
  }
  crearRevisor(revisor: Revisor) {
    const url = `${this.url_api}/crearRevisor`;
    return this.http.post(url, revisor);
  }
  getEmpleadoDNI(dni: string) {
    const url = `${this.url_api}/empleado/${dni}`;
    return this.http.get<any>(url);
  }

}
