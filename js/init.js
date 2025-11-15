// ELEMENTI
const popup = document.getElementById("popup");
const overlay = document.getElementById("popupOverlay");

// APRI POPUP
function openPopup() {
  popup.classList.add("show");
  overlay.classList.add("show");
}

// CHIUDI POPUP
function closePopup() {
  popup.classList.remove("show");
  overlay.classList.remove("show");
}

// CHIUDI CLICCANDO FUORI
overlay.addEventListener("click", closePopup);

// ACQUISTA
function buy() {
  if (confirm("Sei sicuro di voler acquistare?")) {
    window.location.href = "https://www.vinted.it";
  }
}
