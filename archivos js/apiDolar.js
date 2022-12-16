
const divDolar = document.getElementById(`divDolar`)
const cargarDolar=()=>{fetch(`https://criptoya.com/api/dolar`)
.then(response => response.json())
.then(({ solidario, oficial, blue, mep,}) => {
    console.log(solidario, oficial, blue, mep)

    divDolar.innerHTML = `
      <h2> Cotizaciones Dolar </h2>
      <p>solidario:$ ${solidario}, oficial:$ ${oficial},blue:$ ${blue}</p>
     
      


`

})

}

cargarDolar()

setInterval(()=>{
    cargarDolar()
},60000)





