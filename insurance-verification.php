<?php

/**
 * Template Name: Insurance Verification
 * Template Post Type: Page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package sbh_center
 */

namespace WP_Rig\WP_Rig;

get_header();
get_template_part('template-parts/javascript/navigationJs');

sbh_center()->print_styles('sbh_center-custom-page-nosidebar', 'sbh_center-content');

?>

<?php if (get_field('has_google_translate')) : ?>
    <div id="google_translate_element"></div>
    <script>
        function googleTranslateElementInit() {

            new google.translate.TranslateElement({

                pageLanguage: 'en'

            }, 'google_translate_element');

        }
    </script>
    <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<?php endif; ?>


<main id="primary" class="insurance_verification_page">
    <?php get_template_part('template-parts/heros/desktop_and_mobile_hero_full_width'); ?>

    <div class="content_container">
        <div class="page_wrapper">
            <!-- Page Content -->
            <section class="page_content">
                <?php get_template_part('template-parts/content/googleTranslate'); ?>
                <?php echo get_field('content') ?>
            </section>

            <section class="insurance_form_section">
                <div class="insurance_form_wrapper">
                    <?php $insuranceVerificationGForm = '[gravityform id="' . get_field('insurance_verification_form_id', 'option') . '" title="false" description="false"]';
                    echo do_shortcode($insuranceVerificationGForm); ?>
                </div>
            </section>

            <?php get_template_part('template-parts/content/pageDisclaimer'); ?>
        </div>
    </div>
</main>

<?php
get_footer();
