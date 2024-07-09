function selectOption(optionId) {
  const radio = document.getElementById(optionId);
  radio.checked = true;
}

function saveAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    console.log("respuesta: ", answer);
    // Aquí puedes guardar la respuesta en una variable o hacer lo que necesites con ella
  } else {
    alert("Select one option");
  }
}
