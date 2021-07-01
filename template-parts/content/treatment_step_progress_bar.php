<section class="treatment_step_progress_bar_section">
    <div class="treatment_step_progress_bar_container">
        <div id="steps">
            <?php
            if (have_rows('', 'option')) :
                $treatmentStepNumber = 0;
                while (have_rows('', 'option')) : the_row();
                    $treatmentStepNumber++
            ?>
                    <div class="step" data-desc="Listing information"><?php echo $treatmentStepNumber ?></div>
            <?php
                endwhile;
            endif;
            ?>
        </div>
    </div>
</section>

<script>
    $(document).ready(function() {
        $('.step').each(function(index, element) {
            // element == this
            $(element).not('.active').addClass('done');
            $('.done').html('<i class="icon-ok"></i>');
            if ($(this).is('.active')) {
                return false;
            }
        });
    });
</script>


<!-- Shortcode with attributes that takes step="" as the param to determine where to add the active class. Sub -->