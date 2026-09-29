"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    const inputValue = weightValues.value;
    const weight = Number(inputValue);
    // Handles the selection option in the form and displays either Pounds or Kilograms based on user choice
    if (selectedOptionId === "kgToPounds") {
        const pounds = kgToPounds(weight);
        weightResult.textContent = `${pounds.toFixed(2)} Pounds`;
    }
    else if (selectedOptionId === "poundsToKg") {
        const kilograms = poundsToKg(weight);
        weightResult.textContent = `${kilograms.toFixed(2)} Kilograms`;
    }
};
// Event listener to Convert Button
weightButton.form?.addEventListener("submit", (event) => {
    event.preventDefault();
    weightCalculation();
});
//# sourceMappingURL=weight.js.map