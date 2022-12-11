

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


    general.innerHTML = ` <div class="row">
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
              <a href="../index.html" class="nav-link "> Inicio</a>
            </li>
            <li class="nav-item">
              <a href="./pages/excursiones.html" class="nav-link ">Excursiones</a>
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
  <h1 id="saludoInicial">BIENVENIDA/O ${nombreUsuario} ELEJI ENTRE ESTAS OPCIONES</h1>
    <h2 id="saludoInicial2">ESTAS A UN PAR DE CLICKS DEL VIAJE DE TUS SUEÑOS, VAMOS A ELEGIR EL DESTINO</h2>
   
    <button id="botonElegirDestino" class="btn-primary"><a id="aaa"href="./pages/ciudad.html"> Elegir Destino</a></button>


   
  
    `

  }

}
