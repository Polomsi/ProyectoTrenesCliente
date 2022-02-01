export class Billete {
  constructor(
    public _dni: string,
    public _idTrenPasajeros:string,
    public _origen: string,
    public _destino: string,
    public _asiento: string,
    public _precio: number,
    public _fecha: Date
  ) {}
}
