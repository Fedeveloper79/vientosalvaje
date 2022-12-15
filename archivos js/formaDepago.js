
const botonSeleccionarFormaDePago = document.getElementById(`botonseleccionarFormaDePago`)
const formaDePagoelegida = document.getElementById(`formaDePagoelegida`)
const botonResumen = document.getElementById(`botonResumen`)
const detalleViaje = document.getElementById(`detalleViaje`)
const inputContado = document.getElementById(`contado`)
const inputfinanciado = document.getElementById(`cuotas`)
const paseoElegido2 = JSON.parse(localStorage.getItem(`paseo`))

botonSeleccionarFormaDePago.onclick = () => {
  
    if (inputContado.checked) {

        const formaDePago = paseoElegido2.contado             


    }

    else if (inputfinanciado.checked){
        const formaDePago = paseoElegido2.financiado
       
    }
    const formaDePago = paseoElegido2.financiado

    Swal.fire({
        title: ` el costo de tu paseo es $${formaDePago} `,
        
        icon: 'success',
        showConfirmButton: false,
        allowOutsideClick: false,
        footer: `<a class="btn btn-primary" href="../pages/resumen.html">LISTO, MIRA EL RESUMEN DE TU VIAJE</a>`
      });
}


