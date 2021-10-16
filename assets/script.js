var currentDay = document.getElementById('currentDay');
var timeBlock = document.getElementById('time-block');
var hour = document.getElementsByClassName('hour');
var userInput = document.getElementsByClassName('input');
var military = document.getElementsByClassName('military');

var hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var hourLength = hourArray.length;

for (i = 0; i < hourLength; i++) {
    $('<div class="military" />').text(hourArray[i]).appendTo('body');
}

currentDay.innerText = moment().format("MMM Do YYYY");

var currentHour = moment().format('LT');


var currentTime = parseInt(currentHour);
var militaryHour = parseInt(hourArray[i]);

console.log(militaryHour);
console.log(currentTime);

if (militaryHour > currentHour) {
    $(".input").addClass('future');
} else if (militaryHour == currentHour) {
    $(".input").addClass('present');
} else {
    $(".input").addClass('past');
}


$(".saveBtn").click(function(event) {
    event.preventDefault();
    localStorage.setItem("task", userInput.innerText);
    JSON.stringify("task");
    console.log(localStorage);
    userInput.innerText = localStorage.getItem('task');
});

