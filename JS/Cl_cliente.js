export default class Cl_cliente{
    constructor(n, b, cC, cV, cD){
        this.nombre = n;
        this.billete = +b;
        this.cambioDe50 = +cC;
        this.cambioDe20 = +cV;
        this.cambioDe10 = +cD;
    }

    set nombre(n){
        this._nombre = n;
    }

    set billete(b){
        this._billete = +b;
    }

    set cambioDe50(cC){
        this._cambioDe50 = +cC;
    }

    set cambioDe20(cV){
        this._cambioDe20 = +cV;
    }

    set cambioDe10(cD){
        this._cambioDe10 = +cD;
    }

    get nombre(){
        return this._nombre;
    }

    get billete(){
        return this._billete;
    }

    get cambioDe50(){
        return this._cambioDe50;
    }

    get cambioDe20(){
        return this._cambioDe20;
    }

    get cambioDe10(){
        return this._cambioDe10;
    }

    calcCantBilletesCambio(){
        return this.cambioDe50 + this.cambioDe20 + this.cambioDe10;
    }
}