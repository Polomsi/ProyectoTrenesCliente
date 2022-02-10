export class Registro {
  constructor(
    public id: string,
    public tren_id: string,
    public kilometros: Number,
    public origen?: string,
    public destino?: string,
    public fecha?:Date,
  ) {
  }
}
