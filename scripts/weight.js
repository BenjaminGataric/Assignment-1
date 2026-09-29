"use strict";
const kgToPounds = (kilograms) => kilograms * 2.20462;
const poundsToKg = (pounds) => pounds * 0.45359237;
const weightResult = document.getElementById("weight-result");
const weightValues = document.getElementById("weightValues");
const selectedWeight = document.getElementById("direction");
const weightButton = document.getElementById("weightCalc");
const selectedKg = String(selectedWeight);
const weightCalculation = () => {
  const selectedOptionId = selectedWeight.selectedOptions[0]?.id;
  const inputValue = weightValues.value;
  const weight = Number(inputValue);
  if (selectedOptionId === "kgToPounds") {
    const pounds = kgToPounds(weight);
    weightResult.textContent = `${pounds.toFixed(2)} Pounds`;
  } else if (selectedOptionId === "poundsToKg") {
    const kilograms = poundsToKg(weight);
    weightResult.textContent = `${kilograms.toFixed(2)} Kilograms`;
  }
};
weightButton.form?.addEventListener("submit", (event) => {
  event.preventDefault();
  weightCalculation();
});
