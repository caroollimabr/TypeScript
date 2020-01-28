export class Veiculo{
    private _Cor: string;
 
    private _Modelo: string;
    
    private _Ano: string;
    
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
    public getAno(): string {
        return this._Ano;
    }
    public setAno(value: string) {
        this._Ano = value;
    }
}
