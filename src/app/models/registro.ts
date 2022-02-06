export class Registro {
  constructor(
    public id: string,
    public tren_id: string,
    public origen: string,
    public destino: string,
    public fecha:Date,
    public kilometros: Number
  ) {
  }
}
