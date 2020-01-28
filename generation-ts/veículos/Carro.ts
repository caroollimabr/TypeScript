import { Icambio } from './Icambio';
import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo implements Icambio {
    

    private _quantidadeDePortas: string;
    
    private _motor: string;
   
    public getquantidadeDePortas(): string {
        return this._quantidadeDePortas;
    }
    public setquantidadeDePortas(value: string) {
        this._quantidadeDePortas = value;
    }

    public getmotor(): string {
        return this._motor;
    }
    public setmotor(value: string) {
        this._motor = value;
    } 

    trocarDeMarcha() {
        console.log("\nEstou trocando de marcha porque eu sou um carro!");
    }
    frear() {
        console.log("Estou freiando porque eu sou um carro!");
    }
    
}



