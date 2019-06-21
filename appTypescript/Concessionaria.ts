import Carro from "./Carro";
import { ConcessionariaInterface } from "./ConcessionariaInterface"

export default class Concessionaria implements ConcessionariaInterface {
    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }
    private endereco: string
    private listaDeCarros: Carro[]
    
    /**
     * fornecedorEndereco
     */
    public fornecedorEndereco(): string {
        return this.endereco
    }
    
    /**
     * mostrarListaDeCarros
     */
    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }

    fornecerHorarioDeFuncionamento(): string {
        return "De segunda a sexta"
    }
}