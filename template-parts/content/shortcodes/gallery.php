<section class="gallery_section">
    <div class="gallery_container">
        <?php
        if (have_rows('gallery-repeater')) :
            while (have_rows('gallery-repeater')) : the_row();

                $galleryItemWidth = get_sub_field('gallery_item_width');
                $galleryItemHeight = get_sub_field('gallery_item_height');
        ?>
                <div class="gallery_item_wrapper <?php echo get_sub_field('gallery_item_width');
                                                    echo get_sub_field('gallery_item_height') ?>">
                    <div class="gallery_item">
                        <img src="<?php echo get_sub_field('gallery_image')['url'] ?>" alt="">
                    </div>
                </div>
        <?php
            endwhile;
        endif;
        ?>
    </div>
</section>