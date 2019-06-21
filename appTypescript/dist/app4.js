"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import ConcessionariaDao from "./ConcessionariaDao";
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
// import PessoaDao from "./PessoaDao";
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Dao_1 = __importDefault(require("./Dao"));
// let daoConcessionaria: ConcessionariaDao = new ConcessionariaDao
var concessionaria = new Concessionaria_1.default('', []);
// let oi = daoConcessionaria.inserir(concessionaria)
// console.log(oi)
// let daoPessoa: PessoaDao = new PessoaDao
var pessoa = new Pessoa_1.default('', '');
// let oi = daoPessoa.atualizar(pessoa)
// console.log(oi)
var daoGenConc = new Dao_1.default();
var daoGenPess = new Dao_1.default();
// let oi = daoGenConc.inserir(concessionaria)
var oi = daoGenPess.remover(1);
console.log(typeof oi);
//console.log(oi)
