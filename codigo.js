
// class destino {
//     constructor(id, viaje, pago1, pago2, fecha1, fecha2, fecha3) {
//         this.viaje = viaje
//         this.id = id
//         this.pago1 = pago1
//         this.pago2 = pago2
//         this.fecha1 = fecha1
//         this.fecha2 = fecha2
//         this.fecha3 = fecha3
//     }
// }


// const Salta = new destino(1, `Salta`, 36000, 52000, `noviembre`, `enero`, `febrero`)
// const Jujuy = new destino(2, `Jujuy`, 42000, 60000, `noviembre`, `enero`, `febrero`)
// const catamarca = new destino(3, `Catamarca`, 48000, 270000, `noviembre`, `enero`, `febrero`)

// console.log(Salta, Jujuy, catamarca)

// let destinoSeleccionado = parseInt(prompt(`Elegi el destino de tus proximas vacaciones, te proponemos 1.Salta - 2.Jujuy - 3.Catamarca`))

// let elijoDestino = false

// let infoDestinoSeleccionado

// while (elijoDestino === false) {

//     if (destinoSeleccionado === Salta.id) {
//         elijoDestino = true
//         infoDestinoSeleccionado = Salta
//     }
//     else if (destinoSeleccionado === Jujuy.id) {
//         elijoDestino = true
//         infoDestinoSeleccionado = Jujuy
//     }

//     else if (destinoSeleccionado === catamarca.id) {
//         elijoDestino = true
//         infoDestinoSeleccionado = catamarca
//     }


//     else {
//         destinoSeleccionado = parseInt(prompt(`Elegi un destino de los habilitados, te proponemos 1.Salta - 2.Jujuy - 3.Catamarca`))
//     }

// }

// alert(`elegiste ${infoDestinoSeleccionado.viaje}`)

// //////////////////////////////////////////////////////
// // forma de pago


// let formaDePago = parseInt(prompt(`Elegi la forma de pago de tu viaje, 1.Pago contado  - 2.Pago financiado en 6 cuotas `))


// let elijoFormaDePago = false

// let infoFormaDePago

// while (elijoFormaDePago === false) {

//     if (formaDePago === 1) {
//         elijoFormaDePago = true
//         infoFormaDePago = infoDestinoSeleccionado.pago1
//     }
//     else if (formaDePago === 2) {
//         elijoFormaDePago = true
//         infoFormaDePago = infoDestinoSeleccionado.pago2
//     }



//     else {
//         formaDePago = parseInt(prompt(`Elegi una forma de pago habilitada, te proponemos 1.Precio contado - 2.Precio Financiado`))
//     }


// }

// alert(`elegiste ${infoFormaDePago}`)

// // eleccion del mes de viaje

// let fechaDeViaje = parseInt(prompt(`Elegi la fecha de tu viaje, 1.Noviembre  - 2.Enero  - 3.Febrero `))


// let elijoFechaDeViaje = false

// let infoFechaDeViaje

// while (elijoFechaDeViaje === false) {

//     if (fechaDeViaje === 1) {
//         elijoFechaDeViaje = true
//         infoFechaDeViaje = infoDestinoSeleccionado.fecha1
//     }
//     else if (fechaDeViaje === 2) {
//         elijoFechaDeViaje = true
//         infoFechaDeViaje = infoDestinoSeleccionado.fecha2
//     }

//     else if (fechaDeViaje === 3) {
//         elijoFechaDeViaje = true
//         infoFechaDeViaje = infoDestinoSeleccionado.fecha3
//     }



//     else {
//         fechaDeViaje = parseInt(prompt(`Elegi una fecha habilitada, te proponemos 1.Noviembre  - 2.Enero  - 3.Febrero `))
//     }


// }

// alert(`elegiste ${infoFechaDeViaje}`)


// function informacionDeTuViaje (infoDestinoSeleccionado, infoFormaDePago, infoFechaDeViaje) {

//     alert (`Listo, tenes armado el viaje de tu vida, nos vamos a ${infoDestinoSeleccionado.viaje}, el costo del mismo es ${infoFormaDePago}, y elegiste el mes ideal, nos vamos en ${infoFechaDeViaje}`)
// }

//  informacionDeTuViaje(infoDestinoSeleccionado, infoFormaDePago, infoFechaDeViaje)





// manipulando el DOM

const inputNombre = document.getElementById(`nombre`)
const inputApellido = document.getElementById(`apellido`)
const botonIngresar = document.getElementById(`ingresar`)
const mensaje = document.getElementById(`mensaje`)
const ingreso = document.getElementById(`ingreso`)
const adentro = document.getElementById(`adentro`)
const general = document.getElementById(`general`)

botonIngresar.onclick = () => {
    localStorage.setItem(`nombre`, inputNombre.value)
    localStorage.setItem(`apellido`, inputApellido.value)
    console.log(localStorage.getItem(`password`))
    const nombreUsuario = localStorage.getItem(`nombre`)
    if (nombreUsuario) {
        mensaje.innerText = `Bienvenido/a ${nombreUsuario} a Viento Salvaje, estas a un par de clicks del viaje de tu vida`
      general.style.backgroundImage = 
         
        general.innerHTML = `  <div class="row">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <img class="logo" src="./imagenes/logo.png" alt="logo empresa">
            <div class="d-flex flex-grow-1">
              <span class="w-100 d-lg-none d-block"> </span>
              <a href="#" class="navbar-brand">
                <h1>VIENTO SALVAJE</h1>
                <p class="subt">Viajar es vivir!!</p>
              </a>
              <div class="w-100 text-right">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#minavbarboreal">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            <div class="collapse navbar-collapse flex-grow-1 text-right" id="minavbarboreal">
              <ul class="navbar-nav ms-auto flex-nowrap">
                <li class="nav-item">
                  <a href="#" class="nav-link "> Inicio</a>
                </li>
                <li class="nav-item">
                  <a href="../pages/excursiones.html" class="nav-link ">Excursiones</a>
                </li>
                <li class="nav-item">
                  <a href="./pages/servicios.html" class="nav-link ">Galerias</a>
                </li>
                <li class="nav-item">
                  <a href="./pages/clientes.html" class="nav-link ">Conocenos</a>
                </li>
                <li class="nav-item">
                  <a href="./pages/contacto.html" class="nav-link ">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <h1>BIENVENIDA/O ${nombreUsuario} ELEJI ENTRE ESTAS OPCIONES</h1>
        <div class="eleccion">
          <div class="card" style="width: 18rem;">
            <img src="./imagenes/Iruya de noche.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Iruya</h5>
              <p class="card-text">Veni a Iruya, 269 años de historia.</p>
              <a href="#" class="btn btn-primary">Vamosss!!!</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="./imagenes/Purmamarca.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Purmamarca</h5>
              <p class="card-text">Conoce este pueblo de ensueño!.</p>
              <a href="#" class="btn btn-primary">Vamosss!!!</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="./imagenes/montaña.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Hornocal</h5>
              <p class="card-text">Vamos a conocer como se vivia hace mil años.</p>
              <a href="#" class="btn btn-primary">Vamosss!!!</a>
            </div>
          </div>
        </div>
    
    `

    }

}