<section class="treatment_step_carousel_section">
    <div class="treatment_step_carousel_container">
        <?php
        if (have_rows('treatment_steps', 'option')) :
        ?>
            <h2>Our Treatment Steps</h2>
            <?php
            while (have_rows('treatment_steps', 'option')) : the_row();
            ?>
                <div class="treatment_step_carousel_element">
                    <div class="treatment_step_carousel_element_content">
                        <h3><?php echo get_sub_field('step_headline', 'option') ?></h3>
                        <h4><?php echo get_sub_field('step_subheadline', 'option') ?></h4>
                        <p><?php echo get_sub_field('step_paragraph', 'option') ?></p>
                        <a href="<?php echo get_sub_field('step_url', 'option') ?>"><?php get_sub_field('step_cta_text', 'option') ?><img src="<?php echo get_template_directory_uri() . '/icons/right_arrow.png' ?>" alt=""></a>
                    </div>
                    <div class="treatment_step_carousel_element_image">
                        <img src="<?php echo get_sub_field('step_image', 'option')['url'] ?>" alt="">
                    </div>
                </div>
        <?php
            endwhile;
        endif;
        ?>
    </div>
</section>