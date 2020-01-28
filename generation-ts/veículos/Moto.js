"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Veiculo_1 = require("./Veiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moto.prototype.getrevestimentoDoBanco = function () {
        return this._revestimentoDoBanco;
    };
    Moto.prototype.setrevestimentoDoBanco = function (value) {
        this._revestimentoDoBanco = value;
    };
    Moto.prototype.getpainel = function () {
        return this._painel;
    };
    Moto.prototype.setpainel = function (value) {
        this._painel = value;
    };
    Moto.prototype.trocarDeMarcha = function () {
        console.log("Estou trocando de marcha porque eu sou uma moto!");
    };
    Moto.prototype.frear = function () {
        console.log("Estou freiando porque eu sou uma moto!");
    };
    return Moto;
}(Veiculo_1.Veiculo));
exports.Moto = Moto;
