export class Veiculo{
    
    //Gerando Propriedades privada para o objeto

    private _Placa: string;  

    private _Cor: string;
  
    private _Modelo: string;
  
    private _Ano: number;
   
    //Gerando Get e Setter para as propriedades

    public getPlaca(): string {
        return this._Placa;
    }
    public setPlaca(value: string) {
        this._Placa = value;
    }

    public getCor(): string {
        return this._Cor;
    }
    public setCor(value: string) {
        this._Cor = value;
    }
    
    public getModelo(): string {
        return this._Modelo;
    }
    public setModelo(value: string) {
        this._Modelo = value;
    }

    
    public getAno(): number {
        return this._Ano;
    }
    public setAno(value: number) {
        this._Ano = value;
    }
    
    acelerar(){
        console.log("Acelerando...");
    }
    
   

}