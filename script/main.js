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



