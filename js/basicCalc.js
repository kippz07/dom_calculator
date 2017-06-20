document.addEventListener('DOMContentLoaded', function () {
  
	var numbers = document.getElementsByClassName('number');
	var operators = document.getElementsByClassName('operator');
	var clear = document.getElementsByClassName('clear')[0];
	var eq = document.getElementsByClassName('eq')[0];
	var display = document.getElementsByClassName('display')[0];

	var seven = numbers[0];
	var eight = numbers[1];
	var nine = numbers[2];
	var four = numbers[3];
	var five = numbers[4];
	var six = numbers[5];
	var one = numbers[6];
	var two = numbers[7];
	var three = numbers[8];
	var zero = numbers[9];

	var add = operators[3];
	var subtract = operators[1];
	var multiply = operators[2];
	var divide = operators[0];

	var answer = 0;

	numEV(one);
	numEV(two);
	numEV(three);
	numEV(four);
	numEV(five);
	numEV(six);
	numEV(seven);
	numEV(eight);
	numEV(nine);
	numEV(zero);

	opEV(add);
	opEV(subtract);
	opEV(multiply);
	opEV(divide);

	opEV(clear);
	opEV(eq);
	display.readOnly = true;

	function numEV (num) {
		num.addEventListener('click', function (event) {
			putOntoDisplay(num);
			if (answer === 0 || answer === '') {
				answer += num.value;
				console.log(parseInt(answer));
			}
		});
	}

	function opEV (op) {
		op.addEventListener('click', function (event) {
			console.log(op.value);
		});
	}

	function putOntoDisplay (number) {
		display.value = number.value;
	}

	function clearDisplay () {
		display.value = '';
	}

	

});

// one.addEventListener('click', function (event) {
	// 	console.log('one');
	// });
	// two.addEventListener('click', function (event) {
	// 	console.log('two');
	// });
	// three.addEventListener('click', function (event) {
	// 	console.log('three');
	// });
	// four.addEventListener('click', function (event) {
	// 	console.log('four');
	// });
	// five.addEventListener('click', function (event) {
	// 	console.log('five');
	// });
	// six.addEventListener('click', function (event) {
	// 	console.log('six');
	// });
	// seven.addEventListener('click', function (event) {
	// 	console.log('seven');
	// });
	// eight.addEventListener('click', function (event) {
	// 	console.log('eight');
	// });
	// nine.addEventListener('click', function (event) {
	// 	console.log('nine');
	// });