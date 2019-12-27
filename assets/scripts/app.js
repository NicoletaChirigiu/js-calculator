const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(usrInput.value);
}
// ++ asemanator cu parseInt or parseFloat string -> int , .tostring int-> string

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescrption = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescrption);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries[0]);
}

function calculateResult(calculationType) {
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE'
  ) {
    return;
  }
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initalResult, enteredNumber);
  writeToLog(calculationType, initalResult, enteredNumber, currentResult);
}

function ADD() {
  calculateResult('ADD');
}

function SUBTRACT() {
  calculateResult('SUBTRACT');
}

function MULTIPLY() {
  calculateResult('MULTIPLY');
}

function DIVIDE() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', ADD);
subtractBtn.addEventListener('click', SUBTRACT);
multiplyBtn.addEventListener('click', MULTIPLY);
divideBtn.addEventListener('click', DIVIDE);

// on a click executa-mi functia de mai sus
