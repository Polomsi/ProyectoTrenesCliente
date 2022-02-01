import {Tren} from "./tren";

export class TrenPasajeros extends Tren {

  public _nPasajeros: number;
  public _precio: number;

  constructor(
    _tipoObjeto: string,
    _id: string,
    _origen: string,
    _destino: string,
    _nPasajeros: number,
    _precio: number
  ) {
    super(_tipoObjeto, _id, _origen, _destino);
    this._nPasajeros = _nPasajeros;
    this._precio = _precio;
  }
}
