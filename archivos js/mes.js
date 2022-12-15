



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
    const mesSeleccionadoJSON = JSON.stringify(mesSeleccionado)
    localStorage.setItem(`mes`, mesSeleccionadoJSON)
    const nuevomes = JSON.parse(localStorage.getItem(`mes`))
    console.log(nuevomes)


  }
  else if (inputDiciembre.checked) {
    const mesSeleccionado = nuevaCiudad.fecha2
    const mesSeleccionadoJSON = JSON.stringify(mesSeleccionado)
    localStorage.setItem(`mes`, mesSeleccionadoJSON)
    const nuevomes = JSON.parse(localStorage.getItem(`mes`))
    console.log(nuevomes)
  }
  else if (inputEnero.checked) {
    const mesSeleccionado = nuevaCiudad.fecha3
    const mesSeleccionadoJSON = JSON.stringify(mesSeleccionado)
    localStorage.setItem(`mes`, mesSeleccionadoJSON)
    const nuevomes = JSON.parse(localStorage.getItem(`mes`))
    console.log(nuevomes)
  }

  const nuevomes = JSON.parse(localStorage.getItem(`mes`))

  Swal.fire({
    title: ` Excelente eleccion, nos vamos a ${nuevaCiudad.viaje}, Ademas elegiste el mejor mes, nos vamos en ${nuevomes}!!`,
    text: `ESTAS A UN PAR DE CLICKS DEL VIAJE DE TUS SUEÑOS, VAMOS A ELEGIR EL DESTINO`,
    icon: 'success',
    showConfirmButton: false,
    allowOutsideClick: false,
    footer: `<a class="btn btn-primary" href="../pages/paseos.html">Sumale diversion a tu viaje</a>`
  });

  
}