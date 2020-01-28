import { MotoImp } from './../Interface/Imp/MotoImp';
import { Veiculo } from './Veiculo';

export class Moto extends MotoImp{

    private _Capacete: boolean;

    public getCapacete(): boolean {
        return this._Capacete;
    }
    public setCapacete(value: boolean) {
        this._Capacete = value;
    }

    desligar(){
        console.log("A moto desligou.");
    }

    

}