$(document).ready(function(){
    
    var X = [];
    $("div[id*='article_']").hover(function(){
        X = [];
        P = this.id;
        P = P.split('_');
        X.push(P[1]);
        restart();
    });
    
    function restart(){
        // ouverture de l'article X en cliquant sur son image
        $('#article_'+X+' img').click(function(){
            $('#article_'+X).removeClass("display-none");
            $('#article_'+X).addClass("absolute");
        });
        // fermeture de l'article X en cliquant sur la croix
        $('#article_'+X+' .article .btn-close').click(function(){
            $('#article_'+X).addClass("display-none");
            $('#article_'+X).removeClass("absolute");
        });
    }
    
});