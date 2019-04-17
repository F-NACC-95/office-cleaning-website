let slideIndex = 0;
carousel();

function carousel() {
  let slideElements = document.getElementsByClassName("slides__image");
  for (let i = 0; i < slideElements.length; i++) {
    slideElements[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slideElements.length) {slideIndex = 1} 
  slideElements[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 8000);
}