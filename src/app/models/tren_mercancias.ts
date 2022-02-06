import {Tren} from "./tren";

export class TrenMercancias extends Tren {

  public carga: string;
  public cantidad: number;

  constructor(
    tipoObjeto:string,
    id: string,
    origen: string,
    destino: string,
    carga: string,
    cantidad:number
  ) {
    super(tipoObjeto, id, origen, destino);
    this.carga = carga;
    this.cantidad = cantidad;
  }
}
