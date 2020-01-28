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
var MotoImp = /** @class */ (function (_super) {
    __extends(MotoImp, _super);
    function MotoImp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotoImp.prototype.trocarDeMarcha = function () {
        console.log("Apertar com a mão a Embreagem ");
        console.log("Passar para a proxima marcha com o pé ");
    };
    MotoImp.prototype.freiar = function () {
        console.log("Apertar o freio com a mão \n");
    };
    return MotoImp;
}(Veiculo_1.Veiculo));
exports.MotoImp = MotoImp;
