const element = document.getElementById("navDrop");
const navBlock = document.getElementById("navBlock")
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function() {
  if (element.style.display === "none") {
    navBlock.style.display = "flex";
    element.style.display = "flex";
  } else {
    navBlock.style.display = "none";
    element.style.display = "none";
  }
});