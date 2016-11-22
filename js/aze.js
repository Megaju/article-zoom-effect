$(document).ready(function(){
    var X = [];
    var displayTitle = true;
    
    $("div[id*='AZE_']").hover(function(){
        X = []; 
        P = this.id.split('_');
        X.push(P[1]);
        titleHover();
        restart();
    });
    
    // title appear on image mouse hover
    function titleHover(){
        $('#AZE_'+X+' .article .art-img .title-img').css({
            "width": "auto",
            "opacity": "1"
        }); 
    };
    
    // title disepear on image mouse leave
    $("div[id*='AZE_']").mouseleave(function(){
        $('#AZE_'+X+' .article .art-img .title-img').css('opacity', '0');
    });
    
    
    // title reset (DOSEN'T WORK)
    $('.art-img').click(function(){
        $(".art-img").css('opacity','0');
        $('#AZE_'+X+' .article .art-img').css('opacity','1');
    });
    
    function restart(){
        // open article X
        $('#AZE_'+X+' img').click(function(){
            $('#AZE_'+X).removeClass("display-none");
            $('#AZE_'+X).addClass("absolute");
        });
        // close article X
        $('#AZE_'+X+' .article .btn-close').click(function(){
            $('#AZE_'+X).addClass("display-none");
            $('#AZE_'+X).removeClass("absolute");
            $(".art-img").css('opacity','1');
        });
    }
});