// About me button
// Finding thumbnail and define variable
var thumbnail = document.getElementById('thumbnail');

// Adding an event on my thumbnail
thumbnail.addEventListener('click',openDetails);

// Function showing my details
function openDetails(){
  var myDetails = document.getElementById('myDetails');
  myDetails.classList.toggle('openMyDetails');
}

// About the Hamburger
// Finding Humburger and define variable
var hamburger = document.getElementById('hamburger');

// Adding an event on the Hamburger Menu
hamburger.addEventListener('click',openMenu);

// Function opening the menu
function openMenu(){
  var mobMenu = document.getElementById('mobileMenu');
  hamburger.classList.toggle('crossHamburger');
  mobMenu.classList.toggle('openedMobileMenu');
}

// HOMEPAGE ANIMATION
