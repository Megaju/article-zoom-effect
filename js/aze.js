$(document).ready(function(){
    var X = [];
    var XmaxValue = $("div[id*='AZE_']").length;
    var displayTitle = true;
    $('.anim').fadeOut( 0 );
    
    // define var idPL to display the modal
    var PL = window.location.hash;
    var idPL = [];
    PL = PL.split('_');
    idPL.push(PL[1]);
    console.log(idPL);
    if (idPL > 0) {
        X = idPL;
        reset();
        open();
    }
    
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
    
    // restart
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
        $('#AZE_'+X+' img').css({
            "position":"relative",
            "left":"-100%",
            "transition":".4s"
        });
        $('.anim').fadeIn( 400 );
        $('.btn-nav-art').css('display','block');
    };
    
    // close
    function close(){
        displayTitle = true;
        $('#AZE_'+X).addClass("display-none");
        $('#AZE_'+X).removeClass("absolute");
        $('#AZE_'+X+' img').css({
            "position":"relative",
            "left":"0"
        });
        $('.anim').fadeOut( 400 );
        $('.art-img').css('opacity','1');
        $('.article').css({
            "display": "flex",
            "width":"auto"
        });
        $('.btn-nav-art').css('display','none');
    };
    
    // inview
    $(".article .art-content .anim p").on('inview', function(event, isInView) {
        if (isInView) {
            // element is now visible in the viewport
            $('#AZE_'+X+' img').css({
            "position":"relative",
            "left":"0"
        });
        } else {
            // element has gone out of viewport
        }
    });
    
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