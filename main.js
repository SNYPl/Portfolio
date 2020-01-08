let wrap= document.getElementById('wrapp');
let test = document.getElementById('toggle');
let closebtn1 = document.getElementById('btn1');
let closebtn2 = document.getElementById('btn2');
let closebtn3 = document.getElementById('btn3');
let navslide = document.getElementById('nav-background');
let fnd = document.querySelector('slidebackground');

let vnaxot= function () {

    for (i = 1; i <= 45; i++) {

        navslide.style.width = i++ + "%";
    }
};



let reverse = function () {
    if (navslide.className==="slidebackground") {
        navslide.style.animationDirection ="normal";

    }else {
        navslide.classList.toggle('slidebackground-close');
    }

};



wrap.addEventListener('click', function() {
    test.classList.toggle('hidden');
    closebtn1.classList.toggle('bt1');
    closebtn2.classList.toggle('bt2');
    closebtn3.classList.toggle('bt3');
    navslide.classList.toggle('slidebackground');



reverse();

});
