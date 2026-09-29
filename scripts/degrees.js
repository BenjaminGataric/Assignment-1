"use strict";
// Calculation Variables
const cToF = (celcius) => celcius * 1.8 + 32;
const fToC = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
// Document Variables
const tempResult = document.getElementById("degrees-result");
const tempValues = document.getElementById("degreesValues");
const selectedTemp = document.getElementById("direction");
const tempButton = document.getElementById("degreesCalc");
//Function to handle all conversions
const weightCalculation = () => {
    const selectedOptionId = selectedTemp.selectedOptions[0]?.id;
    const parts = tempValues.value.split(",").map((part) => part.trim());
    if (parts.some((part) => part === "" || !Number.isFinite(Number(part)))) {
        tempResult.textContent = "Enter a number or a list such as 10, 20.";
        return;
    }
    const degrees = parts.map(Number);
    // Handles the selection option in the form and displays either Pounds or Kilograms based on user choice
    if (selectedOptionId === "cToF") {
        const fahrenheit = degrees.map((temp) => cToF(temp));
        tempResult.textContent = `${fahrenheit.map((value) => value.toFixed(2)).join(", ")} ℉`;
    }
    else if (selectedOptionId === "fToC") {
        const celcius = degrees.map((temp) => fToC(temp));
        tempResult.textContent = `${celcius.map((value) => value.toFixed(2)).join(", ")} °C`;
    }
};
// Event listener to Convert Button
tempButton.form?.addEventListener("submit", (event) => {
    event.preventDefault();
    weightCalculation();
});
