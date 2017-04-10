$(function() {
    $('#settings').click(function(){
      $('.bkg-menu').removeClass("hide");
      $('#set-title').addClass("hide");
    });

    $('#profile').click(function(){
      $('.bkg-menu').removeClass("hide");
      $('#pro-title').addClass("hide");
    });

    $('#menu-close').click(function(){
      $('.bkg-menu').addClass("hide");
      $('#set-title').addClass('hide');
      $('#pro-title').addClass('hide');
    });
});
