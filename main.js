// Defining variables 

var thumbnail = document.getElementById('thumbnail');

thumbnail.addEventListener('click',openDetails);

function openDetails(){
  var myDetails = document.getElementById('myDetails');
  myDetails.classList.toggle('openMyDetails');
}
