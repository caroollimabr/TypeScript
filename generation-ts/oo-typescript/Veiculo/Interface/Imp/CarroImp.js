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
var Veiculo_1 = require("./../../Model/Veiculo");
var CarroImp = /** @class */ (function (_super) {
    __extends(CarroImp, _super);
    function CarroImp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarroImp.prototype.trocarDeMarcha = function () {
        console.log("Pisar na Embreagem ");
        console.log("Passar para a proxima Marcha ");
    };
    CarroImp.prototype.freiar = function () {
        console.log("Pisar no Freio!!! \n");
    };
    return CarroImp;
}(Veiculo_1.Veiculo));
exports.CarroImp = CarroImp;
