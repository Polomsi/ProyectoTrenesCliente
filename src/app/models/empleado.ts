export class Empleado {
  constructor(
    public tipo: string | null,
    public dni: string | null,
    public nombre: string | null,
    public telefono: number | null,
    public sueldo: number | null
  ) {
  }

}
