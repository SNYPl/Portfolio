let wrap= document.getElementById('wrapp');
let test = document.getElementById('toggle');
let closebtn1 = document.getElementById('btn1');
let closebtn2 = document.getElementById('btn2');
let closebtn3 = document.getElementById('btn3');
let navslide = document.getElementById('nav-background');

let vnaxot= function () {
   setInterval(function () {
    for (i = 1; i <= 45; i++) {

        navslide.style.width = i++ + "%";
    }
}, 500);
};

wrap.addEventListener('click', function() {
    test.classList.toggle('hidden');
    closebtn1.classList.toggle('bt1');
    closebtn2.classList.toggle('bt2');
    closebtn3.classList.toggle('bt3');
    navslide.classList.toggle('slidebackground');
vnaxot();
    // setInterval(vnaxot, 500);
});
