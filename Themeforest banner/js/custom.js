$(document).ready(function(){
	$navOffset=$('#header').offset().top;
            
    // navOffset ends 
        $top_offset=300;
        $('.top_to').click(function(){
            $('html,body').animate({
                scrollTop:0
            },800);
        });
        $(window).scroll(function(){
            $scrolling=$(this).scrollTop();
            
            if($scrolling > $navOffset){
                $("#header").addClass('navfixed');
            }else{
                $("#header").removeClass('navfixed');
            }
        // navOffset ends
            if($scrolling > $top_offset){
                $('.top_to').fadeIn();
            }else{
                $('.top_to').fadeOut();
            }
        });
});