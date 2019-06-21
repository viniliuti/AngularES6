"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.velocidade = 0;
    }
    /*
        a ! é algum probleminha do TypeScript do VSCode
        Dessa forma ele nao dá erro dizendo que o campo é indefinido
    */
    /**
     * acelerar
     */
    Veiculo.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    /**
     * parar
     */
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    /**
     * velocidadeAtual
     */
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.default = Veiculo;
