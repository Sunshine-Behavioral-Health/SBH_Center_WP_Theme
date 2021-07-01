<section class="treatment_step_carousel_section">
    <div class="treatment_step_carousel_container">
        <?php
        if (have_rows('treatment_steps', 'option')) :
            $treatmentStepNumber = 0;
            while (have_rows('treatment_steps', 'option')) : the_row();
                $treatmentStepNumber++
        ?>
                <div class="step" data-desc="<?php echo get_sub_field('step_name', 'option') ?>"><?php echo $treatmentStepNumber ?></div>
        <?php
            endwhile;
        endif;
        ?>
    </div>
</section>