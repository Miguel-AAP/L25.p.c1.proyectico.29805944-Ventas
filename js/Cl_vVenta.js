export default class Cl_vventa{
    constructor(){
        this.vista = document.getElementById("ventaForm")
        this.vista.hidden =true
        this.inCliente = document.getElementById("ventaForm_inCliente")
        this.inFactura = document.getElementById("ventaForm_inFactura")
        this.inCosto = document.getElementById("ventaForm_inCosto")
        this.inCantidad = document.getElementById("ventaForm_inCantidad")
        this.btProcesar = document.getElementById("ventaForm_btProcesar")
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