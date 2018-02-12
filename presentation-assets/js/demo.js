var hipster_container;
var hipster_opacity;

var fadeStart= 0; 
var fadeUntil= 220;
    
$().ready(function(){
    $hipster_container = $('.hipster-container img');
        
});

$(window).on('scroll',function(){
    hafc.checkScrollForContentTransitions();             
});

hafc = {       
    checkScrollForContentTransitions : function(){                  
        var offset = $(window).scrollTop(),
           opacity = 0;
            
            
        if(offset < 600){ 
            if(offset <= fadeStart){
                opacity = 1;
            }else if( offset <= fadeUntil ){
                opacity = 1 - offset / fadeUntil;
            }
            $hipster_container.css({
                    'opacity': opacity,
                    'transform': 'translateY(' + offset + 'px)',
                    '-webkit-transform': 'translateY(' + offset + 'px)',
                    '-moz-transform': 'translateY(' + offset + 'px)'
            });    
        }
    }                   
}