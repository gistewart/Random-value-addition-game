$(document).ready(function() {

    // declare variables
    let redValue = 0;
    let blueValue = 0;
    let yellowValue = 0;
    let greenValue = 0;
    let targetScore = 0;
    let playerScore = 0;
    let winCounter = 0;
    let lossCounter = 0;

    //function to run at beginning of each round of the game
    function gameRestart() {
        redValue = Math.floor(Math.random() * 12) + 1;
        console.log(redValue);
        blueValue = Math.floor(Math.random() * 12) + 1;
        console.log(blueValue);
        yellowValue = Math.floor(Math.random() * 12) + 1;
        console.log(yellowValue);
        greenValue = Math.floor(Math.random() * 12) + 1;
        console.log(greenValue);
        targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $(".targetScore").text(targetScore);
        playerScore = 0;
        $(".playerScore").text("0");
        $("#winLossMessage").text("");
    };
    //same function is run on page load
    gameRestart();

    //initialize to DOM on page load
    $("#winLossMessage").text("");
    $("#winCounter").text("0");
    $("#lossCounter").text("0");

    //comparison of playerScore and targetScore after each click 
    function scoreComparison() {
        $(".playerScore").text(playerScore);
        if (playerScore > targetScore) {
            $("#winLossMessage").text("You lost!");
            lossCounter++;
            $("#lossCounter").text(lossCounter);
            setTimeout(gameRestart, 500);
        } else if (playerScore == targetScore) {
            winCounter++;
            $("#winLossMessage").text("You won!");
            $("#winCounter").text(winCounter);
            setTimeout(gameRestart, 500);
        }
    }
    //button click settings
    $("#redBtn").on("click", function() {
        playerScore = playerScore + redValue;
        scoreComparison();
    });

    $("#blueBtn").on("click", function() {
        playerScore = playerScore + blueValue;
        scoreComparison();
    });

    $("#yellowBtn").on("click", function() {
        playerScore = playerScore + yellowValue;
        scoreComparison()
    });

    $("#greenBtn").on("click", function() {
        playerScore = playerScore + greenValue;
        scoreComparison()
    });

});