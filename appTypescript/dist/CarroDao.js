"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nometabela = 'tb_Carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('logica de remover');
        return new Carro_1.default('', 1);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('logica para selecionar');
        return new Carro_1.default('', 1);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('logica para selecionarTodos');
        return new Array();
    };
    return CarroDao;
}());
exports.default = CarroDao;
