"use strict";
exports.__esModule = true;
exports.Mamiferos = void 0;
var Mamiferos = /** @class */ (function () {
    function Mamiferos(pNombre, pMachoHembra, pDormir) {
        this.nombre = pNombre;
        this.machoHembra = pMachoHembra;
        this.dormir = pDormir;
    }
    Mamiferos.prototype.getNombre = function () {
        return this.nombre;
    };
    Mamiferos.prototype.comer = function () {
        this.alimento = 'Nada';
        console.log('Comiendo: ' + this.alimento);
    };
    Mamiferos.prototype.getDormir = function () {
        if (this.dormir === true) {
            console.log('El ' + this.getNombre() + ' esta durmiendo');
            return true;
        }
        else {
            console.log('El ' + this.getNombre() + ' no esta durmiendo');
            return false;
        }
    };
    Mamiferos.prototype.getGenero = function () {
        if (this.machoHembra === true) {
            console.log('El ' + this.getNombre() + ' es macho');
            return true;
        }
        else {
            console.log('El ' + this.getNombre() + ' es hembra');
            return false;
        }
    };
    return Mamiferos;
}());
exports.Mamiferos = Mamiferos;
