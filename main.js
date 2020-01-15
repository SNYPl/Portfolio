let wrap= document.getElementById('wrapp');
let toggle = document.getElementById('toggle');
let closebtn1 = document.getElementById('btn1');
let closebtn2 = document.getElementById('btn2');
let closebtn3 = document.getElementById('btn3');
let navslide = document.getElementById('nav-background');
let scslide = document.getElementById("secondSlide");
let link = document.querySelector("#slidecontent");
let contact = document.getElementById('contactpg');
let contactopen = document.getElementById('slidecontentopen');


let reverse = function () {
    if (navslide.className==="slidebackground" && scslide.className==="slidebackground-up") {
        navslide.style.animationDirection ="normal";

    }else {
        navslide.classList.toggle('slidebackground-close');
        scslide.classList.toggle('slidebackgroundup-close');

    }

};


wrap.addEventListener('click', function() {
    toggle.classList.toggle('hidden');
    closebtn1.classList.toggle('bt1');
    closebtn2.classList.toggle('bt2');
    closebtn3.classList.toggle('bt3');
    navslide.classList.toggle('slidebackground');
    scslide.classList.toggle('slidebackground-up');
    link.classList.toggle('disabl');
reverse();
});



contact.addEventListener("click", function(event) {
    contactopen.classList.toggle('visib');
    contact.classList.toggle('colorchange');
    event.preventDefault();
});



