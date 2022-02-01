export class Cliente {
  constructor(
    public dni: string | null,
    public nombre: string | null,
    public telefono: number | null,
    public email: string | null
  ) {
  }
}
