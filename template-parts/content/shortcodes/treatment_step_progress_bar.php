<?php
function treatment_step_progress_bar($atts)
{
    $atts = shortcode_atts(
        array(
            'step' => ''
        ),
        $atts
    );

    ob_start();
?>
    <script>
        jQuery(document).ready(function($) {
            console.log("inside treatment step script")
            $('.step').each(function(index, element) {
                // element == this
                $(element).not('.active').addClass('done');
                $('.done').html('<img src="<?php echo get_template_directory_uri() . '/icons/checkmark_icon_white.png' ?>" >');
                if ($(this).is('.active')) {
                    return false;
                }
                console.log("end of for each in treatment step progress bar script")
            });
        });
    </script>

<?php
    $output = '';
    $output .= '<section class="treatment_step_progress_bar_section">';
    $output .= '<div class="treatment_step_progress_bar_container">';
    $output .= '<div id="steps">';
    if (have_rows('treatment_steps', 'option')) :
        $treatmentStepNumber = 0;
        while (have_rows('treatment_steps', 'option')) : the_row();
            $treatmentStepNumber++;
            $output .= ' <div class="step" data-desc="' . get_sub_field('step_name', 'option') . '">' . $treatmentStepNumber . '</div>';
        endwhile;
    endif;
    $output .= '</div>';
    $output .= '</div>';
    $output .= '</section>';
    ob_end_clean();
    return $output;
}

add_shortcode('treatment_step_progress_bar', 'treatment_step_progress_bar');
?>