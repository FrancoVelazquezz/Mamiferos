export class Mamiferos {
    protected nombre: string;
    protected machoHembra: boolean;
    protected alimento: string; 
    protected dormir: boolean;

    constructor(pNombre: string, pMachoHembra: boolean, pDormir: boolean){
        this.nombre = pNombre;
        this.machoHembra =  pMachoHembra;
        this.dormir = pDormir;
    }

    public getNombre():string{
        return this.nombre;
    }

    public comer():void{
        this.alimento = 'Nada'
        console.log('Comiendo: '+ this.alimento)
    }

    public getDormir():boolean{
        if(this.dormir === true){
            console.log('El '+ this.getNombre() +' esta durmiendo');
            return true;
        } else {
            console.log('El '+ this.getNombre() +' no esta durmiendo');
            return false;
        }
    }

    public getGenero():boolean{
        if(this.machoHembra === true){
            console.log('El '+ this.getNombre() +' es macho');
            return true;
        } else {
            console.log('El '+ this.getNombre() +' es hembra');
            return false;
        }
    }     
}