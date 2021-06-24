<?php

/**
 * Template Name: Schedule Template
 * Template Post Type: Page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package sbh_center
 */

namespace WP_Rig\WP_Rig;

get_header();

sbh_center()->print_styles('sbh_center-content');
get_template_part('template-parts/javascript/navigationJs');


?>


<main id="primary" class="maxWidth">
	<div class="page_image">
		<img class="page_desktop_image hero_image hide_on_mobile show_on_tablet" src="<?php echo get_field('schedule_desktop_image')['url']; ?>">
		<img class="page_mobile_image hero_image hide_on_desktop hide_on_tablet" src="<?php echo get_field('schedule_mobile_image')['url']; ?>">
		<div class="page_mobile_image_text_and_cta_container">
			<h1><?php echo get_field('schedule_page_headline') ?></h1>
		</div>
	</div>

	<div class="schedule_headline hide_on_mobile">
		<h1><?php echo get_field('schedule_page_headline') ?></h1>
	</div>


	<section class="page_content list_styling">
		<div class="scheudle_table_container schedule_container">
			<?php $table = get_field('schedule_table'); ?>
		</div>
	</section>

	<?php get_template_part('template-parts/content/phoneTreatmentCta'); ?>


	<section class="page_disclosure_section">
		<?php get_template_part('template-parts/content/pageDisclaimer'); ?>
	</section>
</main>
<?php
get_footer();
