var gamePattern = []
var buttonColours = ["red", "blue", "green", "yellow"]
var userClickedPattern = []

var started = false
var level = 0


$(document).keypress(function() {
    if (!started){
        started = true
        $("h1").text("Level 0")
        nextSequence()
    }

})



$(".btn").click(function() {
    var userChosenColor = $(this).attr('id')
    userClickedPattern.push(userChosenColor)

    playSound(userChosenColor)
    animatePress(userChosenColor)

    //check answer after user clicks, only need to check the last in the array
    checkAnswer(userClickedPattern.length - 1)

});

function startOver() {
    level = 0
    gamePattern = []
    started = false
}


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel]=== userClickedPattern[currentLevel]) {
        console.log("success")
        //check if user has finished the current sequence
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function() {
                nextSequence();
                
            }, 1000);
        }
    }
    else {
        console.log("wrong")

        playSound("wrong")
        $("body").addClass("game-over")

        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);

        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}







function nextSequence() {

    userClickedPattern = []
    level++
    $("h1").text("Level " + level)
    // generate random number from 0-3
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColor = buttonColours[randomNumber]
    gamePattern.push(randomChosenColor)

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor)
    
}



function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3" )
    audio.play()
}


function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed")
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    },100);
}













