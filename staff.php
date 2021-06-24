<?php

/**
 * Template Name: Staff
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package sbh_center
 */

namespace WP_Rig\WP_Rig;

get_header();

sbh_center()->print_styles('sbh_center-content');

// Read Bio Function

get_template_part('template-parts/javascript/readBio');
get_template_part('template-parts/javascript/navigationJs');


?>


<main id="primary" class="maxWidth">

	<div class="custom_page_noSideBar_wrapper">
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
		<section class="staff_page_content">
			<?php echo get_field('page_content'); ?>
		</section>

		<?php get_template_part('template-parts/content/universal_staff'); ?>

		<section class="page_disclosure_section">
			<?php get_template_part('template-parts/content/pageDisclaimer'); ?>
		</section>
	</div>
</main>
<?php
get_footer();
