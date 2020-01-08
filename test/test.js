let closebtn1 = document.getElementById('test');



let dedac = function () {
    if (closebtn1.className==="vnaxot") {
        closebtn1.style.animationDirection = "normal";
    } else {

        closebtn1.classList.toggle('aba');

    }


};

closebtn1.addEventListener('click', function() {
    closebtn1.classList.toggle('vnaxot');

dedac ();
});