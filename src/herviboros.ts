import { Mamiferos } from "./mamiferos";

export class Herviboros extends Mamiferos{

    public comer():void{
        this.alimento = 'Hierbas'
        return console.log('El animal Herviboro esta comiendo: ' + this.alimento);
    }
    
}