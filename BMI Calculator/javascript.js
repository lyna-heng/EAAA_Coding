// Event handler

function calculateBMI(e) {
  e.preventDefault();
  const result = document.getElementById("result_field");
  const weight = document.getElementById("weight_field");
  const height = document.getElementById("height_field");

  const bmi = Number(weight.value)/(Number(height.value)*Number(height.value));

  result.value = bmi.toFixed(2);
}

// Event listener
document.getElementById("calculation_form").addEventListener("submit", calculateBMI)