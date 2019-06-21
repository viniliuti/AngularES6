class Veiculo {
    protected modelo!: string
    protected velocidade: number = 0
    /* 
        a ! é algum probleminha do TypeScript do VSCode
        Dessa forma ele nao dá erro dizendo que o campo é indefinido 
    */

    /**
     * acelerar
     */
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    /**
     * parar
     */
    public parar(): void {
        this.velocidade = 0
    }

    /**
     * velocidadeAtual
     */
    public velocidadeAtual(): number {
        return this.velocidade
    }
}

export default Veiculo