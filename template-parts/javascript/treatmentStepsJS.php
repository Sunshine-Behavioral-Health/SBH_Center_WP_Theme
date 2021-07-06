<script>
    jQuery(document).ready(function($) {
        $('.step').each(function(index, element) {
            // element == this
            $(element).not('.active').addClass('done');
            $('.done').html('<a href="<?php echo get_sub_field('step_url', 'option') ?>"><img src="<?php echo get_template_directory_uri() . '/icons/checkmark_icon_white.png' ?>" ></a>');
            if ($(this).is('.active')) {
                return false;
            }
        });

        var fixmeTop = $('.treatment_step_progress_bar_section').offset().top; // get initial position of the element

        $(window).scroll(function() { // assign scroll event listener

            var currentScroll = $(window).scrollTop(); // get current position

            if (currentScroll >= fixmeTop) { // apply position: fixed if you
                $('.treatment_step_progress_bar_section').css({ // scroll to that element or below it
                    position: 'fixed',
                    top: '150px',
                    left: '0'
                });
            } else { // apply position: static
                $('.treatment_step_progress_bar_section').css({ // if you scroll above it
                    position: 'static'
                });
            }

        });

        // Carousel
        var slideIndex = 0;
        showSlides();
        var slides;

        function showSlides() {
            var i;
            slides = document.getElementsByClassName("treatment_step_carousel_element");

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }

            slides[slideIndex - 1].style.display = "block";

            // Controls how long between each slide change
            setTimeout(showSlides, 7000);
        }

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
</script>