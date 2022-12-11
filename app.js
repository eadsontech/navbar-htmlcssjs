// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    navLinks.classList.toggle("show-links");
})

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();