/* CAMBIO DE BILLETES:
|*
|* La casa de moneda abre con cierta cantidad de cada billete para cambio (1: $10, 2: $20,
|* 3: $50), y llegan los clientes buscando sencillo; ejemplo: traen uno de $100 y se llevan 1 de
|* $50, 2 de $20 y 1 de $10. Se conoce por la casa la cantidad inicial de los billetes para cambio, y
|* por cada cliente el billete a cambiar (i. $100, ii. $50, iii. $20) y la cantidad correcta de cada
|* billete que desea para el cambio que recibirá. Se desea conocer por cada cliente: a) la cantidad
|* de billetes que se lleva, y por un día de servicios en la casa: b) el monto total cambiado, c) la
|* cantidad que le queda de cada tipo de billete para cambio, incluyendo los de $100.
|* La casa informa que, por ejemplo, el día anterior se comenzó con 20 billetes de $10, 10 de
|* $20 y 6 de $50, y se procesaron los siguientes registros: (nombre, billete, cambioDe50,
|* cambioDe20, cambioDe10) (Luis, 100, 2, 0, 0) (Ana, 50, 0, 2, 1) (José, 100, 0, 4, 2)
|* (Carmen, 20, 0, 0, 2) (Eva, 50, 0, 1, 3), según lo cual la salida requerida presenta el siguiente
|* formato:
|*
|* Luis se lleva 2 billetes
|* Ana se lleva 3 billetes
|* José se lleva 6 billetes
|* Carmen se lleva 2 billetes
|* Eva se lleva 4 billetes
|*
|* Se cambiaron $320
|* Quedaron 2 billetes de $100
|* Quedaron 4 billetes de $50
|* Quedaron 3 billetes de $20
|* Quedaron 12 billetes de $10
*/
import Cl_cliente from "./Cl_cliente.js";
import Cl_casa from "./Cl_casa.js";

let cliente1 = new Cl_cliente("Luis", 100, 2, 0, 0);
let cliente2 = new Cl_cliente("Ana", 50, 0, 2, 1);
let cliente3 = new Cl_cliente("José", 100, 0, 4, 2);
let cliente4 = new Cl_cliente("Carmen", 20, 0, 0, 2);
let cliente5 = new Cl_cliente("Eva", 50, 0, 1, 3);
let casa = new Cl_casa(6, 10, 20);

casa.procesarCliente(cliente1);
casa.procesarCliente(cliente2);
casa.procesarCliente(cliente3);
casa.procesarCliente(cliente4);
casa.procesarCliente(cliente5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>${cliente1.nombre} se lleva ${cliente1.calcCantBilletesCambio()} billetes.
<br>${cliente2.nombre} se lleva ${cliente2.calcCantBilletesCambio()} billetes.
<br>${cliente3.nombre} se lleva ${cliente3.calcCantBilletesCambio()} billetes.
<br>${cliente4.nombre} se lleva ${cliente4.calcCantBilletesCambio()} billetes.
<br>${cliente5.nombre} se lleva ${cliente5.calcCantBilletesCambio()} billetes.
<br>
<br>Se cambiaron $${casa.mostrarTotalCambio()}
<br>Quedaron ${casa.devolverBillete100()} billetes de $100.
<br>Quedaron ${casa.devolverBillete50()} billetes de $50.
<br>Quedaron ${casa.devolverBillete20()} billetes de $20.
<br>Quedaron ${casa.devolverBillete10()} billetes de $10.
`;