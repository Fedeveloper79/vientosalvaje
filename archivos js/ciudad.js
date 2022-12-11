


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


const Salta = new destino(1, `Salta`, 36000, 52000, `Noviembre`, `Diciembre`, `Enero`, )
const Jujuy = new destino(2, `Jujuy`, 42000, 60000, `Noviembre`, `Diciembre`, `Enero`)
const Catamarca = new destino(3, `Catamarca`, 48000, 270000, `Noviembre`, `Diciembre`, `Enero`)


const botonElegirCiudad = document.getElementById(`botonElegirCiudad`)
const ciudadEleccion = document.getElementById(`ciudadEleccion`)
const inputSalta = document.getElementById(`salta`)
const inputJujuy = document.getElementById(`jujuy`)
const inputCatamarca = document.getElementById(`catamarca`)
const generalPrueba = document.getElementById(`generalPrueba`)

botonElegirCiudad.onclick = () => {

     if (inputSalta.checked) {
        const ciudadElegida = Salta
        const ciudadElegidaJSON = JSON.stringify(ciudadElegida)
        localStorage.setItem(`ciudad`, ciudadElegidaJSON)
        const nuevaCiudad = JSON.parse(localStorage.getItem(`ciudad`))
        generalPrueba.innerHTML = `       
    
    <div class="row">
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
              <a href="../pages/excursiones.html" class="nav-link ">Excursiones</a>
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
        <h2 class="tirulo2"> Excelente eleccion, nos vamos a ${nuevaCiudad.viaje}, Ahora eleji el mes de tu paseo</h2>
        <div>
        <button><a href="../pages/mes.html">Elegi el mes ideal</a></button>
       
        `
    }

    else if (inputJujuy.checked) {
      const ciudadElegida = Jujuy
      const ciudadElegidaJSON = JSON.stringify(ciudadElegida)
      localStorage.setItem(`ciudad`, ciudadElegidaJSON)
      const nuevaCiudad = JSON.parse(localStorage.getItem(`ciudad`))
      generalPrueba.innerHTML = `       
  
  <div class="row">
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
            <a href="../pages/excursiones.html" class="nav-link ">Excursiones</a>
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
      <h2 class="tirulo2"> Excelente eleccion, nos vamos a ${nuevaCiudad.viaje}, Ahora eleji el mes de tu paseo</h2>
      <div>
      <button><a href="../pages/mes.html">Elegi el mes ideal</a></button>
     
      `
  }

  else if (inputCatamarca.checked) {
    const ciudadElegida = Catamarca
    const ciudadElegidaJSON = JSON.stringify(ciudadElegida)
    localStorage.setItem(`ciudad`, ciudadElegidaJSON)
    const nuevaCiudad = JSON.parse(localStorage.getItem(`ciudad`))
    generalPrueba.innerHTML = `       

<div class="row">
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
          <a href="../pages/excursiones.html" class="nav-link ">Excursiones</a>
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
    <h2 class="tirulo2"> Excelente eleccion, nos vamos a ${nuevaCiudad.viaje}, Ahora eleji el mes de tu paseo</h2>
    <div>
    
    <button><a href="../pages/mes.html">Elegi el mes ideal</a></button>

  
    `
}
}



