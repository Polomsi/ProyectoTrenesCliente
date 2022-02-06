export class Cliente {
  constructor(
    public _dni: string | null,
    public _nombre: string | null,
    public _telefono: number | null,
    public _email: string | null
  ) {
  }

  get dni(): string | null {
    return this._dni;
  }

  get nombre(): string | null {
    return this._nombre;
  }

  get telefono(): number | null {
    return this._telefono;
  }

  get email(): string | null {
    return this._email;
  }

  set dni(value: string | null) {
    this._dni = value;
  }

  set nombre(value: string | null) {
    this._nombre = value;
  }

  set telefono(value: number | null) {
    this._telefono = value;
  }

  set email(value: string | null) {
    this._email = value;
  }
}
