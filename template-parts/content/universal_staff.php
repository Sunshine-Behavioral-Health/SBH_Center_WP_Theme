<?php
$staffCounter = 0;
if (is_page_template('staff.php')) : ?>
    <section>
        <div class="staff_cards_container">
            <?php if (have_rows('staff_repeater', 'option')) :
                while (have_rows('staff_repeater', 'option')) : the_row(); ?>
                    <div class="staff_card">
                        <div class="staff_card_wrapper">
                            <img src="<?php echo get_sub_field('staff_image')['url'] ?>" alt="">
                            <p class="staff_name"><?php echo get_sub_field('staff_name'); ?></p>
                            <p><?php echo get_sub_field('staff_title', 'option'); ?></p>
                            <?php if (get_sub_field('staff_bio')) : ?>
                                <button class="read_more_button" type="button" data-toggle="collapse" data-target="#staff_bio<?php echo get_sub_field('card_number') ?>" aria-expanded="false" aria-controls="staff_bio<?php echo get_sub_field('card_number', 'option') ?>">Read Bio</button>
                            <?php endif; ?>
                            <div class="bio collapse multi-collapse 
							<?php if (get_sub_field('staff_bio', 'option')) {
                                echo 'hide_bio';
                            } ?> " id="staff_bio<?php echo $staffCounter++; ?>">
                                <p><?php echo get_sub_field('staff_bio', 'option'); ?></p>
                            </div>
                        </div>
                    </div>
            <?php
                endwhile;
            endif;
            ?>
        </div>

    </section>
<?php elseif (is_front_page()) : ?>
    <section id="home_staff_section" class="">
        <div class="staff_container ">
            <h2 class="staff_headline"><?php the_field('staff_headline') ?></h2>
            <div class="row staff_width">
                <?php if (have_rows('staff_repeater', 'option')) :
                    while (have_rows('staff_repeater', 'option')) : the_row();
                        if (get_sub_field('on_home_page', 'option')) : ?>
                            <div class="staff_individual_card">
                                <img src="<?php echo get_sub_field('staff_image')['url'] ?>" alt="">
                                <h5 class="staff_name"><?php echo get_sub_field('staff_name'); ?></p>
                                    <p><?php echo get_sub_field('staff_title', 'option'); ?></p>
                            </div>
                <?php
                        endif;
                    endwhile;
                endif;
                ?>
                <div class="rest_of_staff_link_container">
                    <a href="/staff/">
                        <h3>Meet the Rest of Our Staff</h3>
                    </a>
                </div>
            </div>
        </div>
    </section>
<?php endif; ?>