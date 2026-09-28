"use strict";
const homeButton = document.getElementById("homeButton");
if (homeButton) {
    homeButton.addEventListener("click", () => {
        window.location.href = "/pages/index.html";
    });
}
