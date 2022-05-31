import Propietario from "./propietario.js";
import Animal from "./animal.js";
import Mascota from "./mascota.js";


const animal1 = new Animal("jose", "Chile", 222222333, "gato")
console.log(animal1)
console.log(animal1.telefono)
animal1.nombre = "ANA"
console.log(animal1.nombre)// 

const formulario = document.querySelector("form")
formulario.addEventListener("submit", (event)=>{
    event.preventDefault()
    let dueño = document.getElementById("propietario").value
    let telefono = document.getElementById("telefono").value
    let direccion = document.getElementById("direccion").value
    let nombreMascota = document.getElementById("nombreMascota").value
    let tipo = document.getElementById("tipo").value
    let enfermedad = document.getElementById("enfermedad").value

    let mascota1 = new Mascota(dueño,direccion,telefono,tipo,nombreMascota,enfermedad)
    console.log(mascota1)
    console.log(mascota1.datosPropietario())
    console.log(mascota1.tipo)
    document.querySelector("ul").innerHTML = `<li>${mascota1.datosPropietario()}</li> <li>${mascota1.tipo}, mientras que el nombre de la mascota es ${nombreMascota} y la enfermedad es: ${enfermedad}</li>`
})

