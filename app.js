(function() {

	var play = function(amount, callback) {
		var playerNumbers = generate(amount);
		var winningNumbers = generate(amount);
		document.getElementById('playerNumbers').innerHTML = playerNumbers;
		document.getElementById('winningNumbers').innerHTML = winningNumbers;

		callback(compare(playerNumbers, winningNumbers, 0));
	}

	var generate = function(count) {
		var numbers = [];
		for(var i = 0; i < count; i++)
			numbers.push(Math.floor((Math.random() * 69) + 1));
		
		return numbers;
	}

	var compare = function(playerNumbers, winningNumbers, matched) {

		for(i in playerNumbers){
			for(n in winningNumbers){
				if(playerNumbers[i]===winningNumbers[n]) {
					playerNumbers.splice(i, 1);
					winningNumbers.splice(n, 1);
					return compare(playerNumbers, winningNumbers, ++matched);
				}
			}
		}

		if(matched==5)
			alert('JACKPOT, got '+matched+'!');

		return matched;
	}

	// Start
	document.getElementById('start').addEventListener('click', function() {
		var gameAmount = document.getElementById('game_amount').value;
		var gameSize = document.getElementById('game_size').value;
		var gameResult = [0, 0, 0, 0, 0, 0];

		for(var i = 0; i < gameAmount; i++){
			play(gameSize, function(response) {
				gameResult[response]++;
			});
		}
		document.getElementById('numGames').innerHTML = gameAmount;
		document.getElementById('match-0').innerHTML = gameResult[0];
		document.getElementById('match-1').innerHTML = gameResult[1];
		document.getElementById('match-2').innerHTML = gameResult[2];
		document.getElementById('match-3').innerHTML = gameResult[3];
		document.getElementById('match-4').innerHTML = gameResult[4];
		document.getElementById('match-5').innerHTML = gameResult[5];
	});
})();