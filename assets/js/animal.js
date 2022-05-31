import Propietario from "./propietario.js"

export default class Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono)
        this._tipo = ()=>tipo
    }

    get tipo(){
        let tipoMascota = `El tipo de animal es un: ${this._tipo()}` // si necesitara solo el dato debo realizar una funcion
        return tipoMascota
    }

    set tipo(new_tipo){
        return this._tipo = ()=>new_tipo
    }
}

