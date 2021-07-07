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
                        <div class="treatment_step_carousel_element_image" style="background-image: url(' <?php echo get_sub_field('step_image', 'option')['url'] ?>');">
                        </div>
                    </div>
                <?php endwhile; ?>

                <div class="treatment_step_carousel_buttons">
                    <div class="treatment_step_carousel_button prev">
                        <svg style="max-height:75px;" version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve">
                            <circle cx="50" cy="50" r="40" stroke-width="3" fill="none" />
                        </svg>
                        <a class="prev_arrow">&#10094;</a>

                    </div>
                    <div class="treatment_step_carousel_button next">
                        <svg style="max-height:75px;" version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve">
                            <circle class="animated_circle" fill="none" stroke-width="4" stroke-mitterlimit="0" cx="50" cy="50" r="48" stroke-dasharray="360" stroke-linecap="round" transform="rotate(-90 ) translate(-100 0)">
                                <animate attributeName="stroke-dashoffset" values="360;0" dur="7s" repeatCount="indefinite"></animate>
                            </circle>
                            <circle class="inner_circle" cx="50" cy="50" r="40" stroke="grey" stroke-width="3" fill="none" />
                        </svg>
                        <a class="next_arrow">&#10095;</a>
                    </div>
                </div>
            </div>
    </div>
<?php endif; ?>
</section>

<script>

</script>