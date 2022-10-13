"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Herviboros = void 0;
var mamiferos_1 = require("./mamiferos");
var Herviboros = /** @class */ (function (_super) {
    __extends(Herviboros, _super);
    function Herviboros() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Herviboros.prototype.comer = function () {
        this.alimento = 'Hierbas';
        return console.log('El animal Herviboro esta comiendo: ' + this.alimento);
    };
    return Herviboros;
}(mamiferos_1.Mamiferos));
exports.Herviboros = Herviboros;
