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
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carro.prototype.getquantidadeDePortas = function () {
        return this._quantidadeDePortas;
    };
    Carro.prototype.setquantidadeDePortas = function (value) {
        this._quantidadeDePortas = value;
    };
    Carro.prototype.getmotor = function () {
        return this._motor;
    };
    Carro.prototype.setmotor = function (value) {
        this._motor = value;
    };
    Carro.prototype.trocarDeMarcha = function () {
        console.log("\nEstou trocando de marcha porque eu sou um carro!");
    };
    Carro.prototype.frear = function () {
        console.log("Estou freiando porque eu sou um carro!");
    };
    return Carro;
}(Veiculo_1.Veiculo));
exports.Carro = Carro;
