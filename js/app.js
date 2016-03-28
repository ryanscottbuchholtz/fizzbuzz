var startNum = prompt("Where would you like to start?");
var endNum = prompt("Where would you like to end?");
var numList = document.getElementById('number-output');

for (var i = startNum | 0; i <= endNum | 0; i++) {
  
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