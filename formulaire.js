//VALIDATION DES CHAMPS DU FORMULAIRE
// DOM Elements

//const form = document.getElementById("form")
/*
form.addEventListener('submit', function (e) {
    e.preventDefault();
    validate();
});*/
    //Variables
    const firstName = document.getElementById('first');
    const lastName = document.getElementById('last');
    const email = document.getElementById('email');
    const birthDate = document.getElementById('birthdate');
    const quantity = document.getElementById('quantity');
    const nameLocation = document.getElementById(".location1");
    const conditionsOfUse = document.getElementById('checkbox1')


    //liste des caractères autorisés pour le prénom, nom et l'adresse mail
    const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð-]+$/;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const myFormData = new FormData(form)


    const firstNameValue = myFormData.get("first").trim();
    const lastNameValue = myFormData.get("last").trim();
    const emailValue = myFormData.get("email").trim();
    const birthDateValue = myFormData.get("birthdate").trim();
    const quantityValue = myFormData.get("quantity").trim();
    const locationValue = myFormData.get("nameLocation");
    const conditionsOfUseValue = myFormData.get("conditionsOfUse");

    





function validateFirstName(firstName) {
    //contrôle du champ "first"
    if (firstNameValue == "") { //si le champ Prénom est vide
        firstName.parentNode.setAttribute('data-error-visible', "true"); //j'écris data-error = vrai dans l'ID parent de first
        firstName.parentNode.setAttribute('data-error', 'Veuillez renseigner un Prénom'); // j'affiche dans l'attribut "data-error" le message d'erreur
        //j'empêche l'action submit par défaut si le champ n'est pas correct

    } else if (!firstNameValue.match(regexName)) { //si le champ Prénom un caractère différent de la Regex
        firstName.parentNode.setAttribute('data-error-visible', "true"); //j'écris data-error = vrai dans l'ID parent de first
        firstName.parentNode.setAttribute('data-error', 'Les chiffres ne sont pas autorisés'); //j'affiche dans l'attribut "data-error" le message d'erreur
        //j'empêche l'action submit par défaut si le champ n'est pas correct

    } else if (firstNameValue.length < 2) { //si la longueur du champ est inférieur à 2 caractères
        firstName.parentNode.setAttribute('data-error-visible', "true"); //j'écris data-error = vrai dans l'ID parent de first
        firstName.parentNode.setAttribute('data-error', 'Veuillez saisir au moins 2 caractères'); //j'affiche dans l'attribut "data-error" le message d'erreur
        //j'empêche l'action submit par défaut si le champ n'est pas correct

    } else {
        firstName.parentNode.setAttribute('data-error-visible', "false"); //si le champ est valide j'écris "data-error-visible = false"
        firstName.parentNode.setAttribute('data-error', (''));  //j'affiche le champ input en vert
    }
}

function validateLastName(lastName) {
    //contrôle du champ "last"
    if (lastNameValue == "") {
        lastName.parentNode.setAttribute('data-error-visible', "true");
        lastName.parentNode.setAttribute('data-error', 'Veuillez renseigner un Nom');


    } else if (!lastNameValue.match(regexName)) {
        lastName.parentNode.setAttribute('data-error-visible', "true");
        lastName.parentNode.setAttribute('data-error', 'Les chiffres ne sont pas autorisés');

    }
    else if (lastNameValue.length < 2) {
        lastName.parentNode.setAttribute('data-error-visible', "true");
        lastName.parentNode.setAttribute('data-error', 'Veuillez saisir au moins 2 caractères');


    }
    else {
        lastName.parentNode.setAttribute('data-error-visible', "false");
        lastName.parentNode.setAttribute('data-error', (''));
    }
}

