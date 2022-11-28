const inputNombre = document.getElementById(`nombre`)
const inputApellido = document.getElementById(`apellido`)
const botonIngresar = document.getElementById(`ingresar`)
const mensaje = document.getElementById(`mensaje`)
const ingreso = document.getElementById(`ingreso`)

botonIngresar.onclick= ()=>{
    localStorage.setItem(`nombre`,inputNombre.value)
    localStorage.setItem(`apellido`,inputApellido.value)
    
   
}


class destino {
    constructor(id, viaje, pago1, pago2, fecha1, fecha2, fecha3) {
        this.viaje = viaje
        this.id = id
        this.pago1 = pago1
        this.pago2 = pago2
        this.fecha1 = fecha1
        this.fecha2 = fecha2
        this.fecha3 = fecha3
    }
}


const Salta = new destino(1, `Salta`, 36000, 52000, `noviembre`, `enero`, `febrero`)
const Jujuy = new destino(2, `Jujuy`, 42000, 60000, `noviembre`, `enero`, `febrero`)
const catamarca = new destino(3, `Catamarca`, 48000, 270000, `noviembre`, `enero`, `febrero`)

console.log(Salta, Jujuy, catamarca)

let destinoSeleccionado = parseInt(prompt(`Elegi el destino de tus proximas vacaciones, te proponemos 1.Salta - 2.Jujuy - 3.Catamarca`))

let elijoDestino = false

let infoDestinoSeleccionado

while (elijoDestino === false) {

    if (destinoSeleccionado === Salta.id) {
        elijoDestino = true
        infoDestinoSeleccionado = Salta
    }
    else if (destinoSeleccionado === Jujuy.id) {
        elijoDestino = true
        infoDestinoSeleccionado = Jujuy
    }

    else if (destinoSeleccionado === catamarca.id) {
        elijoDestino = true
        infoDestinoSeleccionado = catamarca
    }


    else {
        destinoSeleccionado = parseInt(prompt(`Elegi un destino de los habilitados, te proponemos 1.Salta - 2.Jujuy - 3.Catamarca`))
    }

}

alert(`elegiste ${infoDestinoSeleccionado.viaje}`)

//////////////////////////////////////////////////////
// forma de pago


let formaDePago = parseInt(prompt(`Elegi la forma de pago de tu viaje, 1.Pago contado  - 2.Pago financiado en 6 cuotas `))


let elijoFormaDePago = false

let infoFormaDePago

while (elijoFormaDePago === false) {

    if (formaDePago === 1) {
        elijoFormaDePago = true
        infoFormaDePago = infoDestinoSeleccionado.pago1
    }
    else if (formaDePago === 2) {
        elijoFormaDePago = true
        infoFormaDePago = infoDestinoSeleccionado.pago2
    }



    else {
        formaDePago = parseInt(prompt(`Elegi una forma de pago habilitada, te proponemos 1.Precio contado - 2.Precio Financiado`))
    }


}

alert(`elegiste ${infoFormaDePago}`)

// eleccion del mes de viaje

let fechaDeViaje = parseInt(prompt(`Elegi la fecha de tu viaje, 1.Noviembre  - 2.Enero  - 3.Febrero `))


let elijoFechaDeViaje = false

let infoFechaDeViaje

while (elijoFechaDeViaje === false) {

    if (fechaDeViaje === 1) {
        elijoFechaDeViaje = true
        infoFechaDeViaje = infoDestinoSeleccionado.fecha1
    }
    else if (fechaDeViaje === 2) {
        elijoFechaDeViaje = true
        infoFechaDeViaje = infoDestinoSeleccionado.fecha2
    }

    else if (fechaDeViaje === 3) {
        elijoFechaDeViaje = true
        infoFechaDeViaje = infoDestinoSeleccionado.fecha3
    }



    else {
        fechaDeViaje = parseInt(prompt(`Elegi una fecha habilitada, te proponemos 1.Noviembre  - 2.Enero  - 3.Febrero `))
    }


}

alert(`elegiste ${infoFechaDeViaje}`)


function informacionDeTuViaje (infoDestinoSeleccionado, infoFormaDePago, infoFechaDeViaje) {

    alert (`Listo, tenes armado el viaje de tu vida, nos vamos a ${infoDestinoSeleccionado.viaje}, el costo del mismo es ${infoFormaDePago}, y elegiste el mes ideal, nos vamos en ${infoFechaDeViaje}`)
}

 informacionDeTuViaje(infoDestinoSeleccionado, infoFormaDePago, infoFechaDeViaje)


 // escursiones

 const escursionElegida = parseInt(prompt(`Ya definiste tu viaje, ahora amplia tu diversion y elegi entre las siguientes escursiones, .1 Cerro de los 7 colores, .2 Virgen del Cerro, .3 Purmamarca .4 Iruya`))

 class escursion {
    constructor(id, detalle, tiempo, costo){
    this.id=id
    this.detalle=detalle
    this.tiempo=tiempo
    this.costo=costo
    }
 }

 const escursiones = []


 const cerro7Colores = new escursion (1, `cerro 7 colores`, `medio dia`, 4800)
 escursiones.push(cerro7Colores)
 const virgenDelCerro= new escursion(2, `Virgen del Cerro`, `dia entero`, 9500)
 escursiones.push(virgenDelCerro)
 const purmamarca=new escursion (3, `Purmamarca`, `medio dia`, 5220)
 escursiones.push(purmamarca)
 const iruya=new escursion(4, `Iruya`, `dia entero`, 14500)
 escursiones.push(iruya)
 
 console.log(escursiones)

 const eleccionRealizada=escursiones.find(escursion=>escursion.id===escursionElegida)
    console.log(eleccionRealizada)
       
 

 