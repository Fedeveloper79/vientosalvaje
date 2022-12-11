
const botonSeleccionarFormaDePago = document.getElementById(`botonseleccionarFormaDePago`)
const inputContado = document.getElementById(`contado`)
const inputfinanciado = document.getElementById(`cuotas`)
const nuevopaseo = JSON.parse(localStorage.getItem(`paseo`))

botonSeleccionarFormaDePago.onclick = () => {
  
    if (inputContado.checked) {

        const formaDePago = nuevopaseo.contado
        alert(`el costo de tu paseo es ${formaDePago}`)
       
    }

    else if (inputfinanciado.checked){
        const formaDePago = nuevopaseo.financiado
        alert(`el costo de tu paseo es ${formaDePago}`)

    }
}


