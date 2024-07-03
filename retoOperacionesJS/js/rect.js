// Valida que los números ingresados no sean negativos o vacío
function validarInputs(base, altura) {
  if (isNaN(base) || isNaN(altura)) {
    alert("Por favor ingresa números válidos.");
    return false;
  } else if (base < 0 || altura < 0) {
    alert("No es válido. Por favor ingresa números positivos.");
    return false;
  }
  return true;
}

// Función para calcular el área del rectángulo
function areaRect(b, a) {
  let resultAreaRect = b * a;
  document.getElementById("rectangle-output-area").value = resultAreaRect;
}

// Función para calcular el perímetro del rectágulo
function perimetroRect(b, a) {
  let resultPerimetroRect = 2 * (b + a);
  document.getElementById("rectangle-output-perimeter").value =
    resultPerimetroRect;
}

// Función para calcular la diagonal del rectágulo
function diagonalRect(b, a) {
  let resultDiagonal = Math.sqrt(Math.pow(b, 2) + Math.pow(a, 2));
  document.getElementById("rectangle-output-diagonal").value =
    resultDiagonal.toFixed(2);
}

// Funcion para calcular área, perímetro y diagonal del rectángulo
function calcularAreaYPerimetro() {
  let baseRect = parseFloat(
    document.getElementById("rectangle-base-input").value
  );
  let alturaRect = parseFloat(
    document.getElementById("rectangle-height-input").value
  );
  if (validarInputs(baseRect, alturaRect)) {
    areaRect(baseRect, alturaRect);
    perimetroRect(baseRect, alturaRect);
    diagonalRect(baseRect, alturaRect);
  } else {
    // Limpiar los inputs si la validación falla
    document.getElementById("rectangle-base-input").value = "";
    document.getElementById("rectangle-height-input").value = "";
  }
}
