var currentDay = document.getElementById('currentDay');
var timeBlock = document.getElementById('time-block');
var hour = document.getElementsByClassName('hour');
var userInput = document.getElementsByClassName('input');
const nine = document.querySelector('#nine').innerText;
const ten = document.querySelector('#ten');
const eleven = document.querySelector('#eleven');
const twelve = document.querySelector('#twelve').textContent;
const thirteen = document.querySelector('#thirteen');
const fourteen = document.querySelector('#fourteen');
const fifteen = document.querySelector('#fifteen');
const sixteen = document.querySelector('#sixteen');
const seventeen = document.querySelector('#seventeen');

console.log(moment().calendar());
console.log(moment().format('HH'));


currentDay.innerText = moment().format("MMM Do YYYY");

var currentHour = moment().format('LT');

var currentTime = parseInt(currentHour);
var firstHour = parseInt(hour);
var secondHour = parseInt(ten);
var thirdHour = parseInt(eleven);
var fourthHour = parseInt(twelve);
var fifthHour = parseInt(thirteen);
var sixthHour = parseInt(fourteen);
var seventhHour = parseInt(fifteen);
var eighthHour = parseInt(sixteen);
var ninthHour = parseInt(seventeen);

console.log(fourthHour);
console.log(twelve);
console.log(currentTime);

for (i = hour; i > 24; i++) {
    if (hour > currentHour) {
        $("input").addClass('future');
    } else if (hour == currentHour) {
        $("input").addClass('present');
    } else {
        $("input").addClass('past');
    }
}

$("saveBtn").click(function() {

});