var imageUrls = ["images/landuse_76.jpg", "images/landuse_06.jpg", "images/landuse_30.jpg"];

function preloadImages () {
  var i, image;
  for (i = 0; i < imageUrls.length; i++) {
    image = document.createElement("img");
    image.setAttribute("src", imageUrls[i]);
  }
}

function changeImage (e) {
  var url = imageUrls[e.target.value];
  var image = document.getElementById("slider-image");
  image.setAttribute("src", url);
}

window.onload = preloadImages;
document.getElementById("slider-input").addEventListener("input", changeImage);
