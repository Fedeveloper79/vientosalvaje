

// // manipulando el DOM

const inputNombre = document.getElementById(`nombre`)
const inputApellido = document.getElementById(`apellido`)
const botonIngresar = document.getElementById(`ingresar`)
const mensaje = document.getElementById(`mensaje`)
const ingreso = document.getElementById(`ingreso`)
const adentro = document.getElementById(`adentro`)
const general = document.getElementById(`general`)
const saludo = document.getElementById(`saludo`)

botonIngresar.onclick = () => {

  localStorage.setItem(`nombre`, inputNombre.value)
  localStorage.setItem(`apellido`, inputApellido.value)
  console.log(localStorage.getItem(`password`))
  const nombreUsuario = localStorage.getItem(`nombre`)
  if (nombreUsuario) {
    (ingreso).remove(),
    (saludo).remove(),
    (botonIngresar).remove(),
   

Swal.fire({
  title: `BIENVENIDA/O  ${nombreUsuario} ELEJI ENTRE ESTAS OPCIONES!!`,
  text: `ESTAS A UN PAR DE CLICKS DEL VIAJE DE TUS SUEÑOS, VAMOS A ELEGIR EL DESTINO`,
  icon: 'success',
  showConfirmButton: false,
  allowOutsideClick: false,
  footer:`<a class="btn btn-primary" href="../pages/ciudad.html">OK</a>`
});



  }
}
