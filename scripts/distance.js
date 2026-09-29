"use strict";
//Distance calculations
const milesToKm = 1.609344;
function getDistanceConverter(from, to) {
    const convertOne = (value) => from === "mi" && to === "km"
        ? value * milesToKm
        : value / milesToKm;
    return (values) => Array.isArray(values) ? values.map(convertOne) : convertOne(values);
}
const form = document.getElementById("distance-form");
const direction = document.getElementById("direction");
const distance = document.getElementById("distance");
const result = document.getElementById("result");
const error = document.getElementById("error");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    result.textContent = "";
    error.textContent = "";
    const parts = distance.value.split(",").map(part => part.trim());
    if (parts.some(part => part === "" || !Number.isFinite(Number(part)))) {
        error.textContent = "Enter a number or a list such as 0, 10, 100.";
        return;
    }
    const numbers = parts.map(Number);
    const values = numbers.length === 1 ? Number(parts[0]) : numbers;
    const from = direction.value === "milesToKm" ? "mi" : "km";
    const to = direction.value === "milesToKm" ? "km" : "mi";
    const converted = getDistanceConverter(from, to)(values);
    const formatted = Array.isArray(converted)
        ? converted.map(value => Number(value.toFixed(4))).join(", ")
        : Number(converted.toFixed(4));
    result.textContent = `${formatted} ${to}`;
});
