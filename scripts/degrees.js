// Return an arrow function that converts one number or an array of numbers.
function getConverter(fromUnit, toUnit) {
  let convertOne;

  if (fromUnit === "C" && toUnit === "F") {
    convertOne = value => value * 9 / 5 + 32;
  } else if (fromUnit === "F" && toUnit === "C") {
    convertOne = value => (value - 32) * 5 / 9;
  } else {
    throw new Error("Unsupported units.");
  }

  return values => Array.isArray(values)
    ? values.map(convertOne)
    : convertOne(values);
}

// Read one number or a comma-separated list from the form.
function readValues(text) {
  const parts = text.split(",").map(part => part.trim());

  if (parts.some(part => part === "" || !Number.isFinite(Number(part)))) {
    throw new Error("Enter a number or a list such as 0, 25, 100.");
  }

  const numbers = parts.map(part => Number(part));
  return numbers.length === 1 ? numbers[0] : numbers;
}

// Handle the form and show the converted temperature(s).
document.getElementById("temperature-form").addEventListener("submit", event => {
  event.preventDefault();

  const result = document.getElementById("result");
  const error = document.getElementById("error");
  result.textContent = "";
  error.textContent = "";

  try {
    const direction = document.getElementById("direction").value.split("-");
    const input = readValues(document.getElementById("values").value);
    const converted = getConverter(direction[0], direction[1])(input);
    const format = value => Number(value.toFixed(4));

    result.textContent = Array.isArray(converted)
      ? converted.map(format).join(", ") + " °" + direction[1]
      : format(converted) + " °" + direction[1];
  } catch (problem) {
    error.textContent = problem.message;
  }
});