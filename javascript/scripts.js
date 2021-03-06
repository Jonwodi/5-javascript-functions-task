/* Task 1
Create a function that will halve a given number.
  Task 2
Create a function that will multiply two numbers together and add 3.
Task 3
Create a function to calculate how many times 1000 needs to be halved to be less than 10.
You can use any functions you created from previous tasks.
  Task 4
Create a function that accepts an array of numbers and returns an array that has had all
values above a given number removed.
  Task 5
Create a function to determine the winner of this card game.
Two players are dealt five cards from a standard deck.The winner is the player with the best
Hand.Winning hands are based on the ranks only(ignore the suit) and are as follows (best
at the top):
Four of a kind: Four cards of the same rank.
Full House: Three cards of the same rank, and two cards of a different matching rank.
  Straight: Five cards in sequence.
Three of a kind: Three cards of the same rank.
Two pair: Two cards of a matching rank and another two cards of a different matching rank.
One pair: Two cards of a matching rank.
If both players have none of the above, it is a draw.
If both players have the same type of hand, it is a draw.
Your function should accept the names of both players and an array of integers
  (representing the rank, where A = 1, J = 11, Q = 12, K = 13) for each player’s hand.Your function
  should return the name of the winning player, or “draw” if there is no winner.You may write
other supporting functions. */


// Task 1
function halveNumber(numb1, numb2) {
  var numb1;
  var numb2;
  var totalNumber = numb1/ numb2;
  return totalNumber;
}


console.log(halveNumber(40,2));


// Task 2
function multiplyAndAddNumber(numb1, numb2, numb3) {
  var multiplyAndAdd = numb1 * numb2 + numb3;
  return multiplyAndAdd;
}

console.log(multiplyAndAddNumber(6,2,3));


//Task 3
function calculate() {
  var bigNumber = 1000;
  var smallNumber = 101;
  var newNumber = bigNumber / smallNumber;
  return newNumber;
}

console.log(calculate());

// Task 4
function numberArray() {
  var numberList = [1, 3, 5, 7, 9];
  return numberList[4];
}

console.log(numberArray());


//Task 5 
function cardGame() {
  var w = winner();
  console.log(w);
  var l = loser();
  console.log(l);
  var gameInfo = "card ranks: A = 1, J = 11, Q = 12, K = 13." + " Winning hands(in order of best to worst hand):" + " Four of a kind: Four cards of the same rank." + " Full House: Three cards of the same rank, and two cards of a different matching rank." + " Straight: Five cards in sequence." + " Three of a kind: Three cards of the same rank." + " Two pair: Two cards of a matching rank and another two cards of a different matching rank." + " One pair: Two cards of a matching rank." + " If both players have none of the above, it is a draw." + " If both players have the same type of hand, it is a draw. ";
  return gameInfo;
}

function winner() {
  var player1Hand = [1, 1, 1, 1, 11];
  var player1Name = "Sam";
  var winner = player1Name + " is the winner of the game" + " based on hand. He got a four of a kind hand: A, A, A, A, J or " + player1Hand;;
  return winner;
}

function loser() {
  var player2Hand = [12, 12, 11, 1, 13];
  var player2Name = "Carl";
  var loser = player2Name + " is the loser of the game" + " based on hand. He got a one pair hand: Q, Q, J, A, K or " + player2Hand;
  return loser;
}

console.log(cardGame());
