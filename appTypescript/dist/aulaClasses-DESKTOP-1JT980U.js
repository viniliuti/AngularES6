"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
// teste de impressao de Pessoa
// let pessoa = new Pessoa('Vinicio', 'Opala')
// console.log(pessoa.dizerCarroPreferido())
// criar carros
var carroA = new Carro_1.default('CarroA', 1);
var carroB = new Carro_1.default('CarroB', 2);
var carroC = new Carro_1.default('CarroC', 3);
var carroD = new Carro_1.default('CarroD', 4);
var carroE = new Carro_1.default('CarroE', 5);
// associar carros à concessionaria
var listaDeCarrosConcessionaria;
listaDeCarrosConcessionaria = [carroA, carroB, carroC, carroD, carroE];
var concessionaria = new Concessionaria_1.default('Endereço', listaDeCarrosConcessionaria);
// Exibir lista de carros
//console.log(concessionaria.mostrarListaDeCarros())
// nova pessoa
var cliente = new Pessoa_1.default('Joao', 'CarroB');
// console.log(cliente.dizerCarroPreferido())
// MAP vai rodar a lista de carros e comprar o carro caso o retorno do cliente esteja na lista
concessionaria.mostrarListaDeCarros().map(function (fCarro) {
    // console.log(fCarro)
    if (fCarro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(fCarro);
    }
});
console.log(cliente.dizerCarroQueTem());
