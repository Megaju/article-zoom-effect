$(document).ready(function(){
    var X = [];
    $("div[id*='AZE_']").hover(function(){
        X = []; 
        P = this.id.split('_');
        X.push(P[1]);
        titleHover();
        restart();
    });
    
    $("div[id*='AZE_']").mouseleave(function(){
        $('#AZE_'+X+' .article .art-img .title-img').css({
            "width": "0",
            "opacity": "0"
        });
    });
    
    function titleHover(){
        $('#AZE_'+X+' .article .art-img .title-img').css({
            "width": "auto",
            "opacity": "1"
        });    
    };
    
    // title reset (DOSEN'T WORK)
    $('.art-img').click(function(){
        $(".art-img").css('opacity','0');
        $('#AZE_'+X+' .article .art-img').css('opacity','1');
    });
    
    function restart(){
        // ouverture de l'article X en cliquant sur son image
        $('#AZE_'+X+' img').click(function(){
            $('#AZE_'+X).removeClass("display-none");
            $('#AZE_'+X).addClass("absolute");
        });
        // fermeture de l'article X en cliquant sur la croix
        $('#AZE_'+X+' .article .btn-close').click(function(){
            $('#AZE_'+X).addClass("display-none");
            $('#AZE_'+X).removeClass("absolute");
            $(".art-img").css('opacity','1');
        });
    }
});