function validateEmail(email) {
    //contrôle du champ email
    if (emailValue == "") {
        email.parentNode.setAttribute('data-error-visible', "true");
        email.parentNode.setAttribute('data-error', 'Veuillez renseigner une adresse mail valide');


    }
    else if (!emailValue.match(regexEmail)) {
        email.parentNode.setAttribute('data-error-visible', "true");
        email.parentNode.setAttribute('data-error', 'Veuillez renseigner une adresse email valide');

    }
    else {
        email.parentNode.setAttribute('data-error-visible', "false");
        email.parentNode.removeAttribute('data-error', (""));

    }
}

function validateBirthDate(birthDate) {
    //contrôle du champ birthdate
    if (birthDateValue == "") {
        birthDate.parentNode.setAttribute('data-error-visible', "true");
        birthDate.parentNode.setAttribute('data-error', 'Veuillez renseigner une date de naissance valide');


    } else {
        birthDate.parentNode.setAttribute('data-error-visible', "false");
        birthDate.parentNode.removeAttribute('data-error', (""));

    }
}

function validateQuantity(quantity) {
//controle du nombre de participation à des tournois GameOn
    if (quantityValue == "") {
        quantity.parentNode.setAttribute('data-error-visible', "true");
        quantity.parentNode.setAttribute('data-error', 'Veuillez sélectionner un nombre de tournois');

    }
    else {
        quantity.parentNode.setAttribute('data-error-visible', "false");
        quantity.parentNode.setAttribute('data-error', (""));

    }
}

function validateLocation(nameLocation) {
   
// contrôle du champ de sélection d'une ville
    if (locationValue == null) { //si le champ Prénom est vide
        //console.log("La location n'est pas choisie")
        nameLocation.parentNode.setAttribute('data-error-visible', "true"); //j'écris data-error = vrai dans l'ID parent de first
        nameLocation.parentNode.setAttribute('data-error', 'Veuillez sélectionner une ville'); // j'affiche dans l'attribut "data-error" le message d'erreur
        //j'empêche l'action submit par défaut si le champ n'est pas correct
    } else {
        //console.log("La location est bien choisie : ", locationValue)
        nameLocation.parentNode.setAttribute('data-error-visible', "false");
        nameLocation.parentNode.setAttribute('data-error', (""));
    }
}

function validateConditionsOfUse(conditionsOfUse) {
    // contrôle du champ de validation des conditions d'utilisation
    if (conditionsOfUseValue == null) { //si le champ Prénom est vide
        //console.log("La location n'est pas choisie")
        conditionsOfUse.parentNode.setAttribute('data-error-visible', "true"); //j'écris data-error = vrai dans l'ID parent de first
        conditionsOfUse.parentNode.setAttribute('data-error', "Veuillez accepter les conditions d'utilisation"); // j'affiche dans l'attribut "data-error" le message d'erreur
        //j'empêche l'action submit par défaut si le champ n'est pas correct
    } else {
        //console.log("La location est bien choisie : ", locationValue)
        conditionsOfUse.parentNode.setAttribute('data-error-visible', "false");
        conditionsOfUse.parentNode.setAttribute('data-error', (""));
    }
}

/* Validation du formulaire */

function validate() { //fonction 
    const isFormValidate = [];

    isFormValidate.push(validateFirstName(firstName));
    isFormValidate.push(validateLastName(lastName));
    isFormValidate.push(validateEmail(email));
    isFormValidate.push(validateBirthDate(birthDate));
    isFormValidate.push(validateQuantity(quantity));
    isFormValidate.push(validateLocation(nameLocation));
    isFormValidate.push(validateConditionsOfUse(conditionsOfUse));

    if (!isFormValidate.includes(false)) {
        form.style.display = "none"; // remove form
        confirmationValidation.style.display = "flex"; // show validation message
    }
}


/* Envoi du formulaire */

form.addEventListener("submit", function (e) { // form sending
    e.preventDefault();
    validate();
});


/* Fermeture de la modal de confirmation d'inscription */

document.querySelector("#btn-closed").addEventListener("click", closeModal); // close validation message
