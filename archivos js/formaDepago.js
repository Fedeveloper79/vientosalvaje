
const botonSeleccionarFormaDePago = document.getElementById(`botonseleccionarFormaDePago`)
const formaDePagoelegida = document.getElementById(`formaDePagoelegida`)
const botonResumen = document.getElementById(`botonResumen`)
const detalleViaje = document.getElementById(`detalleViaje`)
const inputContado = document.getElementById(`contado`)
const inputfinanciado = document.getElementById(`cuotas`)
const paseoElegido2 = JSON.parse(localStorage.getItem(`paseo`))
const nuevaCiudad = JSON.parse(localStorage.getItem(`ciudad`))
console.log(paseoElegido2)
console.log(nuevaCiudad)
const a = paseoElegido2.precio
const b = nuevaCiudad.pago1


function suma() {
    const resultado = paseoElegido2.precio + nuevaCiudad.pago1
    return resultado

}
const resultado = paseoElegido2.precio + nuevaCiudad.pago1
suma(paseoElegido2.precio, nuevaCiudad.pago1)

console.log(resultado)




botonSeleccionarFormaDePago.onclick = () => {

    if (inputContado.checked) {
      
        const resultadoContado = resultado
        Swal.fire({
            title: ` el costo de tu paseo es $${resultadoContado} `,
    
            icon: 'success',
            showConfirmButton: false,
            allowOutsideClick: false,
            footer: `<a class="btn btn-primary" href="../pages/resumen.html">LISTO, MIRA EL RESUMEN DE TU VIAJE</a>`
        });

    }

    else if (inputfinanciado.checked) {
        const resultadoFinanciado = resultado+15000
        Swal.fire({
            title: ` el costo de tu paseo es $${resultadoFinanciado} `,
    
            icon: 'success',
            showConfirmButton: false,
            allowOutsideClick: false,
            footer: `<a class="btn btn-primary" href="../pages/resumen.html">LISTO, MIRA EL RESUMEN DE TU VIAJE</a>`
        });
    }
   

  
}
