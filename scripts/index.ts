const degreesButton = document.getElementById(
  "switchToDegrees",
) as HTMLButtonElement;

if (degreesButton) {
  degreesButton.addEventListener("click", (): void => {
    window.location.href = "./degrees.html";
  });
}

const distanceButton = document.getElementById(
  "switchToKM",
) as HTMLButtonElement;

if (distanceButton) {
  distanceButton.addEventListener("click", (): void => {
    window.location.href = "./distance.html";
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
