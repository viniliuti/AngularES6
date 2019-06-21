"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    /*
        a ! é algum probleminha do TypeScript do VSCode
        Dessa forma ele nao dá erro dizendo que o campo é indefinido
    */
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    /**
     * dizerNome
     */
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    /**
     * dizerCarroPreferido
     */
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    /**
     * comprarCarro
     */
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    /**
     * dizerCarroQueTem
     */
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.default = Pessoa;
