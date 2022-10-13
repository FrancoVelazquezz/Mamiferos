import { Mamiferos } from "./mamiferos";

export class Carnivoros extends Mamiferos{

    constructor(pNombre: string, pMachoHembra: boolean, pDormir: boolean){
        super(pNombre, pMachoHembra, pDormir)
    }

    public comer():void{
        this.alimento = 'Gazella'
        return console.log('El animal Carnivoro esta comiendo: '+ this.alimento)
    }

}