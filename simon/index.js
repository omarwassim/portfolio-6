var buttonColours=["red","blue","yellow","green"];
var gamepattern=[];
var userClickedPattern=[];
var started=false;
var level=0;
$(document).keypress(function(){
    if(!started){
            $("#level-title").text("level "+level);
            nextsequence();
            started=true;
        }
});
$(".btn").click(function()
{
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);  
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel)
{
    if(gamepattern[currentLevel]===userClickedPattern[currentLevel])
        {
            console.log("success");
            if (userClickedPattern.length ===gamepattern.length){
                setTimeout(function () {
                  nextsequence();
                }, 1000);
        }
    }
    else
    {
        console.log("wrong");
        playsound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }    
}
function nextsequence()
{
    userClickedPattern = [];
    level++;
    $("#level-title").text("level "+level);
    var randomNumber=Math.floor(Math.random() * 4);
    var randomchoisecolor=buttonColours[randomNumber];
    gamepattern.push(randomchoisecolor);
    $("#"+ randomchoisecolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomchoisecolor);    
}
function playsound(name)
{
    var audio = new Audio('sounds/'+ name + '.mp3');
    audio.play();
}
function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function()
    {
        $("#" + currentColour).removeClass("pressed");
    }, 100 );
}
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
