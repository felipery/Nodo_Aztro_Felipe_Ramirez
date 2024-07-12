// Ejercicio 3

function exercise3() {
  // Datos Pared
  let alturaPared = parseFloat(
    document.getElementById("input3-alturaPared").value
  );
  let anchoPared = parseFloat(
    document.getElementById("input3-anchoPared").value
  );

  // Datos ladrillo
  let alturaLadrillo = parseFloat(
    document.getElementById("input3-alturaLadrillo").value
  );
  let anchoLadrillo = parseFloat(
    document.getElementById("input3-anchoLadrillo").value
  );
  let mortero = parseFloat(document.getElementById("input3-mortero").value);

  //area pared
  let areaPared = alturaPared * anchoPared;
  document.getElementById("input3-areaPared").value = areaPared;

  //área ladrillos
  let areaLadrillo =
    ((alturaLadrillo + mortero) * (anchoLadrillo + mortero)) / 1000;
  document.getElementById("input3-areaLadrillo").value = areaLadrillo;

  // Total Ladrillos
  document.getElementById("input3-numeroLadrillos").value = Math.ceil(
    areaPared / areaLadrillo
  );
}
