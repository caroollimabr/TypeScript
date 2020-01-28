import { Veiculo } from './../../Model/Veiculo';
import { ICambio } from "../ICambio";

export class CarroImp extends Veiculo implements ICambio{
   
    trocarDeMarcha() {
        console.log("Pisar na Embreagem ");
        console.log("Passar para a proxima Marcha ")
    }   

    freiar() {
        console.log("Pisar no Freio!!! \n")
    }    
}

