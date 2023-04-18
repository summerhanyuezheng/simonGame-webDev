const gamePattern = []
const buttonColours = ["red", "blue", "green", "yellow"]
const userClickedPattern = []


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





function nextSequence() {
    // generate random number from 0-3
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColor = buttonColours[randomNumber]
    gamePattern.push(randomChosenColor)
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor)
}



$(".btn").click(function() {
    var userChosenColor = $(this).attr('id')
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)

});





