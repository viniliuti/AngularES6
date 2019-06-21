import Carro from "./Carro";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";


// teste de impressao de Pessoa
// let pessoa = new Pessoa('Vinicio', 'Opala')
// console.log(pessoa.dizerCarroPreferido())

// criar carros
let carroA = new Carro('CarroA', 1)
let carroB = new Carro('CarroB', 2)
let carroC = new Carro('CarroC', 3)
let carroD = new Carro('CarroD', 4)
let carroE = new Carro('CarroE', 5)

// associar carros à concessionaria
let listaDeCarrosConcessionaria: Carro[]
listaDeCarrosConcessionaria = [carroA, carroB, carroC, carroD, carroE]

let concessionaria = new Concessionaria('Endereço', listaDeCarrosConcessionaria)

// Exibir lista de carros
//console.log(concessionaria.mostrarListaDeCarros())

// nova pessoa
let cliente = new Pessoa('Joao', 'CarroB')
// console.log(cliente.dizerCarroPreferido())

// MAP vai rodar a lista de carros e comprar o carro caso o retorno do cliente esteja na lista
concessionaria.mostrarListaDeCarros().map(
    (fCarro: Carro) => {
        // console.log(fCarro)
        if (fCarro['modelo'] == cliente.dizerCarroPreferido()){
            cliente.comprarCarro(fCarro)
        }
    }
)

console.log(cliente.dizerCarroQueTem())