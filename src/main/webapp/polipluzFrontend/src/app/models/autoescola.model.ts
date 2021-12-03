export class Autoescola {
    public get longitude(): String {
        return this._longitude;
    }
    public set longitude(value: String) {
        this._longitude = value;
    }
    public get horarioFunc(): String {
        return this._horarioFunc;
    }
    public set horarioFunc(value: String) {
        this._horarioFunc = value;
    }
    public get latitude(): String {
        return this._latitude;
    }
    public set latitude(value: String) {
        this._latitude = value;
    }
    public get cnpj(): String {
        return this._cnpj;
    }
    public set cnpj(value: String) {
        this._cnpj = value;
    }
    public get cep(): String {
        return this._cep;
    }
    public set cep(value: String) {
        this._cep = value;
    }
    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }
    public get telefone(): String {
        return this._telefone;
    }
    public set telefone(value: String) {
        this._telefone = value;
    }
    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }
    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }
    constructor(

        private _id: Number,
        private _nome: String,
        private _email: String,
        private _telefone: String,
        private _cep: String,
        private _cnpj: String,
        private _horarioFunc: String,
        private _latitude: String,
        private _longitude: String

    ) { }
}