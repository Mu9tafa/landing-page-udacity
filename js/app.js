/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
window.addEventListener("DOMContentLoaded", () => {




/**
 * Define Global Variables
 *
*/
var bars = document.querySelector(".menu-bars");
var ul = document.querySelector("ul");
var sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
bars.onclick = function (e) {
    $("ul").slideToggle(750);
 }
 window.onresize = function() {
     if(window.innerWidth > 890) {
         ul.style.display = "block";
     } else {
         ul.style.display = "none";
     }
 }


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
var UI = "";
sections.forEach(section => {
    UI+=`<li><a class="menu__link" data-link="${section.getAttribute("id")}">${section.getAttribute("data-nav")}</a></li>`;
})
ul.innerHTML = UI;



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
var links = document.querySelectorAll(".menu__link");

links.forEach(link => {
    link.addEventListener("click", () => {
        var element = document.getElementById(link.getAttribute("data-link"));
        element.scrollIntoView({
            behavior: "smooth",
            block: "center",
        })
    })
})

// var home = document.querySelector(".home");
// home.onclick = () => {
//     window.scrollTo({
//         behavior:"smooth",
//         top:0,
//     })
// }


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

let option = {
    root: null,
    rootMargin:"-260px",
    threshold: 0.11
}

let observer = new IntersectionObserver(beTouching, option);
sections.forEach(elem => {
    observer.observe(elem);
})
function beTouching(entries) {
    entries.forEach(entry => {
        var x = document.querySelector(`[data-link=${entry.target.id}]`);
        if(entry.isIntersecting) {
            if(entry.target.id !== "home") {
                entry.target.classList.add("your-active-class");
            }
            x.classList.add("active");
        } else {
            entry.target.classList.remove("your-active-class");
            x.classList.remove("active");
        }
    })
}

})
