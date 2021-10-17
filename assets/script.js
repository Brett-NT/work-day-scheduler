var currentDay = document.getElementById('currentDay');
var timeBlock = document.getElementById('time-block');
var hour = document.getElementById('hour');
var military = document.getElementsByClassName('military');
var tasks = [];

var hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var hourLength = hourArray.length;

$.each(hourArray, function (i, val) {
    $(".military div:eq(" + i + ")").text(val);

});

var loadTasks = function() {
  userInput = JSON.parse(localStorage.getItem("userInput"))};

currentDay.innerText = moment().format("MMM Do YYYY");

var currentHour = moment().format('HH');
var currentTime = parseInt(currentHour);

if (9 > currentTime) {
    $('.input1').addClass('future');
} else if (currentTime == 9) {
    $('.input1').addClass('present');
} else {
    $('.input1').addClass('past');
}
if (10 > currentTime) {
    $('.input2').addClass('future');
} else if (currentTime == 10) {
    $('.input2').addClass('present');
} else {
    $('.input2').addClass('past');
}
if (11 > currentTime) {
    $('.11').addClass('future');
} else if (currentTime == 11) {
    $('.11').addClass('present');
} else {
    $('.11').addClass('past');
}
if (12 > currentTime) {
    $('.12').addClass('future');
} else if (currentTime == 12) {
    $('.12').addClass('present');
} else {
    $('.12').addClass('past');
}
if (13 > currentTime) {
    $('.13').addClass('future');
} else if (currentTime == 13) {
    $('.13').addClass('present');
} else {
    $('.13').addClass('past');
}
if (14 > currentTime) {
    $('.14').addClass('future');
} else if (currentTime == 14) {
    $('.14').addClass('present');
} else {
    $('.14').addClass('past');
}
if (15 > currentTime) {
    $('.15').addClass('future');
} else if (currentTime == 15) {
    $('.15').addClass('present');
} else {
    $('.15').addClass('past');
}
if (16 > currentTime) {
    $('.16').addClass('future');
} else if (currentTime == 16) {
    $('.16').addClass('present');
} else {
    $('.16').addClass('past');
}
if (17 > currentTime) {
    $('.17').addClass('future');
} else if (currentTime == 17) {
    $('.17').addClass('present');
} else {
    $('.17').addClass('past');
}

var saveInput = function(event) {
    event.preventDefault();
    let userInput = {
        input1: document.getElementById('input1').value,
        input2: document.getElementById('input2').value,
        input3: document.getElementById('input3').value,
        input4: document.getElementById('input4').value,
        input5: document.getElementById('input5').value,
        input6: document.getElementById('input6').value,
        input7: document.getElementById('input7').value,
        input8: document.getElementById('input8').value,
        input9: document.getElementById('input9').value,
    }
    tasks.push(userInput);

    localStorage.setItem('tasksForToday', JSON.stringify(userInput));
}

$(".saveBtn").click(saveInput);

loadTasks();