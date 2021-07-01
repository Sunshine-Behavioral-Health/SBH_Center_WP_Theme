<section class="treatment_step_progress_bar_section">
    <div class="treatment_step_progress_bar_container">
        <div id="steps">
            before treatment steps progress bar repeater
            <?php
            if (have_rows('treatment_steps', 'option')) :
                $treatmentStepNumber = 0;
                while (have_rows('treatment_steps', 'option')) : the_row();
                    $treatmentStepNumber++
            ?>
                    <p>inside treatment steps progress bar repeater</p>
                    <div class="step" data-desc="<?php echo get_sub_field('step_name', 'option') ?>"><?php echo $treatmentStepNumber ?></div>
            <?php
                endwhile;
            endif;
            ?>
            after treatment steps progress bar repeater
        </div>
    </div>
</section>


<!-- Shortcode with attributes that takes step="" as the param to determine where to add the active class. Sub -->