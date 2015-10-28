/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

$(document).ready(function(){
    Game.init(data);
    $(".opt-start").on("click",function(){
        Game.start();
    });
});

var Game = {
    cardHTML : "<li id=\"NUM\" class=\"done\"><h3>NUM</h3></li> ",
    lastClicked : 0,
    totalNumber : 0,
    init : function(cards,totalNumber){
        this.lastClicked = 0;
        this.totalNumber = totalNumber;
        cards.forEach(function(element){
            var card= $.parseHTML( Game.cardHTML.replace(/NUM/g,element) );
            $(card).on("click", function(){
                $(card).attr("class","done");
                if(element==Game.lastClicked+1){
                    Game.lastClicked++;
                } else {
                    alert("YOU LOST");
                }
                if(Game.lastClicked==Game.totalNumber){
                    alert("YOU WON");
                }
            })
            $(".cards").append(card);
        });
    },
    
    start : function(){
        $(".cards").children("li").each(function(){
            $(this).attr("class","hidden");
        });
    }
};







