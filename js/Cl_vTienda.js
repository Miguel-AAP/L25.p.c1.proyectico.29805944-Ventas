import Cl_mVenta from "./Cl_mVenta.js";
import Cl_vVenta from "./Cl_vVenta.js";

export default class Cl_vTienda{
    constructor(){
        this.salida = document.getElementById("salida")
        this.controlador = null
        this.vVenta = new Cl_vVenta()
        this.vista = document.getElementById("mainForm")
        this.tabla = document.getElementById("mainForm_tabla")
        this.btAgregar = document.getElementById("mainForm_btAgregar")
        this.vVenta.btProcesar.onclick = ()=> this.controlador.procesarVenta()
        this.btAgregar.onclick =()=> this.mostrar()
    }

    valorInicial(entrada){
        return prompt("Introducir "+ entrada)
    }

    procesarVenta(){
        this.mVenta = new Cl_mVenta({
            cliente: this.vVenta.cliente,
            factura: this.vVenta.factura,
            costo: this.vVenta.costo,
            cantidad: this.vVenta.cantidad
        })
        return this.mVenta
    }

    mostrar(){
        this.vista.hidden = !this.vista.hidden
        this.vVenta.mostrar()
    }

    reporteTienda(montoCaja,clienteMayorPago,contVentaUnica){
        this.tabla.innerHTML += `<tr>
                        <td>${this.mVenta.cliente}</td>
                        <td>${this.mVenta.factura}</td>
                        <td>${this.mVenta.costo}</td>
                        <td>${this.mVenta.cantidad}</td>
                        <tr> `
        this.salida.innerHTML = `Monto en caja: ${montoCaja}<br>
                                Cliente que pagó más: ${clienteMayorPago}<br>
                                Ventas de 1 único artículo: ${contVentaUnica}`
    }
}
