import {Empleado} from "./empleado";

export class Operario extends Empleado {
  public tren: string | null;
  public viajes: number | null;

  constructor(
    tipo: string | null,
    dni: string | null,
    nombre: string | null,
    telefono: number | null,
    sueldo: number | null,
    tren: string | null,
    viajes: number | null,
  ) {
    super(tipo, dni, nombre, telefono, sueldo);
    this.tren = tren;
    this.viajes = viajes;
  }

}
