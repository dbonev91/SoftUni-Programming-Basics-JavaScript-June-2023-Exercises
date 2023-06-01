function operationsBetweenNumbers (inputStringArray) {
  const firstNumberInput = Number(inputStringArray[0]);
  const secondNumberInput = Number(inputStringArray[1]);
  const operatorInput = inputStringArray[2];

  const PLUS_OPERATOR = '+';
  const MINUS_OPERATOR = '-';
  const MULTIPLY_OPERATOR = '*';
  const SUBSTRACT_OPERATOR = '/';
  const MODULE_OPERATOR = '%';

  if (operatorInput === PLUS_OPERATOR) {
    const result = firstNumberInput + secondNumberInput;
    let evenOrOdd;

    if (result % 2 === 0) {
      evenOrOdd = 'even';
    } else {
      evenOrOdd = 'odd';
    }

    console.log(`${firstNumberInput} ${operatorInput} ${secondNumberInput} = ${result} - ${evenOrOdd}`);
  }

  if (operatorInput === MINUS_OPERATOR) {
    const result = firstNumberInput - secondNumberInput;
    let evenOrOdd;

    if (result % 2 === 0) {
      evenOrOdd = 'even';
    } else {
      evenOrOdd = 'odd';
    }

    console.log(`${firstNumberInput} ${operatorInput} ${secondNumberInput} = ${result} - ${evenOrOdd}`);
  }

  if (operatorInput === MULTIPLY_OPERATOR) {
    const result = firstNumberInput * secondNumberInput;
    let evenOrOdd;

    if (result % 2 === 0) {
      evenOrOdd = 'even';
    } else {
      evenOrOdd = 'odd';
    }

    console.log(`${firstNumberInput} ${operatorInput} ${secondNumberInput} = ${result} - ${evenOrOdd}`);
  }

  if (operatorInput === SUBSTRACT_OPERATOR) {
    if (secondNumberInput === 0) {
      console.log(`Cannot divide ${firstNumberInput} by zero`);
    } else {
      const result = firstNumberInput / secondNumberInput;
      console.log(`${firstNumberInput} ${operatorInput} ${secondNumberInput} = ${result.toFixed(2)}`);
    }
  }

  if (operatorInput === MODULE_OPERATOR) {
    if (secondNumberInput === 0) {
      console.log(`Cannot divide ${firstNumberInput} by zero`);
    } else {
      const result = firstNumberInput % secondNumberInput;
      console.log(`${firstNumberInput} ${operatorInput} ${secondNumberInput} = ${result}`);
    }
  }
}