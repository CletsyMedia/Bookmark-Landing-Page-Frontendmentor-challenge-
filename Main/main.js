/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector('header');
    window.onscroll = () =>{
    header.classList.toggle('scroll-header', window.scrollY > 0)
}
// Nav-active
let menuBars = document.querySelector(".menuBars");
let closeMenu = document.querySelector(".closeMenu");
let navMenu = document.querySelector(".nav");


menuBars.onclick=()=>{
  navMenu.classList.add("active-menu")
}
closeMenu.onclick=()=>{
  navMenu.classList.remove("active-menu")
}
/*=============== REMOVE MENU MOBILE ===============*/
const link = document.querySelectorAll(".link");
const linkAction =()=>{
  const navMenu = document.querySelector(".nav");

  navMenu.classList.remove("active-menu");
  
}
// short-code and preferred
 link.forEach(l => l.addEventListener('click', linkAction))

// long-code
// link.forEach(linkAll =>{
//   linkAll.addEventListener("click", ()=>{
//     linkAction();
//   })
// })





let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("feature-tab mix");
  let btnFilter = document.getElementsByClassName("btn-filter");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < btnFilter.length; i++) {
    btnFilter[i].className = btnFilter[i].className.replace(" active-filter", "");
  }
  slides[slideIndex-1].style.display = "flex";
  btnFilter[slideIndex-1].className += " active-filter";
}

// FAQ
const faq = document.querySelectorAll(".question-box");
faq.forEach(faq =>{
  faq.onclick=()=>{
    faq.classList.toggle("faq-active");
  }
})

// Validating contact email
let errorMessage = document.querySelector(".error");
let errorIcon = document.querySelector(".errorIcon");
let emailError = document.getElementById("emailInfo");
let successMsg = document.querySelector(".success")
validateEmail=()=>{
  let emailInfo = document.getElementById("emailInfo").value;
  if(emailInfo.length == 0){
    errorMessage.innerText = "Email can't be empty";
    errorMessage.classList.add("activeContact");
    emailError.style.border="2px solid hsl(0, 94%, 66%)"
    errorIcon.style.display="block";
    return false
  }
  if(!emailInfo.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    errorMessage.innerText = "Whoops, make sure it's an email";
    errorMessage.classList.add("activeContact");
    emailError.style.border="2px solid hsl(0, 94%, 66%)"
    errorMessage.style.backgroundColor="hsl(0, 94%, 66%)";
    errorIcon.style.display="block";
    successMsg.style.display="none";
    return false;
  }
    successMsg.style.display="block";
    errorIcon.style.display="none";
    errorMessage.innerText = "Email is valid, make your contact";
    errorMessage.classList.add("activeContact");
    errorMessage.style.backgroundColor="hsl(154, 59%, 51%)";
    emailError.style.border="2px solid hsl(154, 59%, 51%)"
    return true;
}
const formSubmit = document.getElementById("form");

formSubmit.addEventListener('submit', event =>{
    if(!validateEmail()){
        event.preventDefault();
        return false;
    }
});

/*=============== AOS SCROLL REVEAL ANIMATION ===============*/
AOS.init({
  offset: 400,
  duration: 1000,
  easing: 'ease-in-out'
});
