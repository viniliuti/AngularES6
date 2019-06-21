"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    /**
     * fornecedorEndereco
     */
    Concessionaria.prototype.fornecedorEndereco = function () {
        return this.endereco;
    };
    /**
     * mostrarListaDeCarros
     */
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return "De segunda a sexta";
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
