export default class Cl_mArticulo{
    constructor({cliente,factura,costo,cantidad}){
        this.cliente = cliente,
        this.factura = factura
        this.costo = costo
        this.cantidad = cantidad
    }
    get cliente(){
        return this._cliente
    }
    set cliente(cliente){
        this._cliente =cliente
    }
    get factura(){
        return this._factura
    }
    set factura(factura){
        this._factura =factura
    }
    get cantidad(){
        return +this._cantidad
    }
    set cantidad(cantidad){
        this._cantidad = cantidad
    }
    get costo(){
        return +this._costo
    }
    set costo(costo){
        this._costo = costo
    }

}