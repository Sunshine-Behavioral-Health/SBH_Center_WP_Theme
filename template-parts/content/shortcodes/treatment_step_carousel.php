<section class="treatment_step_carousel_section">
    <div class="treatment_step_carousel_container">

        <?php
        $treatmentStepsRepeater = get_field('treatment_steps');
        if (have_rows('treatment_steps', 'option')) :
            $treatmentStepNumber = 0;
            while (have_rows('treatment_steps', 'option')) : the_row();
                $treatmentStepNumber++

        ?>
                <p>TREATMENT STEP CAROUSEL</p>
                <p><?php get_row_index(); ?></p>
                <p><?php print_r($treatmentStepsRepeater) ?></p>
        <?php
            endwhile;
        endif;
        ?>
    </div>
</section>