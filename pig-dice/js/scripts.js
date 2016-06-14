/*This file is for your custom js.  All yours*/

// Calls input from form-input.html

$(document).ready(function(){
  $("button#new-game").click(function(){
    newGame();
    $(".player-name").text("player1");
    $(".game-score").text("--");
    $(".opponent-score").text("--");
  });
  $("button#roll-the-dice").click(function(){
    var result = turnScore();
    if(result===1) {
      playerturn++;
      var nextPlayer=whosTurn();
      $(".roll-result").text("--");
      $(".temp-score").text("--");
      // var opponentScoreVariable = $(".game-score").text();
      $(".opponent-score").text($(".game-score").text());
      $(".game-score").text(nextPlayer.gameScore);
      $(".player-name").text(nextPlayer.name);
    } else{
      $(".roll-result").text(result);
      $(".temp-score").text(tempScore);
    }

  });
  $("button#hold").click(function(){
    var opponentScore=holdScore();
    var newPlayer=whosTurn();
    $(".roll-result").text("--");
    $(".temp-score").text("--");
    $(".game-score").text(newPlayer.gameScore);
    $(".opponent-score").text(opponentScore);
    $(".player-name").text(newPlayer.name);
  });
});

//business rules
var tempScore = 0;
var playerturn=1;
var player1 = new Player('player1', 0);
var player2 = new Player('player2', 0);
function Player(name, gameScore){
  this.name= name;
  this.gameScore= gameScore;
}

var newGame = function () {
  player1.gameScore = 0;
  player2.gameScore = 0;
  playerturn = 1;
}
var turnScore = function () {

  var roll = Math.floor(6*Math.random())+1
  if (roll === 1) {
    tempScore = 0;
  } else {
    tempScore += roll;
  }
  return roll;
}

var whosTurn=function(){
  if (playerturn%2===0) {
    return player2;
  } else {
    return player1;
  }
}

var holdScore = function() {
  playerturn++;
  if (playerturn%2===0){
    player1.gameScore+=tempScore;
    tempScore=0;
    return player1.gameScore;
  } else {
    player2.gameScore+=tempScore;
    tempScore=0;
    return player2.gameScore;
  }
}
