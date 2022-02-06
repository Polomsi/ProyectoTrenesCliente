import {Tren} from "./tren";

export class TrenPasajeros extends Tren {

  public nPasajeros: number;
  public nPlazas: number;
  public precio: number;

  constructor(
    tipoObjeto: string,
    id: string,
    origen: string,
    destino: string,
    nPasajeros: number,
    nPlazas: number,
    precio: number
  ) {
    super(tipoObjeto, id, origen, destino);
    this.nPasajeros = nPasajeros;
    this.precio = precio;
    this.nPlazas = nPlazas;
  }
}
