

//escursiones

let botonSeleccionar = document.getElementById(`seleccionarexcursion`)
botonSeleccionar.addEventListener(`click`, seleccionarExcursion)

const excursionElegida = document.getElementById(`excursionelegida`)
const excursiones = document.getElementById(`excursiones`)



function seleccionarExcursion() {

    let inputiruya = document.getElementById(`iruya`)
    let inputpurma = document.getElementById(`purma`)
    let inputmonta = document.getElementById(`monta`)
    let inputhorno = document.getElementById(`horno`)


    if (inputiruya.checked) {
        const paseoelegido = iruya
        const paseoelegidoJSON = JSON.stringify( paseoelegido )
        localStorage.setItem(`paseo`, paseoelegidoJSON)
        const paseoElegido2 = JSON.parse(localStorage.getItem(`paseo`))

    } else if (inputpurma.checked) {
        const paseoelegido = purmamarca
        const paseoelegidoJSON = JSON.stringify( paseoelegido )
        localStorage.setItem(`paseo`, paseoelegidoJSON)
        const paseoElegido2 = JSON.parse(localStorage.getItem(`paseo`))
    }
    else if (inputmonta.checked) {
        const paseoelegido = cerro7Colores
        const paseoelegidoJSON = JSON.stringify( paseoelegido )
        localStorage.setItem(`paseo`, paseoelegidoJSON)
        const paseoElegido2 = JSON.parse(localStorage.getItem(`paseo`))
    }
    else if (inputhorno.checked) {
        const paseoelegido = hornocal
        const paseoelegidoJSON = JSON.stringify( paseoelegido )
        localStorage.setItem(`paseo`, paseoelegidoJSON)
        const paseoElegido2 = JSON.parse(localStorage.getItem(`paseo`))
    }

    const paseoElegido2 = JSON.parse(localStorage.getItem(`paseo`))
    Swal.fire({
        title: ` Excelente eleccion, nos vamos a ${paseoElegido2.detalle}, ahora eleji la forma de pago de tu viaje`,
        text: `ESTAS A UN PAR DE CLICKS DEL VIAJE DE TUS SUEÑOS, VAMOS A ELEGIR EL DESTINO`,
        icon: 'success',
        showConfirmButton: false,
        allowOutsideClick: false,
        footer: `<a class="btn btn-primary" href="../pages/formaDePago.html">Elegi la forma de pago mas conveniente para vos</a>`
      });
    
}




class escursion {
    constructor(id, detalle, tiempo, contado, financiado) {
        this.id = id
        this.detalle = detalle
        this.tiempo = tiempo
        this.contado = contado
        this.financiado = financiado
    }
}

const escursiones = []


const cerro7Colores = new escursion(1, `cerro 7 colores`, `medio dia`, 4800, 7500)
escursiones.push(cerro7Colores)
const hornocal = new escursion(2, `Hornocal`, `dia entero`, 9500, 14500)
escursiones.push(hornocal)
const purmamarca = new escursion(3, `Purmamarca`, `medio dia`, 5220, 8300)
escursiones.push(purmamarca)
const iruya = new escursion(4, `Iruya`, `dia entero`, 14500, 18600
)
escursiones.push(iruya)

console.log(escursiones)



