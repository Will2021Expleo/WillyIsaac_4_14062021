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
const closeModalBtn = document.querySelector(".close");
const form = document.getElementById("form")


// Element pour le message de validation
let confirmationValidation = document.querySelector("modal-confirm");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal(e) {
e.preventDefault()
  modalbg.style.display = "flex";
}

closeModalBtn.addEventListener("click", closeModal);

function closeModal(e) {
  modalbg.style.display = "none"
  form.style.display = "block"
  confirmationValidation.style.display = "none"
}

/*
  modalbg.addEventListener("click", closeModal)//willy
  modalbg.querySelector('.close').addEventListener('click', closeModal)
  modalbg.querySelector('.content').addEventListener('click', stopPropagation)



//close modal form : willy
function closeModal(event) {
  if (modalbg === null) return
  event.preventDefault()
  modalbg.style.display = "none";
  
  modalbg.removeEventListener("click", closeModal)//willy
  modalbg.querySelector('.close').removeEventListener('click', closeModal)
  modalbg.querySelector('.content').removeEventListener('click', stopPropagation)
 
}
//stop la propagation de l'évenement "closeModal" à l'ensemble de la fenêtre
const stopPropagation = function (event) {
  event.stopPropagation()
}


*/
