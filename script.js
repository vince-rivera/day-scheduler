
//when page loads
//get data from localstorage
//set the inputs text value according to their time slots
$("#bttn").on("click", function(e)) {
    e.preventdefault();
    HandleSaves();
}
// add an onclick listener to all buttons
//when buttons are clicked prevent default and call handleSaves functions
function HandleSaves(event) {
    //declare button in HTML with set value in accordance with timeslot
    //get the value from the event target (the button)
    //declare and input for each time slot with a unique id "timeAm-input"
    //get the input value for the time slot associated with the button (using the event.target.value)
    let hourName = event.target.value
    let input = $(hourName + "-input").value();
    //set data to local storage
    localStorage.setItem(hourName, JSON.stringify(input))
}

