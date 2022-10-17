// Variables

// Time Variables
var timeDisplayEl = $('#currentDay');


// Event Variables
var form9 = $('#form9');
var eventBlock9 = $('#events9');
var eventText9;
var form10 = $('#form10');
var eventBlock10 = $('#events10');
var eventText10;
var form11 = $('#form11');
var eventBlock11 = $('#events11');
var eventText11;
var form12 = $('#form12');
var eventBlock12 = $('#events12');
var eventText12;
var form13 = $('#form13');
var eventBlock13 = $('#events13');
var eventText13;
var form14 = $('#form14');
var eventBlock14 = $('#events14');
var eventText14;
var form15 = $('#form15');
var eventBlock15 = $('#events15');
var eventText15;
var form16 = $('#form16');
var eventBlock16 = $('#events16');
var eventText16;
var form17 = $('#form17');
var eventBlock17 = $('#events17');
var eventText17;

// Coloring Variables
var times = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var timeBlocks = [$('#events9'), $('#events10'), $('#events11'), $('#events12'), $('#events13'), $('#events14'), $('#events15'), $('#events16'), $('#events17')];


// Functions

// Display the current date
function displayDate() {
  var currentDay = moment().format('dddd, MMM Do');
  timeDisplayEl.text(currentDay);
}

// Display the saved events
function displayEvents() {
  eventBlock9.text(localStorage.getItem('event9'));
  eventBlock10.text(localStorage.getItem('event10'));
  eventBlock11.text(localStorage.getItem('event11'));
  eventBlock12.text(localStorage.getItem('event12'));
  eventBlock13.text(localStorage.getItem('event13'));
  eventBlock14.text(localStorage.getItem('event14'));
  eventBlock15.text(localStorage.getItem('event15'));
  eventBlock16.text(localStorage.getItem('event16'));
  eventBlock17.text(localStorage.getItem('event17'));
}

// Color code the time blocks
function blockColor() {
  var currentHour = moment().format('k');
  for (var i = 0; i < times.length; i++) {
    if (times[i] > currentHour) {
      timeBlocks[i].removeClass('past');
      timeBlocks[i].addClass('future');
    } else if (times[i] < currentHour) {
      timeBlocks[i].removeClass('present');
      timeBlocks[i].addClass('past');
    } else if (times[i] == currentHour) {
      timeBlocks[i].removeClass('future');
      timeBlocks[i].addClass('present');
    }
  }
}

// Initial page loadout
function init() {
  displayDate();
  blockColor();
  displayEvents();
}

// Save the event text content
var storeEvent9 = function (event) {
  event.preventDefault();
  eventText9 = eventBlock9.val();
  localStorage.setItem('event9', eventText9);
}
var storeEvent10 = function (event) {
  event.preventDefault();
  eventText10 = eventBlock10.val();
  localStorage.setItem('event10', eventText10);
}
var storeEvent11 = function (event) {
  event.preventDefault();
  eventText11 = eventBlock11.val();
  localStorage.setItem('event11', eventText11);
}
var storeEvent12 = function (event) {
  event.preventDefault();
  eventText12 = eventBlock12.val();
  localStorage.setItem('event12', eventText12);
}
var storeEvent13 = function (event) {
  event.preventDefault();
  eventText13 = eventBlock13.val();
  localStorage.setItem('event13', eventText13);
}
var storeEvent14 = function (event) {
  event.preventDefault();
  eventText14 = eventBlock14.val();
  localStorage.setItem('event14', eventText14);
}
var storeEvent15 = function (event) {
  event.preventDefault();
  eventText15 = eventBlock15.val();
  localStorage.setItem('event15', eventText15);
}
var storeEvent16 = function (event) {
  event.preventDefault();
  eventText16 = eventBlock16.val();
  localStorage.setItem('event16', eventText16);
}
var storeEvent17 = function (event) {
  event.preventDefault();
  eventText17 = eventBlock17.val();
  localStorage.setItem('event17', eventText17);
}


// Event Listeners
form9.on('submit', storeEvent9);
form10.on('submit', storeEvent10);
form11.on('submit', storeEvent11);
form12.on('submit', storeEvent12);
form13.on('submit', storeEvent13);
form14.on('submit', storeEvent14);
form15.on('submit', storeEvent15);
form16.on('submit', storeEvent16);
form17.on('submit', storeEvent17);


// Color code the time blocks in real time
setInterval(blockColor, 1000);
// Display the current date in real time
setInterval(displayDate, 1000);
// Call initial page loadout when page is opened
init();
