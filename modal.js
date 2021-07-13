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
function launchModal(event) {
event.preventDefault()
  modalbg.style.display = "block";

  
  modalbg.addEventListener("click", closeModal)//willy
  modalbg.querySelector('.close').addEventListener('click', closeModal)
  modalbg.querySelector('.content').addEventListener('click', stopPropagation)
}


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

//VALIDATION DES CHAMPS DU FORMULAIRE
const form = document.forms['reserve'];
form.addEventListener('submit', function (e) {
  let firstName = document.getElementById('first');
  let lastName = document.getElementById('last');
  let email = document.getElementById('email');
  let birthdate = document.getElementById('birthdate');
  let quantity = document.getElementById('quantity');
  
 

  let regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð-]+$/;
  let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  let firstNameValue = first.value.trim();
  let lastNameValue = last.value.trim();
  let emailValue = email.value.trim();
  let birthdateValue = birthdate.value.trim();
  let quantityValue = quantity.value.trim();


  //contrôle du champ "first"
  if (firstNameValue == "") { //si le champ Prénom est vide
    firstName.parentNode.setAttribute('data-error-visible', "true"); //j'écris data-error = vrai dans l'ID parent de first
    firstName.parentNode.setAttribute('data-error', 'Veuillez renseigner un Prénom'); // j'affiche dans l'attribut "data-error" le message d'erreur
    e.preventDefault(); //j'empêche l'action submit par défaut si le champ n'est pas correct

  }else if (!firstNameValue.match(regexName)) { //si le champ Prénom un caractère différent de la Regex
    firstName.parentNode.setAttribute('data-error-visible', "true"); //j'écris data-error = vrai dans l'ID parent de first
    firstName.parentNode.setAttribute('data-error', 'Les chiffres ne sont pas autorisés'); //j'affiche dans l'attribut "data-error" le message d'erreur
    e.preventDefault(); //j'empêche l'action submit par défaut si le champ n'est pas correct

  } else if (firstNameValue.length < 2) { //si la longueur du champ est inférieur à 2 caractères
    firstName.parentNode.setAttribute('data-error-visible', "true"); //j'écris data-error = vrai dans l'ID parent de first
    firstName.parentNode.setAttribute('data-error', 'Veuillez saisir au moins 2 caractères'); //j'affiche dans l'attribut "data-error" le message d'erreur
    e.preventDefault(); //j'empêche l'action submit par défaut si le champ n'est pas correct

  } else {
    firstName.parentNode.setAttribute('data-error-visible', "false");
    firstName.parentNode.setAttribute('data-error', (''));  
  }

  
//contrôle du champ "last"
  if (lastNameValue == "") {
    lastName.parentNode.setAttribute('data-error-visible', "true");
    lastName.parentNode.setAttribute('data-error', 'Veuillez renseigner un Nom');
    e.preventDefault();

  } else if (!lastNameValue.match(regexName)) {
    lastName.parentNode.setAttribute('data-error-visible', "true");
    lastName.parentNode.setAttribute('data-error', 'Les chiffres ne sont pas autorisés');
    e.preventDefault();
  } 
  else if (lastNameValue.length < 2) 
  {
    lastName.parentNode.setAttribute('data-error-visible', "true");
    lastName.parentNode.setAttribute('data-error', 'Veuillez saisir au moins 2 caractères');
    e.preventDefault();

  } 
  else 
  {
    lastName.parentNode.setAttribute('data-error-visible', "false");
    lastName.parentNode.setAttribute('data-error', (''));
  }



  //contrôle du champ email
  if (emailValue == "")
  {
    email.parentNode.setAttribute('data-error-visible', "true");
    email.parentNode.setAttribute('data-error', 'Veuillez renseigner une adresse mail valide');
    e.preventDefault();

  }
  else if (!emailValue.match(regexEmail))
  {
    email.parentNode.setAttribute('data-error-visible', "true");
    email.parentNode.setAttribute('data-error', 'Veuillez renseigner une adresse email valide');
    e.preventDefault();
  }
  else
  {
    email.parentNode.setAttribute('data-error-visible', "false");
    email.parentNode.removeAttribute('data-error', (""));
    
  }

  //contrôle du champ birthdate
  if (birthdateValue == "")
  {
    birthdate.parentNode.setAttribute('data-error-visible', "true");
    birthdate.parentNode.setAttribute('data-error', 'Veuillez renseigner une date de naissance valide');
    e.preventDefault();

  }else{
    birthdate.parentNode.setAttribute('data-error-visible', "false");
    birthdate.parentNode.removeAttribute('data-error', (""));
   
  }
  
  //controle du nombre de participation à des tournois GameOn
  if (quantityValue == "") {
    quantity.parentNode.setAttribute('data-error-visible', "true");
    quantity.parentNode.setAttribute('data-error', 'Veuillez sélectionner un nombre de tournois');
    e.preventDefault();
  } 
  else {
    quantity.parentNode.setAttribute('data-error-visible', "false");
    quantity.parentNode.removeAttribute('data-error', (""));
 
  }
  


function validCheckbox(e){
  e.preventDefault();
  var valid = false;
  
  if(document.getElementById('location1').checked){valid = true;}
  else if(document.getElementById('location2').checked){valid = true;}
  else if(document.getElementById('location3').checked){valid = true;}
  else if(document.getElementById('location4').checked){valid = true;}
  else if(document.getElementById('location5').checked){valid = true;}
  else if(document.getElementById('location6').checked){valid = true;}


  if (validCheckbox){
 alert("valide");
}else{
 alert("Veuillez choisir une Ville");
 return false;
}
}
   
 
  
});


