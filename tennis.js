function RulesFirstPart() {
}

RulesFirstPart.prototype.isDeuce = function(player_one, player_two) {
	return false;
}

RulesFirstPart.prototype.isAdv = function(player_one, player_two) {
	return false;
}

RulesFirstPart.prototype.getWinner = function(player_one, player_two) {
	if (player_one.score > 3)
  {
		return player_one;
	}

	if (player_two.score > 3)
  {
		return player_two;
	}
}

function RulesSecondPart() {

}

RulesSecondPart.prototype.isDeuce = function(player_one, player_two) {
  return player_one.score == player_two.score;
}

RulesSecondPart.prototype.isAdv = function(player_one, player_two) {
	return Math.abs(player_one.score - player_two.score) < 2;
}

RulesSecondPart.prototype.getWinner = function(player_one, player_two) {
	if (player_one.score - player_two.score == 2)
  {
		return player_one;
	}

	if (player_one.score - player_two.score == -2)
  {
		return player_two;
	}
}

function Game(player_one, player_two) {
	this.player_one = player_one;
	this.player_two = player_two;
  this.scores = [0, 15, 30, 40, '40 adv'];
  this.rules = new RulesFirstPart();
}

Game.prototype.getScore = function() {
    if (this.getWinner() == null)
    {
        return this.scores[this.player_one.score] + ' - ' + this.scores[this.player_two.score];
    }
    return this.getWinner().name + ' winner';
}

Game.prototype.isDeuce = function() {
	return this.rules.isDeuce(this.player_one, this.player_two);
}

Game.prototype.isAdv = function() {
	return this.rules.isAdv(this.player_one, this.player_two);
}

Game.prototype.getWinner = function() {
	return this.rules.getWinner(this.player_one, this.player_two);
}

Game.prototype.updateGameRules = function() {
  if (this.player_one.score == 3 && this.player_two.score == 3 && this.rules instanceof RulesFirstPart)
  {
    this.rules = new RulesSecondPart();
  }
}

Game.prototype.playerOneWonBall = function() {
    this.player_one.score++;

    this.updateGameRules();
}

Game.prototype.playerTwoWonBall = function() {
    this.player_two.score++;

    this.updateGameRules();
}

function Player(){
	this.name;
	this.score = 0;
}

Player.prototype.getScoreIndex = function(){
	return this.score;
}
