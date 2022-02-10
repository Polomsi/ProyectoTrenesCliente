export class Billete {
  constructor(
    public dni: string,
    public idTren:string,
    public Asiento: string,
    public Precio: number,
    public origen?: string,
    public destino?: string,
    public fecha?: Date
  ) {}

}
