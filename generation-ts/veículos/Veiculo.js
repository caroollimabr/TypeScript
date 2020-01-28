"use strict";
exports.__esModule = true;
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    Veiculo.prototype.getCor = function () {
        return this._Cor;
    };
    Veiculo.prototype.setCor = function (value) {
        this._Cor = value;
    };
    Veiculo.prototype.getModelo = function () {
        return this._Modelo;
    };
    Veiculo.prototype.setModelo = function (value) {
        this._Modelo = value;
    };
    Veiculo.prototype.getAno = function () {
        return this._Ano;
    };
    Veiculo.prototype.setAno = function (value) {
        this._Ano = value;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
