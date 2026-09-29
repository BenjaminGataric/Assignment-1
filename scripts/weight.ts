const kgToPounds = (kilograms: number): number => kilograms * 2.20462;
const poundsToKg = (pounds: number): number => pounds * 0.45359237;
const weightResult = document.getElementById(
  "weight-result",
) as HTMLParagraphElement;
const weightValues = document.getElementById(
  "weightValues",
) as HTMLInputElement;
const selectedWeight = document.getElementById(
  "direction",
) as HTMLSelectElement;
const weightButton = document.getElementById("weightCalc") as HTMLButtonElement;
const selectedKg: string = String(selectedWeight);
const weightCalculation = (): void => {
  const selectedOptionId = selectedWeight.selectedOptions[0]?.id;
  const inputValue = weightValues.value;
  const weight = Number(inputValue);

  if (inputValue === "" || !Number.isFinite(weight)) {
    weightResult.textContent = "Enter a valid weight.";
    return;
  }

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
