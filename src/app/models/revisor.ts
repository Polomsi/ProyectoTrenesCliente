import {Empleado} from "./empleado";

export class Revisor extends Empleado {
  private horas: string | null;
  private viajes: number | null;

  constructor(
    tipo: string | null,
    dni: string | null,
    nombre: string | null,
    telefono: number | null,
    sueldo: number | null,
    horas: string | null,
    viajes: number | null
  ) {
    super(tipo, dni, nombre, telefono, sueldo);
    this.horas = horas;
    this.viajes = viajes;
  }
}
