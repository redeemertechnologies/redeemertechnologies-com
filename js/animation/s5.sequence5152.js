
jQuery(document).ready(function($){ 
  var IS_MOBILE = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);

if (IS_MOBILE) {
        $('.k-animate').removeClass('k-animate');
}else {
        $(window).load(function() { 
            $('.k-animate').each(function(){
    
        var offsetValue =   $(this).attr('data-offsetk');
        var kAnimation  =   $(this).attr('data-animation');
        var kDelay      =   $(this).attr('data-delay');     
        var kTarget     =   $(this).attr('data-anim-target');
        var kSpeed      =   $(this).attr('data-speed');
        var kEasing      =  $(this).attr('data-ease'); 

        if(typeof kTarget == "undefined") { kTarget="children" }
        
 
        
        if (kTarget=="children"){
            if (kAnimation=="fadeInRight") {
                $(this).waypoint(function(direction) {
                
                $(this).children('*').delay(kDelay).each(function(i){
                    $(this).delay(kDelay*i).transition({'opacity':1, 'right':'0px'}, parseInt(kSpeed) , kEasing , function() {
                        $(this).parent().css({'position':'static'});
                    });
                });         
                
            },{offset:"90%"});
            }
            else if (kAnimation=="fadeInTop") {
                $(this).waypoint(function(direction) {
                
                $(this).children('*').delay(kDelay).each(function(i){
                    $(this).delay(kDelay*i).animate({'opacity':1, 'top':'0px'}, parseInt(kSpeed) , kEasing , function() {
                        $(this).parent().css({'position':'static'});
                    });
                });         
                
                },{offset:"90%"});
            }
            else if (kAnimation=="fadeInBottom") {
                $(this).waypoint(function(direction) {
                
                $(this).children('*').delay(kDelay).each(function(i){
                    $(this).delay(kDelay*i).transition({'opacity':1, 'bottom':'0px'}, parseInt(kSpeed) , kEasing , function() {
                        $(this).parent().css({'position':'static'});
                    });
                });         
                
                },{offset:"90%"});
            }
            else if (kAnimation=="fadeInLeft") {
                $(this).waypoint(function(direction) {
                
                $(this).children('*').delay(kDelay).each(function(i){
                    $(this).delay(kDelay*i).transition({'opacity':1, 'left':'0px'}, parseInt(kSpeed) , kEasing , function() {
                        $(this).parent().css({'position':'static'});
                    });
                });         
                
                },{offset:"90%"});
            }
            else if (kAnimation=="zoomIn" || kAnimation=="showUp") {
                $(this).waypoint(function(direction) {
                
                $(this).children('*').delay(kDelay).each(function(i){
                    $(this).delay(kDelay*i).transition({'opacity':1, scale:1}, parseInt(kSpeed) , kEasing , function() {
                        $(this).parent().css({'position':'static'});
                    });
                });         
                
                },{offset:"90%"});
            }
            else if (kAnimation=="flipInX") {
                $(this).waypoint(function(direction) {
                
                $(this).children('*').delay(kDelay).each(function(i){
                
                    if (jQuery.browser.webkit) {
                        $(this).delay(kDelay*i).transition({'opacity':1, rotateX:'0deg', top:'0px'}, parseInt(kSpeed) , kEasing , function() {
                        $(this).parent().css({'position':'static'});
                        });
                    } else {
                        $(this).delay(kDelay*i).animate({'opacity':1, rotateX:'0deg',  top:'0px'}, parseInt(kSpeed) , kEasing , function() {
                        $(this).parent().css({'position':'static'});
                        });                        
                    }
                });         
                
                },{offset:"90%"});
            }
            else if (kAnimation=="flipInY") {
                $(this).waypoint(function(direction) {
                
                $(this).children('*').delay(kDelay).each(function(i){
                    if (jQuery.browser.webkit) {
                        $(this).delay(kDelay*i).transition({'opacity':1, rotateY:'0deg', left:'0px'}, parseInt(kSpeed) , kEasing , function() {
                        $(this).parent().css({'position':'static'});
                        });
                    }  else {
                        $(this).delay(kDelay*i).css({rotateY:'0deg', left:'0px'}).transition({'opacity':1}, parseInt(kSpeed) , kEasing , function() {
                        $(this).parent().css({'position':'static'});
                        });                        
                    }
                    
                });         
                
                },{offset:"90%"});
            }
            else if (kAnimation=="fadeIn") {
                $(this).waypoint(function(direction) {
                
                $(this).children('*').delay(kDelay).each(function(i){
                    $(this).delay(kDelay*i).animate({'opacity':1}, parseInt(kSpeed) , kEasing , function() {
                        $(this).parent().css({'position':'static'});
                    });
                });         
                
                },{offset:"90%"});
            }

        } 
        if (kTarget=="self"){
            if (kAnimation=="fadeInRight") {
                $(this).waypoint(function(direction) {
                
                    $(this).delay(kDelay).animate({'opacity':1, 'right':'0px'}, parseInt(kSpeed) , kEasing  , function() {
                        $(this).removeClass('k-animate');
                    });
                
            },{offset:"90%"});
            }
            else if (kAnimation=="fadeInTop") {
                $(this).waypoint(function(direction) {
                
                    $(this).delay(kDelay).animate({'opacity':1, 'top':'0px'}, parseInt(kSpeed) , kEasing  , function() {
                        $(this).removeClass('k-animate');
                    });
                
                },{offset:"90%"});
            }
            else if (kAnimation=="fadeInBottom") {
                $(this).waypoint(function(direction) {
                
                    $(this).delay(kDelay).animate({'opacity':1, 'bottom':'0px'}, parseInt(kSpeed) , kEasing , function() {
                        $(this).removeClass('k-animate');
                    });
                
                },{offset:"90%"});
            }
            else if (kAnimation=="fadeInLeft") {
                $(this).waypoint(function(direction) {
                
                    $(this).delay(kDelay).animate({'opacity':1, 'left':'0px'}, parseInt(kSpeed) , kEasing , function() {
                        $(this).removeClass('k-animate');
                    });
                
                },{offset:"90%"});
            }
            else if (kAnimation=="zoomIn"||kAnimation=="showUp") {
                $(this).waypoint(function(direction) {
                
                    $(this).delay(kDelay).transition({'opacity':1, scale:1}, parseInt(kSpeed) , kEasing , function() {
                        $(this).removeClass('k-animate');
                    });
                
                },{offset:"90%"});
            }
            else if (kAnimation=="flipInX") {
                $(this).waypoint(function(direction) {
                
                    $(this).delay(kDelay).transition({'opacity':1, rotateX:'0deg', top:'0px'}, parseInt(kSpeed) , kEasing , function() {
                        $(this).removeClass('k-animate');
                    });
                
                },{offset:"90%"});
            }
            else if (kAnimation=="flipInY") {
                $(this).waypoint(function(direction) {
                
                    $(this).delay(kDelay).transition({'opacity':1, rotateY:'0deg', left:'0px'}, parseInt(kSpeed) , kEasing , function() {
                        $(this).removeClass('k-animate');
                    });
                
                },{offset:"90%"});
            }
            else if (kAnimation=="fadeIn") {
                $(this).waypoint(function(direction) {
                
                    $(this).delay(kDelay).animate({'opacity':1}, parseInt(kSpeed) , kEasing , function() {
                        $(this).removeClass('k-animate');
                    });
                
                },{offset:"90%"});
            }
            else if (kAnimation=="showUp") {
                $(this).waypoint(function(direction) {
                
                    $(this).delay(kDelay).animate({'opacity':1}, parseInt(kSpeed) , kEasing , function() {
                        $(this).removeClass('k-animate');
                    });
                
                },{offset:"90%"});
            }

        } 

        
        
    });

            $('.puller').css({opacity:0, bottom:'-50px'}).animate({opacity:1, bottom:'0px'}, 1000, "easeInOutQuart");
            
        });
    }

    
});