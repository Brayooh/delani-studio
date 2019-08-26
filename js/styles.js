$('.main').click(function () {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500);
   });
   $('.main').click(function () {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500);
   });

   $(".portfolio img").hover(function(){
       $(this).animate({opacity: .5})
   }, function(){
           $(this).stop().animate({opacity: 1})
       })
    
