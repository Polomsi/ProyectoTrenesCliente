import {Tren} from "./tren";

export class TrenPasajeros extends Tren {

  public _tipoCarga: string;
  public _kilosCarga: number;

  constructor(
    _tipoObjeto:string,
    _id: string,
    _origen: string,
    _destino: string,
    _tipoCarga: string,
    _kilosCarga:number
  ) {
    super(_tipoObjeto, _id, _origen, _destino);
    this._tipoCarga = _tipoCarga;
    this._kilosCarga = _kilosCarga;
  }
}
