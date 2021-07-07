window.onload = function () {
    const slides = document.querySelectorAll('.treatment_step_carousel_element');
    slides[0].classList.add('activeSlide');
};

jQuery(document).ready(function ($) {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slides = document.querySelectorAll('.treatment_step_carousel_element');
    const numberOfSlides = slides.length;

    let slideNumber = 0;

    // Next Button
    nextBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("activeSlide");
        });

        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("activeSlide");
        clearInterval(playSlider);
        repeater();
        reset_animation();
    });

    // Prev Button
    prevBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("activeSlide");
        });

        slideNumber--;

        if (slideNumber < 0) {
            slideNumber = numberOfSlides - 1;
        }

        slides[slideNumber].classList.add("activeSlide");
        clearInterval(playSlider);
        repeater();
        reset_animation();

    });

    //image slider autoplay
    let playSlider;

    let repeater = () => {
        playSlider = setInterval(function () {
            slides.forEach((slide) => {
                slide.classList.remove("activeSlide");
            });

            slideNumber++;

            if (slideNumber > (numberOfSlides - 1)) {
                slideNumber = 0;
            }

            slides[slideNumber].classList.add("activeSlide");
            reset_animation();
        }, 7000);
    }
    repeater();

    function reset_animation() {
        document.querySelector('animate').beginElement();
    }
});