export default class Cl_controlador{

    constructor(modelo,vista){
        this.modelo = modelo
        this.vista = vista
        this.modelo.cajaMonto = +this.vista.valorInicial("caja inicial")
        this.modelo.porcIncremento = +this.vista.valorInicial("porciento de incremento")
    }

    procesarArticulo(){
        this.modelo.procesarVenta(this.vista.procesarArticulo())
        this.vista.mostrar()
        this.vista.reporteTienda(this.modelo.cajaMonto,this.modelo.clienteMayorPago,this.modelo.contVentaUnica)
    }
}