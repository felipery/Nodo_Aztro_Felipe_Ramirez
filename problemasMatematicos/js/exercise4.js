// Exercise 1

function exercise4() {
  let peso = parseFloat(document.getElementById('input4-peso').value)
  let estatura = parseFloat(document.getElementById('input4-estatura').value)

  //IMC
  let resultadoIMC = parseFloat(peso / Math.pow(estatura, 2))
  document.getElementById('input4-imc').value = resultadoIMC.toFixed(2)

  //validación composición

  if (resultadoIMC < 18.5) {
    document.getElementById('input4-composicion').value = "Bajo Peso"
  } else if (resultadoIMC > 18.4 && resultadoIMC < 24.99) {
    document.getElementById('input4-composicion').value = "peso saludable"
  } else if (resultadoIMC > 24.99 && resultadoIMC < 30) {
    document.getElementById('input4-composicion').value = "Sobrepeso"
  } else {
    document.getElementById('input4-composicion').value = "Obesidad"
  }


}