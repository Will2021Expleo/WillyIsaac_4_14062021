//VALIDATE FORMS

 //Regex for Name (first and last)
 const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð-]+$/;
 
 //Regex for email
 const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//Functions for control each input
//control input "first"
function validateFirstName(firstName, firstNameValue) {
    
    if (firstNameValue == "") { //if firstNameValue is empty,
        firstName.parentNode.setAttribute('data-error-visible', "true"); // write "data-error-visible = true" in the parent balise (formdata)
        firstName.parentNode.setAttribute('data-error', 'Veuillez renseigner un Prénom'); // error message
        return false; //return if input is not valide

    } else if (!firstNameValue.match(regexName)) { //if value firstNameValue is not included in the regex
        firstName.parentNode.setAttribute('data-error-visible', "true"); // write "data-error-visible = true" 
        firstName.parentNode.setAttribute('data-error', 'Les chiffres ne sont pas autorisés'); // error message
        return false; //return if input is not valide

    } else if (firstNameValue.length < 2) { //si la longueur du champ est inférieur à 2 caractères
        firstName.parentNode.setAttribute('data-error-visible', "true"); //j'écris data-error = vrai dans l'ID parent de first
        firstName.parentNode.setAttribute('data-error', 'Veuillez saisir au moins 2 caractères'); //j'affiche dans l'attribut "data-error" le message d'erreur
        //j'empêche l'action submit par défaut si le champ n'est pas correct
        return false;

    } else {
        firstName.parentNode.setAttribute('data-error-visible', "false"); //si le champ est valide j'écris "data-error-visible = false"
        firstName.parentNode.setAttribute('data-error', (''));  //j'affiche le champ input en vert
        return true;
    }
}

function validateLastName(lastName, lastNameValue) {
    //contrôle du champ "last"
    if (lastNameValue == "") {
        lastName.parentNode.setAttribute('data-error-visible', "true");
        lastName.parentNode.setAttribute('data-error', 'Veuillez renseigner un Nom');
        return false;

    } else if (!lastNameValue.match(regexName)) {
        lastName.parentNode.setAttribute('data-error-visible', "true");
        lastName.parentNode.setAttribute('data-error', 'Les chiffres ne sont pas autorisés');
        return false;

    } else if (lastNameValue.length < 2) {
        lastName.parentNode.setAttribute('data-error-visible', "true");
        lastName.parentNode.setAttribute('data-error', 'Veuillez saisir au moins 2 caractères');
        return false;
    }
    else {
        lastName.parentNode.setAttribute('data-error-visible', "false");
        lastName.parentNode.setAttribute('data-error', (''));
        return true;
    }
}

function validateEmail(email, emailValue) {
    //contrôle du champ email
    if (emailValue == "") {
        email.parentNode.setAttribute('data-error-visible', "true");
        email.parentNode.setAttribute('data-error', 'Veuillez renseigner une adresse mail valide');
        return false;
    }
    else if (!emailValue.match(regexEmail)) {
        email.parentNode.setAttribute('data-error-visible', "true");
        email.parentNode.setAttribute('data-error', 'Veuillez renseigner une adresse email valide');
        return false;
    }
    else {
        email.parentNode.setAttribute('data-error-visible', "false");
        email.parentNode.removeAttribute('data-error', (""));
        return true;
    }
}

function validateBirthDate(birthDate, birthDateValue) {
    //contrôle du champ birthdate
    if (birthDateValue == "") {
        birthDate.parentNode.setAttribute('data-error-visible', "true");
        birthDate.parentNode.setAttribute('data-error', 'Veuillez renseigner une date de naissance valide');
        return false;

    } else {
        birthDate.parentNode.setAttribute('data-error-visible', "false");
        birthDate.parentNode.removeAttribute('data-error', (""));
        return true;
    }
}

