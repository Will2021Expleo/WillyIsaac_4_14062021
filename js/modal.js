function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close"); //pour la fermeture du modal//
const form = document.getElementById("form"); //pour la gestion du formulaire//


// Element pour le message de validation
let confirmationValidation = document.querySelector(".modal-confirm");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form, on crée une fonction launchModal
function launchModal(e) {
e.preventDefault() //empêche l'action par défaut du formulaire//
  modalbg.style.display = "flex";
}

closeModalBtn.addEventListener("click", closeModal);

// close modal form, on crée une fonction closeModal
function closeModal(e) {
  modalbg.style.display = "none"
  form.style.display = "block"
  confirmationValidation.style.display = "none"
}
//à la fermeture du modal on désactive le block et on affiche pas le message de validation

document.querySelector(".close").addEventListener("click", function() {
  window.location.reload();
});

//a la fermeture du Modal avec le bouton close on recharge la page