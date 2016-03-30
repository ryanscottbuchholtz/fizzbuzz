var numList = document.getElementById('number-output');

// function isThisANumber(number) {
//   while (isNaN(number)) {
//     alert("Your input is not a number. Please try again.");
//   }
// }

function promptBegin () {
  startNum = prompt("Where would you like to start?");
  startNum = (parseInt(startNum));
    
    while (isNaN(startNum)) {
      alert("Your input is not a number. Please try again.");
      startNum = prompt("Where would you like to start?");
      startNum = (parseInt(startNum));
    }
}

function promptEnd () {
  endNum = prompt("Beginning number is " + startNum + "." + " Where would you like to end?");
  endNum = (parseInt(endNum));
    while (isNaN(endNum)) {
      alert("Your input is not a number. Please try again.");
      endNum = prompt("Beginning number is " + startNum + "." + " Where would you like to end?");
      endNum = (parseInt(endNum));
    }
}

function validateEndNum () {
  promptBegin();
  promptEnd();
  while (endNum <= startNum) {
    alert("This number must be greater than " + startNum);
    promptEnd();
  }
}

function fizzBuzz () {

  validateEndNum();

  for (var i = startNum; i <= endNum; i++) {

    var listItem = document.createElement('li');
    
    if (i%3 === 0 && i%5 === 0) {
      listItem.innerText = 'FizzBuzz';
    }
    else if (i%5 === 0) {
      listItem.innerText = 'Buzz';
    }
    else if (i%3 === 0) {
      listItem.innerText = 'Fizz';
    }
    else {
      listItem.innerText = i;
    }

    numList.appendChild(listItem);

  }
}

fizzBuzz();



