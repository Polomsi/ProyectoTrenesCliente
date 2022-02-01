export class Registro {
  constructor(
    public _id: string,
    public _tren_id: string,
    public _origen: string,
    public _destino: string,
    public _fecha:Date,
    public _kilometros: Number
  ) {
  }
}
