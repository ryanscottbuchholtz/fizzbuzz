var startNum = prompt("Where would you like to start?");
var endNum = prompt("Where would you like to end?");
var numList = document.getElementById('number-output');

for (var i = startNum; i <= endNum; i++) {
  
  var listItem = document.createElement('li');
  listItem.innerText = i;
  
  if (i%3 === 0 && i%5 === 0) {
    listItem.innerText = 'FizzBuzz';
    numList.appendChild(listItem);
    }
  else if (i%5 === 0) {
    listItem.innerText = 'Buzz';
    numList.appendChild(listItem);
  }
  else if (i%3 === 0) {
    listItem.innerText = 'Fizz';
    numList.appendChild(listItem);
  }
  else
    numList.appendChild(listItem);
  }