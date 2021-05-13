let player,
    computer,
    playerIcon,
    computerIcon,
    winCombinations = [
  ['paper', 'rock'],
  ['rock', 'scissors'],
  ['scissors', 'paper']  
];


//setup the game
function playGame(choice) {
  $('#pick').hide();
  $('#game').show();
  player = choice;
   
  $('.fight').show();
  $('.playAgain').hide();
  $('#computer').html(getBackLizardHands('', 'Computer'));
  $('#player').html(getBackLizardHands('reverse', 'Player'));
}

function playAgain() {
  $('#pick').show();
  $('#game').hide();
  $('#win').text('');
}

function getComputer() {
  let min = 0;
  let max = 2;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  switch (randomNumber) {
    case 0:
        computer = "rock";
        break;
    case 1:
        computer = "paper";
        break;
    case 2:
        computer = "scissors";
  }
  return buildIcon(computer, 'Computer');
}

function buildIcon(icon, player) {
  completeIcon = "<h3 class='player'>" + player + "</h3>" +
    "<i class='fa fa-hand-" +
    icon + "-o' aria-hidden='true'></i>";
  completeIcon += "<h3>" + icon + "</h3>" 
  return completeIcon;
}

function getBackLizardHands(reverse,player) {
  var lizardHand = "<h3 class='player'>" + player + "</h3>" +
      "<i class='fa fa-hand-lizard-o " + reverse +
      "' aria-hidden='true'></i>";
  console.log(lizardHand);
  return lizardHand;
}

function checkWin() {
  if (player == computer) {
    $('#win').text('Tie');
  } else {
    for (var i = 0; i < winCombinations.length; i++) {
      if (winCombinations[i][0] == player) {
        if (winCombinations[i][1] == computer) {
          $('#win').text('Player Won');
        } else {
          $('#win').text('Computer Won');
        }
      }
    }
    
  }
  
}

function fight() {
 
  playerIcon = buildIcon(player,'Player');
  $('#player').html(playerIcon).css('textTransform', 'capitalize');
  computerIcon = getComputer();
  $('#computer').html(computerIcon).css('textTransform', 'capitalize');
  $('.fight').hide();
  $('.playAgain').show();
  checkWin();
  
}
