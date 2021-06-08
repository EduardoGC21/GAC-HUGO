function newImage(){
  var image= document.getElementById("myImage");
  if (image.src.match("image2")){
    image.src="images/School.jpg";
    } else {
    image.src= "images/partenon.jpg";
  }
}

function Welcome() {
  alert("Welcome to the Sapientia Philosophy Webpage!");
}
