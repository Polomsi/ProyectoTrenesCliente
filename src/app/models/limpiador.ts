import {Empleado} from "./empleado";

export class Limpiador extends Empleado {
  public horas: number | null;
  public idTren: number | null;
  constructor(
    tipo: string | null,
    dni: string | null,
    nombre: string | null,
    telefono: number | null,
    sueldo: number | null,
    horas: number | null,
    idTren: number | null
  ) {
    super(tipo, dni, nombre, telefono, sueldo);
    this.horas = horas;
    this.idTren = idTren;
  }

}
