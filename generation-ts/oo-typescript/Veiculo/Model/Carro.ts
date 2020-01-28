import { CarroImp } from './../Interface/Imp/CarroImp';



export class Carro extends CarroImp   {

    private _Sedan: boolean;

    public getSedan(): boolean {
        return this._Sedan;
    }
    public setSedan(value: boolean) {
        this._Sedan = value;
    }

    desligar(){
        console.log("O carro desligou.");
    }

}


