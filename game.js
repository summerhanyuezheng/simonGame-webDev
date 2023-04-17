const gamePattern = []

function nextSequence() {
    // generate random number from 0-3
    var randomNumber = Math.floor(Math.random() * 4)
    return randomNumber
}

const buttonColours = ["red", "blue", "green", "yellow"]

var randomChosenColor = buttonColours[nextSequence()]
gamePattern.push(randomChosenColor)