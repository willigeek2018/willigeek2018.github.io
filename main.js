// About me button
// Finding thumbnail and define variable
var thumbnail = document.getElementById('thumbnail');

thumbnail.addEventListener('click',openDetails);

function openDetails(){
  var thumbnailImg = document.getElementById('thumbnailImg');
  var myDetails = document.getElementById('myDetails');
  myDetails.classList.toggle('openMyDetails');
}

