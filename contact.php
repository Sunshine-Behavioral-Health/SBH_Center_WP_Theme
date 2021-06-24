<?php

/**
 * Template Name: Contact
 * Template Post Type: Page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package sbh_center
 */

namespace WP_Rig\WP_Rig;

get_header();
get_template_part('template-parts/javascript/navigationJs');


?>

<main id="primary" class="insurance_verification_page maxWidth">
    <div class="page_image">
        <img class="page_desktop_image hero_image hide_on_mobile show_on_tablet" src="<?php echo get_field('desktop_image')['url']; ?>">
        <img class="page_mobile_image hero_image hide_on_desktop hide_on_tablet" src="<?php echo get_field('mobile_image')['url']; ?>">
        <div class="page_mobile_image_text_and_cta_container">
            <h1><?php echo get_field('page_headline') ?></h1>
            <p class="hero_subheadline"><?php echo get_field('page_subheadline_paragraph') ?></p>
        </div>
    </div>
    <div class="hide_on_mobile">
        <h1><?php echo get_field('page_headline') ?></h1>
        <p class="hero_subheadline"><?php echo get_field('page_subheadline_paragraph') ?></p>
    </div>
    
    <!-- Covid Notice -->
    <?php get_template_part('template-parts/content/mobileCovidNotice'); ?>

    <div class="contact_container">

        <section class="contact_paragraph_section">
            <div class="contact_paragraph_wrapper">
                <p><?php echo get_field('contact_paragraph') ?></p>
            </div>
        </section>

        <section class="contact_us_section">
            <div class="contact_us_container">
                <?php $contactPageFormShortcode = '[gravityform id="' . get_field('contact_page_form_id', 'option') . '" title="false" description="false"]';
                echo do_shortcode($contactPageFormShortcode); ?>
            </div>
        </section>

        <section class="page_disclosure_section">
            <?php get_template_part('template-parts/content/pageDisclaimer'); ?>
        </section>
    </div>
</main> <?php
        get_footer();
