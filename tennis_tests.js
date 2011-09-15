module("one player", {
	setup: function() {
		player = new Player();
        player.name = 'Player one';
		player_two = new Player()
        player_two.name = 'Player two';
		game = new Game(player, player_two);
	}
});

test('Test name', function(){
	player.name = 'Pippo';
	equal('Pippo', player.name);
})

test('Test exception on score', function(){
	raises(function(){
		player.setScore('20');	
	});
})

test('Test hasWonGame', function(){
	
	ok(!game.getWinner());
		
	game.playerOneWonBall();
	
	ok(!game.getWinner());
	equal('15 - 0', game.getScore());
	
	game.playerOneWonBall();
	
	ok(!game.getWinner());
	equal('30 - 0', game.getScore());
		
	game.playerOneWonBall();
	
	ok(!game.getWinner());
	equal('40 - 0', game.getScore());
		
	game.playerOneWonBall();
	equal('Player one winner', game.getScore());
		
	ok(game.getWinner() == player);
})

module("two player", {
	setup: function() {
		player_one = new Player();
        player_one.name = 'Player one';
		player_two = new Player();
        player_two.name = 'Player two';
		
		game = new Game(player_one, player_two);
	}
});

test('Test deuce', function(){

	game.playerOneWonBall();
	equal('15 - 0', game.getScore());

	game.playerOneWonBall();
	equal('30 - 0', game.getScore());
		
	game.playerOneWonBall();
	equal('40 - 0', game.getScore());
	
	game.playerTwoWonBall();
	equal('40 - 15', game.getScore());
	
	game.playerTwoWonBall();
	equal('40 - 30', game.getScore());
	
	game.playerTwoWonBall();
	equal('40 - 40', game.getScore());
	
	ok(game.isDeuce());
		
	ok(!game.getWinner());
	
	game.playerOneWonBall();
    equal('40 adv - 40', game.getScore());
	
	ok(!game.getWinner());
	ok(!game.isDeuce());

	game.playerTwoWonBall();

	ok(!game.getWinner());
	ok(game.isDeuce());

    game.playerOneWonBall();
    game.playerOneWonBall();

	equal(player_one, game.getWinner());
})

test('Test player 2 wins', function(){

	game.playerOneWonBall();
	game.playerOneWonBall();
	game.playerOneWonBall();
	game.playerTwoWonBall();
	game.playerTwoWonBall();
	game.playerTwoWonBall();
	ok(game.isDeuce());

	ok(!game.getWinner());

	game.playerTwoWonBall();

	ok(!game.getWinner());
	ok(!game.isDeuce());

	game.playerOneWonBall();

	ok(!game.getWinner());
	ok(game.isDeuce());

    game.playerTwoWonBall();
    game.playerTwoWonBall();

	equal(player_two, game.getWinner());
})













