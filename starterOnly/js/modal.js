// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.getElementsByClassName("close")[0]; // Get class of closeBtn
const confirmation = document.getElementById("confirmation");
const confirmationBtn = document.getElementById("confirmationBtn");
const form = document.getElementById("form");

// Launch Modal Event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch Modal Form 
function launchModal() {
  modalbg.style.display = "block";
}
// Close Modal Form 
function closeModal() {
  modalbg.style.display = "none";
} 
closeForm.addEventListener("click", closeModal);

// Verif valid form 
let validFirstName = false;
let validLastName = false;
let validEmail = false;
let validBirthDate = false;
let validTournament = false;
let validLoca = false;
let validCheckBox = false;

// REGEX
const regexNumber = /^[0-9]+$/
const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
const regexBirth = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
const regexSpecialsCharacters = /[§!@#$%^&*().?":{}|<>]/;

// Vérif = firstName 
function verifFirstName() {
  const firstName = document.getElementById('firstName');
  const errorFirstName = document.getElementById('errorFirstName');
  if (regexSpecialsCharacters.test(firstName.value) == true || firstName.value == ' ' || firstName.value == null || firstName.value.length < 2) {
    errorFirstName.innerHTML = "Votre prénom est incorrect. Veuillez entrer au minimum 2 caractères.";
    return (validFirstName = false);
  } else {
    errorFirstName.style.display = 'none';
    return (validFirstName = true);
  }
}

// Vérif = lastName
function verifLastName() {
  const lastName = document.getElementById('lastName');
  const errorLastName = document.getElementById('errorLastName');
  if (regexSpecialsCharacters.test(lastName.value) == true || lastName.value == ' ' || lastName.value == null || lastName.value.length < 2) {
    errorLastName.innerHTML = "Votre nom est incorrect. Veuillez entrer au minimum 2 caractères.";
    return (validLastName = false);
  } else {
    errorLastName.style.display = 'none';
    return (validLastName = true);
  }
}

// Vérif = email
function verifEmail() {
  const email = document.getElementById('email');
  const errorEmail = document.getElementById('errorEmail');
  if (regexMail.test(email.value) == false || email.value == ' ' || email.value == null) {
    errorEmail.innerHTML = "Votre email est incorrect. Veuillez entrer un email valide.";
    return (validEmail = false);
  } else {
    errorEmail.style.display = 'none';
    return (validEmail = true);
  }
}
  
// Vérif = birthDate
function verifBirthDate() {
  const birth = document.getElementById('birth');
  const errorBirth = document.getElementById('errorBirth');
  if (regexSpecialsCharacters.test(birth.value) == true || regexBirth.test(birth.value) == false || birth.value == null) {
    errorBirth.innerHTML = "Votre date de naissance est incorrect. Veuillez entrer une date de naissance conforme.";
    return (validBirthDate = false);
  } else {
    errorBirth.style.display = 'none';
    return (validBirthDate = true);
  }
}

// Vérif = tournament
function verifTournament() {
  const howMuchTournament = document.getElementById('howMuchTournament')
  const errorTournament = document.getElementById('errorTournament');
  if (regexNumber.test(howMuchTournament.value) == false || howMuchTournament.value == null) {
    errorTournament.innerHTML = "Veuillez entrer uniquement des chiffres.";
    return (validTournament = false);
  } else {
    errorTournament.style.display = 'none';
    return (validTournament = true);
  }
}

// Vérif = localisation
function verifLoca() {
  const location1 = document.getElementById('location1');
  const location2 = document.getElementById('location2');
  const location3 = document.getElementById('location3');
  const location4 = document.getElementById('location4');
  const location5 = document.getElementById('location5');
  const location6 = document.getElementById('location6');
  const errorLoca = document.getElementById('errorLoca');
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    errorLoca.innerHTML = "Veuillez choisir une ville.";
    return (validLoca = false);
  } else {
    errorLoca.style.display = 'none';
    return (validLoca = true);
  }
}

// Vérif = checkBox
function verifCheck() {
  const checkValidation = document.getElementById('checkbox1');
  const errorCheckbox = document.getElementById('errorCheckbox');
  if (!checkValidation.checked) {
    errorCheckbox.innerHTML = "Veuillez lire et accepter les conditions d'utilisation.";
    return (validCheckBox = false);
  } else {
    errorCheckbox.style.display = 'none';
    return (validCheckBox = true);
  }
}

// Display none confirmation form 
confirmation.style.display = 'none';

// Function form valid with display none 
function formValid(e) {
  e.preventDefault();
  verifFirstName();
  verifLastName();
  verifEmail();
  verifBirthDate();
  verifTournament();
  verifLoca();
  verifCheck();
  

  if (validFirstName === true && validLastName === true && validEmail === true && validBirthDate === true && validTournament === true && validLoca === true && validCheckBox === true) {
    form.style.display = 'none'
    confirmation.style.display = 'block'
  }
}

// Call btn form 
form.addEventListener("submit", formValid);