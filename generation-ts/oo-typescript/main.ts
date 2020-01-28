import { Moto } from './Veiculo/Model/Moto';
import { Carro } from './Veiculo/Model/Carro';



var carro = new Carro();

console.log("Meu Caranguinho \n")

carro.acelerar();
carro.drift();
carro.trocarDeMarcha();
carro.freiar();



var moto = new Moto();

console.log("Minha Motoquinha \n")

moto.acelerar();
moto.empinar();
moto.trocarDeMarcha();
moto.freiar();





