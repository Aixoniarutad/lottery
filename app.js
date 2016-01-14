(function() {

	var startGame = function(gameAmount, gameSize, fn){
		var gameResult = [0, 0, 0, 0, 0, 0];

		for(var i=0; i < gameAmount; i++){
			var playerNumbers = generate(gameSize);
			var winningNumbers = generate(gameSize);
			var matched = checkNumbers(playerNumbers, winningNumbers, 0);
				gameResult[matched]++;
		}
		return fn(gameResult);
	}

	var generate = function(count) {
		var numbers = new Array(count);
		for(var i=0; i < count; i++)
			numbers[i] = Math.floor((Math.random() * 69) + 1);
		return numbers;
	}

	var checkNumbers = function(player, winning, total) {
		for(i in player){
			for(n in winning){
				if(player[i]===winning[n]) {
					player.splice(i, 1);
					winning.splice(n, 1);
					return checkNumbers(player, winning, ++total);
				}
			}
		}
		return total;
	}

	// Start
	document.getElementById('start').addEventListener('click', function() {
		var gameAmount = document.getElementById('game_amount').value;
		var gameSize = document.getElementById('game_size').value;

		startGame(gameAmount, gameSize, function(result) {
			for(i in result)
				document.getElementById('match-'+i).innerHTML = result[i];

			return document.getElementById('total_played').innerHTML = gameAmount;
		});
	});
})();