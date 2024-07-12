//Ejercicio 1
function exercise1() {
  const time1 = parseFloat(document.getElementById('time1').value);
  const time2 = parseFloat(document.getElementById('time2').value);
  const time3 = parseFloat(document.getElementById('time3').value);
  const time4 = parseFloat(document.getElementById('time4').value);
  const time5 = parseFloat(document.getElementById('time5').value);

  document.getElementById('result1').value = ((time1 + time2 + time3 + time4 + time5) / 5).toFixed(2)
}
