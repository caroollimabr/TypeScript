import { Mamifero } from './Mamifero'

export class Cao extends Mamifero{
    
    private _fucinho : boolean;
    
    private _caninosAparente : boolean;  
    
    public get fucinho() : boolean 
    {
        return this._fucinho;
    }
    public set fucinho(v : boolean)
     {
        this._fucinho = v;
    }

    public get caninosAparente() : boolean {
        return this._caninosAparente;
    }
    public set caninosAparente(v : boolean) {
        this._caninosAparente = v;
    }
    
    latir(){
        console.log("Au Au Au...")
    }
    
    comerDever(){
        console.log("Comendo dever de casa...")
    }
}


var cao = new Cao();

