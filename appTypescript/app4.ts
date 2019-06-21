// import ConcessionariaDao from "./ConcessionariaDao";
import Concessionaria from "./Concessionaria";
// import PessoaDao from "./PessoaDao";
import Pessoa from "./Pessoa";
import Dao from "./Dao";

// let daoConcessionaria: ConcessionariaDao = new ConcessionariaDao
let concessionaria: Concessionaria = new  Concessionaria('', [])

// let oi = daoConcessionaria.inserir(concessionaria)
// console.log(oi)

// let daoPessoa: PessoaDao = new PessoaDao
let pessoa:Pessoa = new Pessoa('', '')

// let oi = daoPessoa.atualizar(pessoa)
// console.log(oi)


let daoGenConc: Dao<Concessionaria> = new Dao<Concessionaria>()

let daoGenPess: Dao<Pessoa> = new Dao<Pessoa>()

// let oi = daoGenConc.inserir(concessionaria)
let oi = daoGenPess.remover(1)
console.log(typeof oi)
//console.log(oi)
