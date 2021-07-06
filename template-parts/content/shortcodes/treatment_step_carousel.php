<script type="text/javascript">
    jQuery(document).ready(function($) {
        var sliders = document.querySelectorAll('.glide');
        for (var i = 0; i < sliders.length; i++) {
            var glide = new Glide(sliders[i], {
                perView: 1,
                autoplay: 6000,
                hoverpause: true,
                keyboard: true,
                animationDuration: 2000
            });

            glide.mount();
        }
    });
</script>

<section class="treatment_step_carousel_section">
    <div class="treatment_step_carousel_container">
        <?php
        if (have_rows('treatment_steps', 'option')) :
        ?>
            <h2>Our Treatment Steps</h2>
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <?php
                        while (have_rows('treatment_steps', 'option')) : the_row();
                        ?>
                            <div class="treatment_step_carousel_element">
                                <div class="treatment_step_carousel_element_content">
                                    <h4><?php echo get_sub_field('step_subheadline', 'option') ?></h4>
                                    <h3><?php echo get_sub_field('step_headline', 'option') ?></h3>
                                    <p><?php echo get_sub_field('step_paragraph', 'option') ?></p>
                                    <a href="<?php echo get_sub_field('step_url', 'option') ?>"><?php echo get_sub_field('step_cta_text', 'option') ?><img src="<?php echo get_template_directory_uri() . '/icons/right_arrow.png' ?>" alt=""></a>
                                </div>
                                <div class="treatment_step_carousel_element_image">
                                    <img src="<?php echo get_sub_field('step_image', 'option')['url'] ?>" alt="">
                                </div>
                            </div>
                        <?php endwhile; ?>
                    </ul>
                </div>
                <div class="glide__arrows treatment_step_carousel_arrows" data-glide-el="controls">
                    <div class="circular">
                        <div class="inner"></div>
                        <div class="number glide__arrow glide__arrow--right" data-glide-dir=">">next</div>
                        <div class="circle">
                            <div class="bar left">
                                <div class="progress"></div>
                            </div>
                            <div class="bar right">
                                <div class="progress"></div>
                            </div>
                        </div>
                    </div>

                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">last</button>
                </div>
            </div>
        <?php endif; ?>
    </div>
</section>