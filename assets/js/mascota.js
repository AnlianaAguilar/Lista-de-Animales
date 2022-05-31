export default class Mascota{
    constructor(nombre, direccion, telefono, tipo, nombre, enfermedad){
       super(nombre, direccion, telefono, tipo)
       this._nombre = ()=>nombre
       this._enfermedad = ()=>enfermedad

    }

    get nombre(){
        return this._nombre()
    }

    set nombre(new_nombre){
        return this._nombre = ()=>new_nombre
    }

    get enfermedad(){
        return this._enfermedad()
    }

    set enfermedad(new_enfermedad){
        return this._enfermedad = ()=>new_enfermedad
    }
    
}