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




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal(e) {
  e.preventDefault()
  modalbg.style.display = "block";

  modalbg.addEventListener("click", closeModal);
  modalbg.querySelector(".close").addEventListener('click', closeModal);
  modalbg.querySelector(".content").addEventListener('click', stopPropagation);
}

// close modal
function closeModal(e) {
  if (modalbg === null) return
  e.preventDefault()
  modalbg.style.display = "none"

  modalbg.removeEventListener('click', closeModal);
  modalbg.querySelector(".close").removeEventListener("click", closeModal);
  modalbg.querySelector(".content").removeEventListener("click", stopPropagation);
}

const stopPropagation = function(e) {
  e.stopPropagation()
}

document.forms["reserve"].addEventListener("submit", function(e) {
  e.preventDefault()
  alert('Bravo! Inscription validée')
})
