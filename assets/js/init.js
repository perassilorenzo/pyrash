const popup = document.getElementById("popup");
const overlay = document.getElementById("popupOverlay");

function openPopup() {
  popup.classList.add("show");
  overlay.classList.add("show");
}

function closePopup() {
  popup.classList.remove("show");
  overlay.classList.remove("show");
}

// Chiudi cliccando fuori
overlay.addEventListener("click", closePopup);

function buy() {
  if (confirm("Sei sicuro di voler acquistare?")) {
    window.location.href = "https://www.vinted.it";
  }
}