$('.main').click(function () {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500);
   });
   

   $(".portfolio img").hover(function(e){
       $(this).animate({opacity: .5})
   }, function(){
           $(this).stop().animate({opacity: 1})
       })
    $("button").click(function () {
        var client=document.getElementById("name").value; 
        alert('dear ' + client + ', we have received your message. ' + 'Thank you for your feedback.');
        e.preventDefault
    });
    
