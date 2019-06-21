"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("./Moto"));
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nometabela = 'tb_Moto';
    }
    MotoDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('logica de remover');
        return new Moto_1.default();
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('logica para selecionar');
        return new Moto_1.default();
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('logica para selecionarTodos');
        return new Array();
    };
    return MotoDao;
}());
exports.default = MotoDao;
