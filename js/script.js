$(document).ready(function(){
    
    var X = [];
    $("div[id*='AZE_']").hover(function(){
        X = [];
        P = this.id;
        P = P.split('_');
        X.push(P[1]);
        restart();
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
        });
    }
    
});