const kgToPounds = (kilograms: number): number => kilograms * 2.20462;
const poundsToKg = (pounds: number): number => pounds * 0.45359237;

const weightInput = document.getElementById("weightValues") as HTMLInputElement;