function validateQuantity(quantity, quantityValue) {
//controle du nombre de participation à des tournois GameOn
    if (quantityValue == "") {
        quantity.parentNode.setAttribute('data-error-visible', "true");
        quantity.parentNode.setAttribute('data-error', 'Veuillez sélectionner un nombre de tournois');
        return false;
    }
    else {
        quantity.parentNode.setAttribute('data-error-visible', "false");
        quantity.parentNode.setAttribute('data-error', (""));
        return true;
    }
}

function validateLocation(nameLocation, locationValue) {
// contrôle du champ de sélection d'une ville
    if (locationValue == null) { //si le champ Prénom est vide
        //console.log("La location n'est pas choisie")
        nameLocation.parentNode.setAttribute('data-error-visible', "true"); //j'écris data-error = vrai dans l'ID parent de first
        nameLocation.parentNode.setAttribute('data-error', 'Veuillez sélectionner une ville'); // j'affiche dans l'attribut "data-error" le message d'erreur
        //j'empêche l'action submit par défaut si le champ n'est pas correct
        return false;
    } else {
        //console.log("La location est bien choisie : ", locationValue)
        nameLocation.parentNode.setAttribute('data-error-visible', "false");
        nameLocation.parentNode.setAttribute('data-error', (""));
        return true;
    }
}

function validateConditionsOfUse(conditionsOfUse, conditionsOfUseValue) {
    // contrôle du champ de validation des conditions d'utilisation
    if (conditionsOfUseValue == null) { //si le champ Prénom est vide
        //console.log("La location n'est pas choisie")
        conditionsOfUse.parentNode.setAttribute('data-error-visible', "true"); //j'écris data-error = vrai dans l'ID parent de first
        conditionsOfUse.parentNode.setAttribute('data-error', "Veuillez accepter les conditions d'utilisation"); // j'affiche dans l'attribut "data-error" le message d'erreur
        //j'empêche l'action submit par défaut si le champ n'est pas correct
        return false;
    } else {
        //console.log("La location est bien choisie : ", locationValue)
        conditionsOfUse.parentNode.setAttribute('data-error-visible', "false");
        conditionsOfUse.parentNode.setAttribute('data-error', (""));
        return true;
    }
}

/* Validation du formulaire */

function validate() { //fonction 
    const isFormValidate = [];

        //déclaration des variables
        const firstName = document.getElementById('first');
        const lastName = document.getElementById('last');
        const email = document.getElementById('email');
        const birthDate = document.getElementById('birthdate');
        const quantity = document.getElementById('quantity');
        const nameLocation = document.getElementById("location1");
        const conditionsOfUse = document.getElementById('checkbox1')
        const confirmationValidation = document.getElementById("modal-confirm");

        const myFormData = new FormData(form)


        const firstNameValue = myFormData.get("first").trim();
        const lastNameValue = myFormData.get("last").trim();
        const emailValue = myFormData.get("email").trim();
        const birthDateValue = myFormData.get("birthdate").trim();
        const quantityValue = myFormData.get("quantity").trim();
        const locationValue = myFormData.get("location");
        const conditionsOfUseValue = myFormData.get("conditionsOfUse");

    // contrôle de tout les champs avant validation du formulaire
        isFormValidate.push(validateFirstName(firstName, firstNameValue));
        isFormValidate.push(validateLastName(lastName, lastNameValue));
        isFormValidate.push(validateEmail(email, emailValue));
        isFormValidate.push(validateBirthDate(birthDate, birthDateValue));
        isFormValidate.push(validateQuantity(quantity, quantityValue));
        isFormValidate.push(validateLocation(nameLocation, locationValue));
        isFormValidate.push(validateConditionsOfUse(conditionsOfUse, conditionsOfUseValue));

    // si tout les champ inclut false = champ correct   
    if (!isFormValidate.includes(false)) {
        form.style.display = "none"; // remove form
        confirmationValidation.style.display = "flex"; // show validation message
    }
}

/* Envoi du formulaire */
form.addEventListener("submit", function (e) {
    e.preventDefault();
    validate();
});


/* Fermeture de la modal de confirmation d'inscription */
document.querySelector("#btn-closed").addEventListener("click", function() {
    window.location.reload();
}); // close validation message
