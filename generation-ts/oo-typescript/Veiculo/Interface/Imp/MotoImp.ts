import { Veiculo } from './../../Model/Veiculo';
import { ICambio } from "../ICambio";

export class MotoImp extends Veiculo implements ICambio {
    trocarDeMarcha() {
        console.log("Apertar com a mão a Embreagem ");
        console.log("Passar para a proxima marcha com o pé ");
    }
    freiar() {
        console.log("Apertar o freio com a mão \n");
    }
}
