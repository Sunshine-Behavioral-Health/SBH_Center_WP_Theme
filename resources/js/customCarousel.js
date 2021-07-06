jQuery(document).ready(function ($) {
    let slideIndex = 0;
    let slides;
    showSlides();

    $(".custom_carousel .prev").on('click', plusSlides(-1));
    $(".custom_carousel .next").on('click', plusSlides(1));

    function showSlides() {
        console.log("top of showSlides")
        let i;
        slides = $(".treatment_step_carousel_element");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";

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
        slides[slideIndex - 1].style.display = "block";
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
        slides[index - 1].style.display = "block";
    }
});