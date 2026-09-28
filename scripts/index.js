"use strict";
const litresButton = document.getElementById("switchToLitres");
if (litresButton) {
  litresButton.addEventListener("click", () => {
    window.location.href = "./Liters.html";
  });
}
const degreesButton = document.getElementById("switchToDegrees");
if (degreesButton) {
  degreesButton.addEventListener("click", () => {
    window.location.href = "./degrees.html";
  });
}
const volumeButton = document.getElementById("switchToVolume");
if (volumeButton) {
  volumeButton.addEventListener("click", () => {
    window.location.href = "./volume.html";
  });
}
