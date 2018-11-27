// About me button
// Finding thumbnail and define variable
var thumbnail = document.getElementById('thumbnail');

thumbnail.addEventListener('click',openDetails);

function openDetails(){
  var myDetails = document.getElementById('myDetails');
  myDetails.classList.toggle('openMyDetails');
}

// About the Hamburger
// Finding Humburger and define variable
var hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click',openMenu);
function openMenu(){
  hamburger.classList.toggle('crossHamburger');
  console.log('worked!');
}

