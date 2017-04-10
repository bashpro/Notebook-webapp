$( document ).ready(function() {
    console.log( "ready!" );

    $('#settings').click(function(){
      $('.bkg-menu').removeClass("hide");
    });

    $('#profile').click(function(){
      $('.bkg-menu').removeClass("hide");
    });

    $('.menu-close').click(function(){
      $('.bkg-menu').addClass("hide");
    });

    $(function() {

        $('#settings').click(function() {

            if ($('#set-title').hasClass("hide")) {
                $('#set-title').removeClass('hide');
            }
            else if (!$('#set-title').hasClass("hide")) {
                $('#set-title').addClass('hide');
            }

        });

    });

    $(function() {

        $('#profile').click(function() {

            if ($('#pro-title').hasClass("hide")) {
                $('#pro-title').removeClass('hide');
            }
            else if (!$('#pro-title').hasClass("hide")) {
                $('#pro-title').addClass('hide');
            }

        });

    });

    $(function() {

        $('.menu-close').click(function() {

            if (!$('#set-title').hasClass("hide")) {
                $('#set-title').addClass('hide');
            }

        });

    });

    $(function() {

        $('.menu-close').click(function() {

            if (!$('#pro-title').hasClass("hide")) {
                $('#pro-title').addClass('hide');
            }

        });

    });
});
