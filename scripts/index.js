"use strict";
const degreesButton = document.getElementById("switchToDegrees");
if (degreesButton) {
  degreesButton.addEventListener("click", () => {
    window.location.href = "./degrees.html";
  });
}
const distanceButton = document.getElementById("switchToKM");
if (distanceButton) {
  distanceButton.addEventListener("click", () => {
    window.location.href = "./distance.html";
  });
}
const volumeButton = document.getElementById("switchToVolume");
if (volumeButton) {
  volumeButton.addEventListener("click", () => {
    window.location.href = "./volume.html";
  });
}
