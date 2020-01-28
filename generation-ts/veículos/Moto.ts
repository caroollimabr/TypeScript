import { Icambio } from './Icambio';
import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo implements Icambio {
   
    private _revestimentoDoBanco: string;

    private _painel: string;
    
    public getrevestimentoDoBanco(): string {
        return this._revestimentoDoBanco;
    }
    public setrevestimentoDoBanco(value: string) {
        this._revestimentoDoBanco = value;
    }
    public getpainel(): string {
        return this._painel;
    }
    public setpainel(value: string) {
        this._painel = value;
    }

    trocarDeMarcha() {
        console.log("Estou trocando de marcha porque eu sou uma moto!");
    }
    frear() {
        console.log("Estou freiando porque eu sou uma moto!");
    }

}
