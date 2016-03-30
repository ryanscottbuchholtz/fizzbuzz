var numList = document.getElementById('number-output');

function promptBegin () {
  startNum = prompt("Where would you like to start?");
  startNum = startNum | 0;
}

function promptEnd () {
  endNum = prompt("Where would you like to end?");
  endNum = endNum | 0;
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



