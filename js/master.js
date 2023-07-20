const navE1=document.querySelector(".navbar-expand-lg");
window.addEventListener("scroll",function(){window.scrollY>=50?navE1.classList.add("navbar-scrolled"):
window.scrollY<50&&navE1.classList.remove("navbar-scrolled")});
const switcherlis=document.querySelectorAll(".switcher li"),imgs=Array.from(document.images);
function removeActive(){switcherlis.forEach(e=>{e.classList.remove("active"),
this.classList.add("active")})}function manageImgs(){imgs.forEach(e=>{e.style.display="none"}),
document.querySelectorAll(this.dataset.cat).forEach(e=>{e.style.display="block"})}
switcherlis.forEach(e=>{e.addEventListener("click",removeActive),e.addEventListener("click",manageImgs)});
const form=document.querySelector("#form"),nameField=document.querySelector(".name-field"),
nameInput=document.querySelector("#name"),emailField=document.querySelector(".email-field"),
emailInput=document.querySelector("#email"),subjectField=document.querySelector(".subject-field"),
subjectInput=document.querySelector("#subject"),messageField=document.querySelector(".message-field"),
messageInput=document.querySelector("#message"),emailPattarn=
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function checkEmail(){if(!emailInput.value.match(emailPattarn))return emailField.classList.add("invalid");
emailField.classList.remove("invalid")}function entName(){if(""===nameInput.value||null==nameInput.value)return
nameField.classList.add("invalid");nameField.classList.remove("invalid")}function entSubject()
{if(subjectInput.value.length<=12)return subjectField.classList.add("invalid");
subjectField.classList.remove("invalid")}function entMessage(){if(messageInput.value.length<=24)
return messageField.classList.add("invalid");messageField.classList.remove("invalid")}form.addEventListener("submit",e=>{e.preventDefault(),checkEmail(),entName(),entSubject(),entMessage(),emailInput.addEventListener("keyup",checkEmail),nameInput.addEventListener("keyup",entName),subjectInput.addEventListener("keyup",entSubject),messageInput.addEventListener("keyup",entMessage),emailField.classList.contains("invalid")||nameField.classList.contains("invalid")||subjectField.classList.contains("invalid")||messageField.classList.contains("invalid")||(location.href=form.getAttribute("action"))});var swiper=new Swiper(".mySwiper",{slidesPerView:3,spaceBetween:30,loop:!0,navigation:!1,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:1200},breakpoints:{0:{slidesPerView:1,spaceBetween:20},520:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:20}}});