let operator = prompt('Enter math operator');
let firstNumber = +prompt('Enter first number');
let secondNumber = +prompt('Enter second number');
let resault = null;

if (operator == null) {
	resault = 'You canseled operator';
} else if (!operator) {
	resault = 'Enter operator';
}

if (firstNumber == null) {
	resault = 'You canseled first number';
} else if (!firstNumber) {
	resault = 'Enter first number';
}

if (secondNumber == null) {
	resault = 'You canseled second number';
} else if (!secondNumber) {
	resault = 'Enter second number';
}

switch (operator) {
	case '+' : {
		resault = firstNumber + secondNumber;
	}
	break;
	case '-' : {
		resault = firstNumber - secondNumber;
	}
	break;
	case '*' : {
		resault = firstNumber * secondNumber;
	}
	break;
	case '/' : {
		resault = firstNumber / secondNumber;
	}
	break;

	default : {
		resault = 'Enter correct operator'
	}
}

alert(resault);