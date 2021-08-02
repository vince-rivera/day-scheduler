var d = new Date();
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//when page loads
//get data from localstorage
function setData() {
    getDate();
    getData();
    highlightRows();
}

function getDate() {
    //java function for dates
    var weekday = weekdays[d.getDay()];
    var month = months[d.getMonth()];
    var day = d.getDate();
    var dayEnding = "th";

    if (day === 1) dayEnding = "st";
    if (day === 2) dayEnding = "nd";
    if (day === 3) dayEnding = "rd";

    document.getElementById('currentDay').innerHTML = `${weekday}, ${month} ${day}${dayEnding}`;
}

function getData() {

}
function highlightRows() {
    
}
//declare button in HTML with set value in accordance with timeslot
//get the value from the event target (the button)
//declare and input for each time slot with a unique id "timeAm-input"
//set data to local storage
//get the input value for the time slot associated with the button (using the event.target.value)

