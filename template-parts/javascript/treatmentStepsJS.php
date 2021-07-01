<script>
    jQuery(document).ready(function($) {
        $('.step').each(function(index, element) {
            // element == this
            $(element).not('.active').addClass('done');
            $('.done').html('<img src="<?php echo get_template_directory_uri() . '/icons/checkmark_icon_white.png' ?>" >');
            if ($(this).is('.active')) {
                return false;
            }
        });
    });
</script>