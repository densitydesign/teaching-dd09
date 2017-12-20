jQuery(document).ready(function($){

    $("#styles_panel .open-button, #styles_panel .close-button").click(function () {

        if ($("#styles_panel .open-button").is(":visible")) {



            $("#styles_panel .open-button").animate({

                "left": "-283px"

            }, 500, function () {

                $(this).hide();

            });



            $("#styles_panel .options").animate({

                "left": "0px"

            }, 500).show();

        } else {

            $("#styles_panel .options").animate({

                "left": "-283px"

            }, 500, function () {

                $(this).hide();

            });

            $("#styles_panel .open-button").show().animate({

                "left": "0"

            }, 500);

        }

    });

    jQuery('#black-menu').on('click', function(){

        jQuery('#navbar-top').removeClass('navbar-default').addClass('navbar-inverse')

    });

    jQuery('#white-menu').on('click', function(){

        jQuery('#navbar-top').removeClass('navbar-inverse').addClass('navbar-default')

    });

    jQuery('#black-back').on('click', function(){

        jQuery('body').addClass('body-inverse')

    });

    jQuery('#white-back').on('click', function(){

        jQuery('body').removeClass('body-inverse')

    });

    jQuery("#main-color li").bind('click', function(){

        var color_name = jQuery(this).data('color-name');

        jQuery('body').attr('data-body-class', color_name);

        jQuery('.easyPieChart').each(function () {

            var percent=jQuery(this).data('percent');

            if(color_name == 'yellow'){

                jQuery(this).attr('data-barcolor', '#ffce00');

            } else if (color_name == 'red'){

                jQuery(this).attr('data-barcolor', '#43617d');

            }else if (color_name == 'frog'){

                jQuery(this).attr('data-barcolor', '#03c893');

            } else if (color_name == 'azure-blue'){

                jQuery(this).attr('data-barcolor', '#2dabf0');

            } else if (color_name == 'twitter'){

                jQuery(this).attr('data-barcolor', '#1acddd');

            } else if (color_name == 'grass'){

                jQuery(this).attr('data-barcolor', '#6ebd02');

            } else if (color_name == 'plum'){

                jQuery(this).attr('data-barcolor', '#991653');

            } else if (color_name == 'pale-brown'){

                jQuery(this).attr('data-barcolor', '#323232');

            } else if (color_name == 'chestnut'){

                jQuery(this).attr('data-barcolor', '#f542b0');

            } else{

                jQuery(this).attr('data-barcolor', '#de4a32');

            }

            jQuery(this).data('easyPieChart').update(percent);

        });

    })

})