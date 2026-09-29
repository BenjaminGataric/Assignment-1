"use strict";
// Calculation Variables
const kgToPounds = (kilograms) => kilograms * 2.20462;
const poundsToKg = (pounds) => pounds * 0.45359237;
// Document Variables
const weightResult = document.getElementById("weight-result");
const weightValues = document.getElementById("weightValues");
const selectedWeight = document.getElementById("direction");
const weightButton = document.getElementById("weightCalc");
//Function to handle all conversions
const weightCalculation = () => {
  const selectedOptionId = selectedWeight.selectedOptions[0]?.id;
  const parts = weightValues.value.split(",").map((part) => part.trim());
  if (parts.some((part) => part === "" || !Number.isFinite(Number(part)))) {
    weightResult.textContent = "Enter a number or a list such as 10, 20.";
    return;
  }
  const weights = parts.map(Number);
  // Handles the selection option in the form and displays either Pounds or Kilograms based on user choice
  if (selectedOptionId === "kgToPounds") {
    const pounds = weights.map((weight) => kgToPounds(weight));
    weightResult.textContent = `${pounds.map((value) => value.toFixed(2)).join(", ")} Pounds`;
  } else if (selectedOptionId === "poundsToKg") {
    const kilograms = weights.map((weight) => poundsToKg(weight));
    weightResult.textContent = `${kilograms.map((value) => value.toFixed(2)).join(", ")} Kilograms`;
  }
};
// Event listener to Convert Button
weightButton.form?.addEventListener("submit", (event) => {
  event.preventDefault();
  weightCalculation();
});
