import Animal from "./animal.js"
export default class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
       super(nombre, direccion, telefono, tipo)
       this._nombreMascota = ()=>nombreMascota
       this._enfermedad = ()=>enfermedad

    }

    get nombreMascota(){
        return this._nombreMascota()
    }

    set nombreMascota(new_nombreMascota){
        return this._nombreMascota = ()=>new_nombreMascota
    }

    get enfermedad(){
        return this._enfermedad()
    }

    set enfermedad(new_enfermedad){
        return this._enfermedad = ()=>new_enfermedad
    }
    
}