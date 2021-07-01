jQuery(document).ready(function ($) {
    console.log("inside treatment step script")
    $('.step').each(function (index, element) {
        // element == this
        $(element).not('.active').addClass('done');
        $('.done').html('<img src="../../icons/checkmark_icon_white.png" >');
        if ($(this).is('.active')) {
            return false;
        }
        console.log("end of for each in treatment step progress bar script")
    });
});