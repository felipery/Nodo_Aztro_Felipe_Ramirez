// radio correcto

function validaInputRadio(radio) {
  if (isNaN(radio)) {
    alert("Por favor ingresa números válidos.");
    return false;
  } else if (radio < 0) {
    alert("No es válido. Por favor ingresa números positivos.");
    return false;
  }
  return true;
}

// calcular área

function areaCircle() {
  let radioCircle = parseFloat(
    document.getElementById("circle-ratio-input").value
  );
  let resultAreaCircle = (Math.PI * Math.pow(radioCircle, 2)).toFixed(2);
  document.getElementById("circle-output-area").value = resultAreaCircle;
}

// calcular perímetro
function perimetroCircle() {
  let radioCircle = parseFloat(
    document.getElementById("circle-ratio-input").value
  );
  let resultPerimetroCircle = (2 * Math.PI * radioCircle).toFixed(2);
  document.getElementById("circle-output-perimeter").value =
    resultPerimetroCircle;
}

// recibo datos
function calcularCircle() {
  let radioCircle = parseFloat(
    document.getElementById("circle-ratio-input").value
  );
  if (validaInputRadio(radioCircle)) {
    areaCircle();
    perimetroCircle();
  } else {
    // Limpiar el input si la validación falla
    document.getElementById("circle-ratio-input").value = "";
    document.getElementById("circle-output-area").value = "";
    document.getElementById("circle-output-perimeter").value = "";
  }
}
