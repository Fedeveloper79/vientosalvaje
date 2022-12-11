
const botonSeleccionarFormaDePago = document.getElementById(`botonseleccionarFormaDePago`)
const formaDePagoelegida = document.getElementById(`formaDePagoelegida`)
const botonResumen = document.getElementById(`botonResumen`)
const detalleViaje = document.getElementById(`detalleViaje`)
const inputContado = document.getElementById(`contado`)
const inputfinanciado = document.getElementById(`cuotas`)
const nuevopaseo = JSON.parse(localStorage.getItem(`paseo`))

botonSeleccionarFormaDePago.onclick = () => {
  
    if (inputContado.checked) {

        const formaDePago = nuevopaseo.contado
        formaDePagoelegida.innerHTML=`<h1 >el costo de tu paseo es $${formaDePago} </h1>
        
        `
        botonResumen.innerHTML=`   <button id="resumen"><a href="../pages/resumen.html"> Mira el detalle de tu compra</a></button> 
        </div>   `
       
        detalleViaje.innerHTML = ` <h1 >nos vamos a ${nuevaCiudad.viaje}, el precio del viaje es de ${nuevaCiudad.pago1}, el mes de tu viaje es el idel, ${nuevomes}, y como sos un aventurero, vas a difrutar de las mejores excursiones, elegiste ${paseoelegido.detalle}, cuyo costo es de $${formaDePago}, ahora si, a Divertirse</h1>
        
        
        
        `


    }

    else if (inputfinanciado.checked){
        const formaDePago = nuevopaseo.financiado
        formaDePagoelegida.innerHTML=`<h1>el costo de tu paseo es $${formaDePago} </h1>`

    }
}


