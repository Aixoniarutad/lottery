(function() {
	// Start Game
	document.getElementById('start').addEventListener('click', function(){
		console.time('timelapse');
		var gameAmount = document.getElementById('game_amount').value,
			gameSize = document.getElementById('game_size').value,
			gameResult = [0, 0, 0, 0, 0, 0],
			winning = generate(gameSize);
			document.getElementById('jackpot').innerHTML=winning;
			document.getElementById('user_wins').innerHTML="";

		for(var i=0; i < gameAmount; i++)
			startGame(winning, function(matched){
				gameResult[matched]++;
			});

		return populate(gameResult);
	});

	var startGame = function(winning, cb){
		var player = generate(winning.length);
		var match = 0;

		for (var i = 0, len = winning.length; i < len; i++) {
		    if (player.indexOf(winning[i]) !== -1) {
		        match++;
		        player[player.indexOf(winning[i])]=winning[i].toString();
		    }
		}
		if(match>=5){
			var game = document.createElement('div');
				game.innerHTML=player;
				document.getElementById('user_wins').appendChild(game);
		}
		return cb(match);
	}

	var generate = function(count) {
		var numbers=[];
		for(var i=0; i < count; i++)
			numbers[i]=Math.floor((Math.random() * 69) + 1);
		return numbers;
	}
	var populate = function(result){
		for(i in result)
			document.getElementById('match-'+i).innerHTML = result[i];
			console.timeEnd('timelapse');
	}
})();