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
var CarroImp_1 = require("./../Interface/Imp/CarroImp");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carro.prototype.getSedan = function () {
        return this._Sedan;
    };
    Carro.prototype.setSedan = function (value) {
        this._Sedan = value;
    };
    Carro.prototype.drift = function () {
        console.log("HIIIIIIII olha o possante dando drift...");
    };
    return Carro;
}(CarroImp_1.CarroImp));
exports.Carro = Carro;
