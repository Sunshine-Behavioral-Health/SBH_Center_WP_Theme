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
                    <div class="treatment_step_carousel_button next" onclick="plusSlides(1)">
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
    jQuery(document).ready(function($) {
        let slideIndex = 0;
        let slides;
        showSlides();

        $(".prev").on('click', () => {
            plusSlides(-1)
            console.log("clicked prev")
        });
        // $(".next").on('click', () => {
        //     console.log("clicked next button")
        //     plusSlides(2)
        //     console.log("end of next")
        // });

        function showSlides() {
            let i;
            slides = $(".treatment_step_carousel_element");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            slides[slideIndex - 1].style.display = "flex";

            // Controls time on each slide 
            setTimeout(showSlides, 7000);
        }


    });

    function plusSlides(position) {
        console.log("inside plusSlides function")
        slideIndex += position;
        if (slideIndex > slides.length) {
            slideIndex = 1
        } else if (slideIndex < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "flex";

        console.log("end of plus slides function")
    }
</script>