export class Billete {
  constructor(
    public dni: string,
    public idTren:string,
    public origen: string,
    public destino: string,
    public Asiento: string,
    public Precio: number,
    public fecha: Date
  ) {}

}
