export default class Cl_vArticulo{
    constructor(){
        this.vista = document.getElementById("articuloForm")
        this.vista.hidden =true
        this.inCliente = document.getElementById("articuloForm_inCliente")
        this.inFactura = document.getElementById("articuloForm_inFactura")
        this.inCosto = document.getElementById("articuloForm_inCosto")
        this.inCantidad = document.getElementById("articuloForm_inCantidad")
        this.btProcesar = document.getElementById("articuloForm_btProcesar")
    }

    get costo(){
        return this.inCosto.value
    }

    get cliente(){
        return this.inCliente.value
    }
    get factura(){
        return this.inFactura.value
    }
    get cantidad(){
        return this.inCantidad.value
    }

    mostrar(){
        this.vista.hidden = !this.vista.hidden
    }
}