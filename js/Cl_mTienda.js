export default class Cl_mTienda{
constructor(cajaMonto=0,porcIncremento=0){
        this.cajaMonto = +cajaMonto
        this.porcIncremento = porcIncremento
        this.mayorPago = +0
        this.clienteMayorPago= ""
        this.contVentaUnica = +0
    }

    procesarVenta(venta){
        this.cajaMonto += venta.costo*venta.cantidad*(1+(this.porcIncremento)/100)
        if(this.mayorPago<venta.costo*venta.cantidad){
            this.clienteMayorPago = venta.cliente
            this.mayorPago =venta.costo*venta.cantidad
        }
        if(venta.cantidad == 1){
            this.contVentaUnica++
        }
    }
}