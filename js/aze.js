$(document).ready(function(){
    var X = [];
    var XmaxValue = $("div[id*='AZE_']").length;
    var displayTitle = true;
    $('.anim').fadeOut( 0 );
    
    // modif var X
    $("div[id*='AZE_']").hover(function(){
        X = []; 
        P = this.id.split('_');
        X.push(P[1]);
        if (displayTitle === true) {
            titleAppear();
        }
        restart();
    });
    
    // open with click on the title
    $('.title-img').click(function(){
        open();
    });
    
    // title appear on image mouse hover
    function titleAppear(){
        $('#AZE_'+X+' .article .art-img .title-img').css({
            "width": "auto",
            "opacity": "1"
        }); 
    };
    
    // title disepear on image mouse leave
    function titleDisappear(){
        $('#AZE_'+X+' .article .art-img .title-img').css('opacity', '0');
    };
    $("div[id*='AZE_']").mouseleave(function(){
        titleDisappear();
    });
    
    // title and other article reset
    $('.art-img').click(function(){
        reset();
    });
    function reset(){
        $(".art-img").css({
            "opacity": "0",
            "width": "0"
        });
        $(".article").css({
            "display":"none",
            "width":"0"
        });
        $('#AZE_'+X+' .article .art-img').css({
            "opacity": "1"
        });
        $('#AZE_'+X+' .article').css({
            "display":"flex",
            "width":"auto"
        });
        titleDisappear();
    };
    
    function restart(){
        // open article X
        $('#AZE_'+X+' img').click(function(){
            open();
        });
        // close article X
        $('#AZE_'+X+' .article .btn-close').click(function(){
            close();
        });
    };
    // open
    function open(){
        displayTitle = false;
        $('#AZE_'+X).removeClass("display-none");
        $('#AZE_'+X).addClass("absolute"); 
        /*$('.art-content .anim').animate({
            left: '0',
            opacity: '1'
        });*/
        $('.anim').fadeIn( 800 );
        $('.btn-nav-art').css('display','block');
    };
    // close
    function close(){
        displayTitle = true;
        $('#AZE_'+X).addClass("display-none");
        $('#AZE_'+X).removeClass("absolute");
        /*$('.art-content .anim').animate({
            left: '-150%',
            opacity: '0'
        });*/
        $('.anim').fadeOut( 800 );
        $('.art-img').css('opacity','1');
        $('.article').css({
            "display": "flex",
            "width":"auto"
        });
        $('.btn-nav-art').css('display','none');
    };
    
    // next
    $('#next').click(function(){
        if (X < XmaxValue) {
            close();
            X++;
            reset();
            open();
        }
    });
    // prev
    $('#prev').click(function(){
        if (X > 1) {
            close();
            X--;
            reset();
            open();
        }
    });
    
});