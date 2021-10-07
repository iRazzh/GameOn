// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.getElementsByClassName("close")[0]; // Get class of closeBtn
const confirmation = document.getElementById("confirmation");
const confirmationBtn = document.getElementById("confirmationBtn");

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

confirmation.style.display = 'none';
confirmationBtn.style.display = 'none';

const form = document.getElementById("form");

let formIsOk = false;

// Form Security
form.addEventListener("submit", function(element) {
  element.preventDefault();

  // REGEX
  const regexNumber = /^[0-9]+$/
  const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
  const regexBirth = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  const regexSpecialsCharacters = /[§!@#$%^&*().?":{}|<>]/;
  
  // Get all ID from "form"
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const birth = document.getElementById('birth');
  const howMuchTournament = document.getElementById('howMuchTournament')
  const location1 = document.getElementById('location1');
  const location2 = document.getElementById('location2');
  const location3 = document.getElementById('location3');
  const location4 = document.getElementById('location4');
  const location5 = document.getElementById('location5');
  const location6 = document.getElementById('location6');
  const checkValidation = document.getElementById('checkbox1');
  
  // Get all ID for error from "form"
  const errorFirstName = document.getElementById('errorFirstName');
  const errorLastName = document.getElementById('errorLastName');
  const errorEmail = document.getElementById('errorEmail');
  const errorBirth = document.getElementById('errorBirth');
  const errorTournament = document.getElementById('errorTournament');
  const errorLoca = document.getElementById('errorLoca');
  const errorCheckbox = document.getElementById('errorCheckbox');

  // Vérif = firstName 
  if (regexSpecialsCharacters.test(firstName.value) == true || firstName.value == ' ' || firstName.value == null || firstName.value.length < 2) {
    errorFirstName.innerHTML = "Votre prénom est incorrect. Veuillez entrer au minimum 2 caractères.";
  } else {
    errorFirstName.style.display = 'none';
  }
  // Vérif = lastName
  if (regexSpecialsCharacters.test(lastName.value) == true || lastName.value == ' ' || lastName.value == null || lastName.value.length < 2) {
    errorLastName.innerHTML = "Votre nom est incorrect. Veuillez entrer au minimum 2 caractères.";
  } else {
    errorLastName.style.display = 'none';
  }
  // Vérif = email
  if (regexMail.test(email.value) == false || email.value == ' ' || email.value == null) {
    errorEmail.innerHTML = "Votre email est incorrect. Veuillez entrer un email valide.";
  } else {
    errorEmail.style.display = 'none';
  }
  // Vérif = birthDate
  if (regexSpecialsCharacters.test(birth.value) == true || regexBirth.test(birth.value) == false || birth.value == null) {
    errorBirth.innerHTML = "Votre date de naissance est incorrect. Veuillez entrer une date de naissance conforme.";
  } else {
    errorBirth.style.display = 'none';
  }
  // Vérif = tournament
  if (regexNumber.test(howMuchTournament.value) == false || howMuchTournament.value == null) {
    errorTournament.innerHTML = "Veuillez entrer uniquement des chiffres.";
  } else {
    errorTournament.style.display = 'none';
  }
  // Vérif = localisation
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    errorLoca.innerHTML = "Veuillez choisir une ville.";
  } else {
    errorLoca.style.display = 'none';
  }
  // Vérif = checkBox
  if (!checkValidation.checked) {
    errorCheckbox.innerHTML = "Veuillez lire et accepter les conditions d'utilisation.";
  } else {
    errorCheckbox.style.display = 'none';
  }
  
})  

