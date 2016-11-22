$(document).ready(function(){
    var X = [];
    var displayTitle = true;
    
    $("div[id*='AZE_']").hover(function(){
        X = []; 
        P = this.id.split('_');
        X.push(P[1]);
        if (displayTitle === true) {
            titleAppear();
        }
        restart();
    });
    
    // title appear on image mouse hover
    function titleAppear(){
        $('#AZE_'+X+' .article .art-img .title-img').css({
            "width": "auto",
            "opacity": "1"
        }); 
    };
    
    // title disepear on image mouse leave
    function titleDisappear() {
        $('#AZE_'+X+' .article .art-img .title-img').css('opacity', '0');
    };
    $("div[id*='AZE_']").mouseleave(function(){
        titleDisappear();
    });
    
    
    // title reset (DOSEN'T WORK)
    $('.art-img').click(function(){
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
    });
    
    function restart(){
        // open article X
        $('#AZE_'+X+' img').click(function(){
            displayTitle = false;
            $('#AZE_'+X).removeClass("display-none");
            $('#AZE_'+X).addClass("absolute");
        });
        // close article X
        $('#AZE_'+X+' .article .btn-close').click(function(){
            displayTitle = true;
            $('#AZE_'+X).addClass("display-none");
            $('#AZE_'+X).removeClass("absolute");
            $(".art-img").css('opacity','1');
            $('.article').css({
                "display": "flex",
                "width":"auto"
            });
        });
    }
    
});