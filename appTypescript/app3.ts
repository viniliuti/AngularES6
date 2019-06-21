import Carro from "./Carro";
import Moto from "./Moto";
import Concessionaria from "./Concessionaria"

let carro = new Carro('CarroA', 1);
let moto = new Moto();

carro.acelerar()
moto.acelerar()

console.log(moto)
console.log(carro)


let concessionaria = new Concessionaria("Endereco", [])
console.log(concessionaria.fornecerHorarioDeFuncionamento())