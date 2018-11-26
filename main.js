// Defining variables 

var thumbnail = document.getElementById('thumbnail');

thumbnail.addEventListener('click',openDetails);

function openDetails(){
  var thubnailImg = document.getElementById('thumbnailImg');
  var myDetails = document.getElementById('myDetails');
  myDetails.classList.toggle('openMyDetails');
  thubnailImg.classList.toggle('addFocus');
}

