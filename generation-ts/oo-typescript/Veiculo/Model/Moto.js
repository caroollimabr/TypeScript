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
var MotoImp_1 = require("./../Interface/Imp/MotoImp");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moto.prototype.getCapacete = function () {
        return this._Capacete;
    };
    Moto.prototype.setCapacete = function (value) {
        this._Capacete = value;
    };
    Moto.prototype.desligar = function () {
        console.log("A moto desligou.");
    };
    return Moto;
}(MotoImp_1.MotoImp));
exports.Moto = Moto;
