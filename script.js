// save reference to important DOM elements
var timeDisplayEl = $('#currentDay');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('dddd, MMM Do');
    timeDisplayEl.text(rightNow);
  }
  displayTime();



//   for each card
// if moment > hour
// input background color:gray
// if moment == hour
// input background color: red
// if moment < hour
// input background color: green

// save button - stores input field and dislays it there
//  "Appointment Added to localstorage checkmark" above start of schedule