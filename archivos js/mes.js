



const botonSeleccionarMes = document.getElementById(`botonSeleccionarMes`)
const inputNoviembre = document.getElementById(`noviembre`)
const inputDiciembre = document.getElementById(`diciembre`)
const inputEnero = document.getElementById(`enero`)
const nuevaCiudad = JSON.parse(localStorage.getItem(`ciudad`))
const ciudadYMesSeleccionados = document.getElementById(`ciudadYMesSeleccionados`)
const generalMes = document.getElementById(`generalMes`)

botonSeleccionarMes.onclick = () => {
  

    if (inputNoviembre.checked) {
        const mesSeleccionado = nuevaCiudad.fecha1
        const mesSeleccionadoJSON = JSON.stringify( mesSeleccionado )
        localStorage.setItem(`mes`, mesSeleccionadoJSON)
        const nuevomes = JSON.parse(localStorage.getItem(`mes`))
        console.log(nuevomes)
      

    }
    else if (inputDiciembre.checked) {
        const mesSeleccionado = nuevaCiudad.fecha2
        const mesSeleccionadoJSON = JSON.stringify( mesSeleccionado )
        localStorage.setItem(`mes`, mesSeleccionadoJSON)
        const nuevomes = JSON.parse(localStorage.getItem(`mes`))
        console.log(nuevomes)
    }
    else if (inputEnero.checked) {
        const mesSeleccionado = nuevaCiudad.fecha3
        const mesSeleccionadoJSON = JSON.stringify( mesSeleccionado )
        localStorage.setItem(`mes`, mesSeleccionadoJSON)
        const nuevomes = JSON.parse(localStorage.getItem(`mes`))
        console.log(nuevomes)
    }

    const nuevomes = JSON.parse(localStorage.getItem(`mes`))

    generalMes.innerHTML=`<div class="row">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <img class="logo" src="../imagenes/logo.png" alt="logo empresa">
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
              <a href="../index.html" class="nav-link "> Inicio</a>
            </li>
            <li class="nav-item">
              <a href="../pages/paseos.html" class="nav-link ">Excursiones</a>
            </li>
            <li class="nav-item">
              <a href="../pages/servicios.html" class="nav-link ">Galerias</a>
            </li>
            <li class="nav-item">
              <a href="../pages/clientes.html" class="nav-link ">Conocenos</a>
            </li>
            <li class="nav-item">
              <a href="./pages/contacto.html" class="nav-link ">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
        <h2 class="tirulo2"> Excelente eleccion, nos vamos a ${nuevaCiudad.viaje}, Ademas elegiste el mejor mes, nos vamos en ${nuevomes}</h2>
        <div>
        <button><a href="../pages/paseos.html">Sumale diversion a tu viaje</a></button>
    `
}