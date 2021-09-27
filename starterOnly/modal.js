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
const closeForm = document.getElementsByClassName("close"); // Get class of closeBtn

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
closeForm[0].addEventListener("click", closeModal);


// Get all ID from "form"
const form = document.getElementById('form');
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

// Get all ID for error from "form"
const errorFirstName = document.getElementById('errorFirstName');
const errorLastName = document.getElementById('errorLastName');
const errorEmail = document.getElementById('errorEmail');
const errorBirth = document.getElementById('errorBirth');
const errorTournament = document.getElementById('errorTournament');
const errorLoca = document.getElementById('errorLoca');
const errorCheckbox = document.getElementById('errorCheckbox');