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
    //java function for dates https://www.w3schools.com/jsref/jsref_getdate.asp
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
    //create variable that identifies each input and retrieve the data
    for (var i = 9; i < 18; i++) {
        var data = localStorage.getItem(i);
        if (data) document.getElementById(`textarea_${i}`).innerHTML = data;
        console.log(data);
    }
}
function highlightRows() {

}

function save(event) {
    //on event change id to extract the hour/number to correlate the save button id to correct text area.
    var hour = event.id.replace('saveBtn_', '');
    var text = document.getElementById(`textarea_${hour}`).value;
    localStorage.setItem(hour, text);
    console.log(text);
}