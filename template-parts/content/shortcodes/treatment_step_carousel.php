<section class="treatment_step_carousel_section">
    <div class="treatment_step_carousel_container custom_carousel">
        <?php
        if (have_rows('treatment_steps', 'option')) : ?>
            <h2>Our Treatment Steps</h2>
            <div class="treatment_step_carousel_wrapper">
                <?php
                while (have_rows('treatment_steps', 'option')) : the_row();
                ?>
                    <div class="treatment_step_carousel_element fade">
                        <div class="treatment_step_carousel_element_content">
                            <h4><?php echo get_sub_field('step_subheadline', 'option') ?></h4>
                            <h3><?php echo get_sub_field('step_headline', 'option') ?></h3>
                            <p><?php echo get_sub_field('step_paragraph', 'option') ?></p>
                            <a href="<?php echo get_sub_field('step_url', 'option') ?>"><?php echo get_sub_field('step_cta_text', 'option') ?><img src="<?php echo get_template_directory_uri() . '/icons/right_arrow.png' ?>" alt=""></a>
                        </div>
                        <div class="treatment_step_carousel_element_image">
                            <img src="<?php echo get_sub_field('step_image', 'option')['url'] ?>" alt="">
                        </div>
                    </div>
                <?php endwhile; ?>

                <div class="treatment_step_carousel_buttons prev">
                    <div class="treatment_step_carousel_button">
                        <svg style="max-height:100px;" version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve">
                            <circle cx="50" cy="50" r="40" stroke="grey" stroke-width="3" fill="none" />
                        </svg>
                        <a class="prev_arrow">&#10094;</a>

                    </div>
                    <div class="treatment_step_carousel_button next">
                        <svg style="max-height:100px;" version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve">
                            <circle fill="none" stroke="#000" stroke-width="4" stroke-mitterlimit="0" cx="50" cy="50" r="48" stroke-dasharray="360" stroke-linecap="round" transform="rotate(-90 ) translate(-100 0)">
                                <animate attributeName="stroke-dashoffset" values="360;0" dur="7s" repeatCount="indefinite"></animate>
                            </circle>
                            <circle cx="50" cy="50" r="40" stroke="grey" stroke-width="3" fill="none" />
                        </svg>
                        <a class="next_arrow">&#10095;</a>
                    </div>
                </div>
            </div>
    </div>
<?php endif; ?>
</section>

<script>
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slides = document.querySelectorAll('.treatment_step_carousel_element');
    const numberOfSlides = slides.length;

    let slideNumber = 0;

    nextBtn.addEventListener("click", () => {
        console.log("clicked next button")
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
    });

    prevBtn.addEventListener("click", () => {
        console.log("clicked prev button")
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slideNumber--;

        if (slideNumber < 0) {
            slideNumber = numberOfSlides - 1;
        }

        slides[slideNumber].classList.add("active");
    });

    //image slider autoplay
    let playSlider;

    let repeater = () => {
        playSlider = setInterval(function() {
            console.log("inside play slider")
            slides.forEach((slide) => {
                slide.classList.remove("active");
                slides[0].classList.add("active")
            });

            slideNumber++;

            if (slideNumber > (numberOfSlides - 1)) {
                slideNumber = 0;
            }

            slides[slideNumber].classList.add("active");
            console.log("almost end of playslider")
        }, 4000);
        console.log("end of playSlider")

        //reset_animation();
    }
    repeater();



    function reset_animation() {
        document.querySelector('animate').beginElement();
        console.log("animation has been reset")
    }
</script>