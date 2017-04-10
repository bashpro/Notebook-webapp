$(function() {
    $('#settings').click(function(){
      $('.bkg-menu').removeClass("hide");
      $('#set-title').removeClass("hide");
    });

    $('#profile').click(function(){
      $('.bkg-menu').removeClass("hide");
      $('#pro-title').removeClass("hide");
    });

    $('.menu-close').click(function(){
      $('.bkg-menu').addClass("hide");
      $('#set-title').addClass('hide');
      $('#pro-title').addClass('hide');
    });
});
