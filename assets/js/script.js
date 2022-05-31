// import Propietario from "./propietario.js";
// import Animal from "./animal.js";
import Mascota from "./mascota.js";


// const animal1 = new Animal("jose", "Chile", 222222333, "gato")
// console.log(animal1)
// console.log(animal1.telefono)
// animal1.nombre = "ANA"
// console.log(animal1.nombre)// 

const formulario = document.querySelector("form")
formulario.addEventListener("submit", (event)=>{
    event.preventDefault()
    let dueño = document.getElementById("propietario").value
    let telefono = document.getElementById("telefono").value
    let direccion = document.getElementById("direccion").value
    let nombreMascota = document.getElementById("nombreMascota").value
    let tipo = document.getElementById("tipo").value
    let enfermedad = document.getElementById("enfermedad").value

    if(tipo=="perro"){
        let perro = new Mascota(dueño,direccion,telefono,tipo,nombreMascota,enfermedad)
        document.querySelector("ul").innerHTML = `<li>${perro.datosPropietario()}</li> <li>${perro.tipo}, mientras que el nombre de la mascota es ${perro.nombreMascota} y la enfermedad es: ${perro.enfermedad}</li>`
    } else if (tipo=="gato"){
        let gato = new Mascota(dueño,direccion,telefono,tipo,nombreMascota,enfermedad)
        document.querySelector("ul").innerHTML = `<li>${gato.datosPropietario()}</li> <li>${gato.tipo}, mientras que el nombre de la mascota es ${gato.nombreMascota} y la enfermedad es: ${gato.enfermedad}</li>`
    } else if (tipo=="conejo"){
        let conejo = new Mascota(dueño,direccion,telefono,tipo,nombreMascota,enfermedad)
        document.querySelector("ul").innerHTML = `<li>${conejo.datosPropietario()}</li> <li>${conejo.tipo}, mientras que el nombre de la mascota es ${conejo.nombreMascota} y la enfermedad es: ${conejo.enfermedad}</li>`
    }
    limpiar()

    // let mascota1 = new Mascota(dueño,direccion,telefono,tipo,nombreMascota,enfermedad)
    // console.log(mascota1)
    // console.log(mascota1.datosPropietario())
    // console.log(mascota1.tipo)
    // document.querySelector("ul").innerHTML = `<li>${mascota1.datosPropietario()}</li> <li>${mascota1.tipo}, mientras que el nombre de la mascota es ${nombreMascota} y la enfermedad es: ${enfermedad}</li>`
})

let limpiar = () => {
    document.getElementById("propietario").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("direccion").value = ""
    document.getElementById("nombreMascota").value = ""
    document.getElementById("tipo").value = ""
    document.getElementById("enfermedad").value = ""
}