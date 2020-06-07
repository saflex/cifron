
     $(document).ready(function () {

            //main nav
            $(window).on('scroll load', function () {
                updateMainNav();
            });

            function updateMainNav() {
                if ($(window).scrollTop() >= 100) {
                    $('body').addClass('minimize-menus');
                } else {
                    $('body').removeClass('minimize-menus');
                }
            }

            $('.user-nav > a').on('click', function () {
                $('body').toggleClass('show-user-nav');
            });

            $(document).on('click', function (event) {
                $('body').removeClass('show-user-nav');
            });

            $('.collapse-main-nav').on('click', function () {
                if ($('body').toggleClass('show-main-nav').hasClass('show-main-nav')) window.scrollTo(0, 0);
                return false;
            });

        });



 
// placeholder-focus
 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });
 


// mobile-viewport
if(screen.width<=400){
            $('head').append('<meta name="viewport" content="width=400, user-scalable=0"/>');
        } else {
            $('head').append('<meta name="viewport" content="width=device-width">');
        }
        $(window).on("orientationchange",function(){
          if(window.orientation == 0) // Portrait 
          {
            $('head').append('<meta name="viewport" content="width=device-width">');
          } else // Landscape 
          {
            $('head').append('<meta name="viewport" content="width=640">');
          }
});






/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});






  $('.navbar-toggle').on('click', function () {
    $('html, body').toggleClass('no-scroll');
  });





$('.account-block').click(function(){
	  $(".accounts-area").parent().find('.account-block').removeClass("active");
$(this).toggleClass('active');

})

$('.block-icons').click(function(){
	  $(".container").parent().find('.block-icons').removeClass("active");
$(this).toggleClass('active');

})


  $('.blk1').on('click', function () {
    $('.tab-blk1').css('display', 'block');
    $('.tab-blk2').css('display', 'none');
    $('.tab-blk3').css('display', 'none');
  });
    $('.blk2').on('click', function () {
    $('.tab-blk1').css('display', 'none');
    $('.tab-blk2').css('display', 'block');
    $('.tab-blk3').css('display', 'none');
  });
    $('.blk3').on('click', function () {
    $('.tab-blk1').css('display', 'none');
    $('.tab-blk2').css('display', 'none');
    $('.tab-blk3').css('display', 'block');
  });
  
    $(document).mouseup(function (e) {
    var container = $(".jrange2 .hasDatepicker");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

  
    $('.jrange2').on('click', function () {
  	$('.jrange2 .hasDatepicker').css('display', 'block');  
   });
  











