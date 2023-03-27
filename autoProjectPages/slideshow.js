
let slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function addButton(slideNumber) {
  let newButton = document.createElement("button");
  newButton.id = `slide${slideNumber}`;
  newButton.innerText = slideNumber+1;
  newButton.addEventListener("click", () => {
    slideIndex = slideNumber;
    showDivs(slideIndex);
  })
  return newButton
  // create button
  // add id for specific slide
  // add event listener to navigate...?
}

function navigationButtons (){
  let slides = document.getElementsByClassName("slide");
  let navDiv = document.getElementById("slideshow_navigation");

  for (let i = 0; i < slides.length; i++) {
    let slideToAdd = addButton(i);
    navDiv.append(slideToAdd);
  }
}
navigationButtons();

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slide");
  if (n > x.length-1) {slideIndex=0};
  if (n < 0) {slideIndex = x.length-1};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex].style.display="block";
}