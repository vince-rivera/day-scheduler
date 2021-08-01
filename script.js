var tasks = {};
//when page loads
//get data from localstorage
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {};
    }
//set the inputs text value according to their time slots
$(".text-area").on("click", "p", function() {
    var newTask = $(this)
    .text()
    .trim();

})
// add an onclick listener to all buttons
$(".saveBtn").on("click", function() {
    localStorage.setItem("NewTask", JSON.stringify(newTask));
})
//when buttons are clicked prevent default and call handleSaves functions

    //declare button in HTML with set value in accordance with timeslot
    //get the value from the event target (the button)
    //declare and input for each time slot with a unique id "timeAm-input"
    //set data to local storage
    //get the input value for the time slot associated with the button (using the event.target.value)





// $("#bttn").on("click", function(e)) {
//     e.preventdefault();
//     HandleSaves();
// }

// function HandleSaves(event) {
//     let hourName = event.target.value
//     let input = $(hourName + "-input").value();
//     localStorage.setItem(hourName, JSON.stringify(input))
// }
