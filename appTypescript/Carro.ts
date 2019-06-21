import Veiculo from "./Veiculo";

class Carro extends Veiculo {
    private numeroDePortas!: number
    /* 
        a ! é algum probleminha do TypeScript do VSCode
        Dessa forma ele nao dá erro dizendo que o campo é indefinido 
    */

    constructor(modelo: string, numeroDePortas: number) {
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }    
}

export default Carro