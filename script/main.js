// ######  for burger menu

const burgerMenu = document.getElementById("burgerMenu");
const burgerClose = document.getElementById("burgerClose");
const burgerOpen = document.getElementById("burgerOpen");

burgerOpen.addEventListener("click", function () {
  burgerMenu.classList.add("active");
});
burgerClose.addEventListener("click", function () {
  burgerMenu.classList.remove("active");
});

// ######## for Cookies

// Get elements
const cookiesBanner = document.getElementById("cookiesBanner");
const acceptBtn = document.getElementById("acceptCookies");
const declineBtn = document.getElementById("declineCookies");
const closeBanner = document.getElementById("closeBanner");

// When the "Accept Cookies" button is clicked
acceptBtn.addEventListener("click", () => {
    console.log("Cookies Accepted!");
  cookiesBanner.style.display = "none";
});

// When the "Decline Cookies" button is clicked
declineBtn.addEventListener("click", () => {
  console.log("Cookies Declined!");
  cookiesBanner.style.display = "none";

});

// When the "Close" button is clicked
closeBanner.addEventListener("click", () => {
  cookiesBanner.style.display = "none";
});




const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("popupForm");

const popupSuccess = document.getElementById('popupSuccess');


// Display the modal when the button is clicked
function openModal() {
  modal.style.display = "flex";
};

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicking outside the content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// Get the form and elements
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission temporarily for field validation

  // Check fields
  let isValid = true;

  const requiredText = document.getElementById('requiredText');

  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (nameInput.value.trim() === '') {
    nameError.style.display = 'block'; // Show error message
    requiredText.style.display = 'block';
    nameInput.style.borderColor = 'red';

    isValid = false;
  } else {
    nameError.style.display = 'none'; // Hide error message
  }


  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  if (emailInput.value.trim() === '') {
    emailError.style.display = 'block';
    requiredText.style.display = 'block';
    emailInput.style.borderColor = 'red';
    isValid = false;
  } else {
    emailError.style.display = 'none';
  }

  const phoneInput = document.getElementById('phoneNumber');
  const phoneBorderInput = document.getElementsByClassName('phone-input')[0];
  console.log(phoneBorderInput);
  const phoneError = document.getElementById('phoneError');
  if (phoneInput.value.trim() === '') {
    phoneError.style.display = 'block';
    requiredText.style.display = 'block';
    phoneBorderInput.style.borderColor = 'red';

    isValid = false;
  } else {
    phoneError.style.display = 'none';
  }

  // If all fields are valid, submit the form
  if (isValid) {
    modal.style.display = "none";
    popupSuccess.style.display = "flex";
  }
});


// Country flags list with images
const countryFlags = {
  '+1': './images/flags/us.png',    // United States
  '+44': './images/flags/uk.png',   // United Kingdom
  '+91': './images/flags/in.png',   // India
  '+7': './images/flags/ru.png',    // Russia
  '+33': './images/flags/fr.png',   // France
  '+49': './images/flags/de.png'    // Germany
};

// Get elements
const phoneNumberInput = document.getElementById('phoneNumber');
const countryFlag = document.getElementById('countryFlag');

// Check country code while typing
phoneNumberInput.addEventListener('input', () => {
  const value = phoneNumberInput.value.trim(); // Remove spaces

  // Search for country code
  let matchedFlag = './images/flags/us.png'; // Default image
  for (const [code, flag] of Object.entries(countryFlags)) {
    if (value.startsWith(code)) {
      matchedFlag = flag;
      break;
    }
  }

  // Update flag image
  countryFlag.src = matchedFlag;
});


// popup success

function closeSuccess() {
  popupSuccess.style.display = 'none';
}