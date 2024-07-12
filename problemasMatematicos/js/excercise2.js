// Ejercicio 2
function exercise2() {
  let base1 = parseFloat(document.getElementById("input2-base-1").value);
  let base2 = parseFloat(document.getElementById("input2-base-2").value);
  let altura = parseFloat(document.getElementById("input2-altura").value);
  let lado1 = parseFloat(document.getElementById("input2-lado1").value);
  let lado2 = parseFloat(document.getElementById("input2-lado2").value);

  // Área
  let area = (((base1 + base2) * altura) / 2).toFixed(2);
  document.getElementById("input2-area").value = area;

  // Litros
  document.getElementById("input2-litros").value = area * 1.5;

  // Cálculo perímetro
  document.getElementById("input2-perimetro").value = (
    base1 +
    base2 +
    lado1 +
    lado2
  ).toFixed(2);
}
