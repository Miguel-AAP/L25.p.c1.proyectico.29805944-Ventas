import Cl_mArticulo from "./Cl_mArticulo.js";
import Cl_vArticulo from "./Cl_vArticulo.js";

export default class Cl_vTienda{
    constructor(){
        this.salida = document.getElementById("salida")
        this.controlador = null
        this.vArticulo = new Cl_vArticulo()
        this.vista = document.getElementById("mainForm")
        this.tabla = document.getElementById("mainForm_tabla")
        this.btAgregar = document.getElementById("mainForm_btAgregar")
        this.vArticulo.btProcesar.onclick = ()=> this.controlador.procesarArticulo()
        this.btAgregar.onclick =()=> this.mostrar()
    }

    valorInicial(entrada){
        return prompt("Introducir "+ entrada)
    }

    procesarArticulo(){
        this.mArticulo = new Cl_mArticulo({
            cliente: this.vArticulo.cliente,
            factura: this.vArticulo.factura,
            costo: this.vArticulo.costo,
            cantidad: this.vArticulo.cantidad
        })
        return this.mArticulo
    }

    mostrar(){
        this.vista.hidden = !this.vista.hidden
        this.vArticulo.mostrar()
    }

    reporteTienda(montoCaja,clienteMayorPago,contVentaUnica){
        this.tabla.innerHTML += `<tr>
                        <td>${this.mArticulo.cliente}</td>
                        <td>${this.mArticulo.factura}</td>
                        <td>${this.mArticulo.costo}</td>
                        <td>${this.mArticulo.cantidad}</td>
                        <tr> `
        this.salida.innerHTML = `Monto en caja: ${montoCaja}<br>
                                Cliente que pagó más: ${clienteMayorPago}<br>
                                Ventas de 1 único artículo: ${contVentaUnica}`
    }
}
