const number = document.getElementsByClassName('number');
const span = document.querySelector('span');
const submit = document.querySelector(".submit");
const rating = document.querySelector(".rating");
const thankYou = document.querySelector('.thank-you');

for (i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        span.textContent=this.textContent;
    })
}

submit.addEventListener('click', function() {
    rating.classList.add("off");
    rating.classList.remove("on");
    thankYou.classList.add("on");
    thankYou.classList.remove("off");
})