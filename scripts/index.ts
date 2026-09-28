const litresButton = document.getElementById(
  "switchToLitres",
) as HTMLButtonElement;

if (litresButton) {
  litresButton.addEventListener("click", (): void => {
    window.location.href = "./Liters.html";
  });
}

const degreesButton = document.getElementById(
  "switchToDegrees",
) as HTMLButtonElement;

if (degreesButton) {
  degreesButton.addEventListener("click", (): void => {
    window.location.href = "./degrees.html";
  });
}

const volumeButton = document.getElementById(
  "switchToVolume",
) as HTMLButtonElement;

if (volumeButton) {
  volumeButton.addEventListener("click", (): void => {
    window.location.href = "./volume.html";
  });
}
