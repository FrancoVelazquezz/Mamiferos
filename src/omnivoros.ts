import { Mamiferos } from "./mamiferos";

export class Omnivoros extends Mamiferos{

    public comer():void{
        this.alimento = 'Hierbas y carne'
        return console.log('El animal Omnivoros esta comiendo: ' + this.alimento);
    }
    
}