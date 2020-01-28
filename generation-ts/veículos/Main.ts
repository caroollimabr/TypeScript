import { Moto } from './Moto';
import { Carro } from "./Carro";

var carro = new Carro();
carro.setCor("Cor: Prata");
carro.setAno("Ano: 2019 \n");
carro.trocarDeMarcha();
carro.frear();
console.log("\nCaracterísticas do carro:");
console.log(carro.getCor());
console.log(carro.getAno());


var moto = new Moto();
moto.setModelo("Modelo: Harley");
moto.setpainel("Painel: Digital");
moto.trocarDeMarcha();
moto.frear();
console.log("\nCaracterísticas da moto:");
console.log(moto.getModelo());
console.log(moto.getpainel());