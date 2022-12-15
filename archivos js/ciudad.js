


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


const Salta = new destino(1, `Salta`, 36000, 52000, `Noviembre`, `Diciembre`, `Enero`,)
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
   

  }

  else if (inputJujuy.checked) {
    const ciudadElegida = Jujuy
    const ciudadElegidaJSON = JSON.stringify(ciudadElegida)
    localStorage.setItem(`ciudad`, ciudadElegidaJSON)
    const nuevaCiudad = JSON.parse(localStorage.getItem(`ciudad`))

  }

  else if (inputCatamarca.checked) {
    const ciudadElegida = Catamarca
    const ciudadElegidaJSON = JSON.stringify(ciudadElegida)
    localStorage.setItem(`ciudad`, ciudadElegidaJSON)
    const nuevaCiudad = JSON.parse(localStorage.getItem(`ciudad`))




  }
  Swal.fire({
    title: `Excelente eleccion, nos vamos a ${nuevaCiudad.viaje}, el costo de tu viaje es de $${nuevaCiudad.pago1} Ahora eleji el mes de tu paseo!!`,
    text: `ESTAS A UN PAR DE CLICKS DEL VIAJE DE TUS SUEÑOS, VAMOS A ELEGIR EL DESTINO`,
    icon: 'success',
    showConfirmButton: false,
    allowOutsideClick: false,
    footer: `<a class="btn btn-primary" href="../pages/mes.html">OK</a>`
  });
}



