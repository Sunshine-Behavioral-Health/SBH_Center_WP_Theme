<?php
function treatment_step_progress_bar($atts)
{
    $atts = shortcode_atts(
        array(
            'step' => ''
        ),
        $atts
    );
?>

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
    return $output;
}

add_shortcode('treatment_step_progress_bar', 'treatment_step_progress_bar');
?>


<!-- 
    Add active class to specific index contingent on the attribute passed in via shortcode param


 -->