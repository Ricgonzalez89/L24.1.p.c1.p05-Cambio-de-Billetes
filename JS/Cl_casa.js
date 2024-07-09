export default class Cl_casa{
    constructor(bC, bV, bD){
        this.billete50 = +bC;
        this.billete20 = +bV;
        this.billete10 = +bD;
        this.contBillete100 = 0;
        this.acumMontoCambio = 0;
    }

    procesarCliente(c){
        //Acumular monto total de los billetes cambiados
        this.acumMontoCambio += c.billete;

        //Conteo de billetes restantes
        this.billete50 -= c.cambioDe50;
        this.billete20 -= c.cambioDe20;
        this.billete10 -= c.cambioDe10;

        //Contar billetes de 100
        if (c.billete === 100)
            this.contBillete100++;
    }

    devolverBillete50(){
        return this.billete50;
    }

    devolverBillete20(){
        return this.billete20;
    }

    devolverBillete10(){
        return this.billete10;
    }

    devolverBillete100(){
        return this.contBillete100;
    }

    mostrarTotalCambio(){
        return this.acumMontoCambio;
    }
}