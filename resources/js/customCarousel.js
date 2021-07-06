jQuery(document).ready(function ($) {
    let slideIndex = 0;
    showSlides();
    let slides, dots;

    function showSlides() {
        console.log("top of showSlides")
        let i;
        slides = $(".treatment_step_carousel_element");
        dots = $(".dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        // Controls time on each slide 
        setTimeout(showSlides, 7000);
        console.log("end of show slides")
    }

    // used onclick
    function plusSlides(position) {
        slideIndex += position;
        if (slideIndex > slides.length) {
            slideIndex = 1
        } else if (slideIndex < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function currentSlide(index) {
        if (index > slides.length) {
            index = 1
        } else if (index < 1) {
            index = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[index - 1].style.display = "block";
        dots[index - 1].className += " active";
    }
});