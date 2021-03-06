//function that displays date in jumbotron
var currentDate = document.getElementById("currentDay");
var todaysDate = moment().format("MMMM Do, YYYY");
currentDate.textContent = todaysDate;


//function for save button to save time and description in local storage
$(".saveBtn").on("click", function() {
        var timeBlock = $(this).parent().attr("id");
        var activity = $(this).siblings(".description").val();

    window.localStorage.setItem(timeBlock, activity);
});


//function that constantly displays what's saved in local storage in each corresponding textarea 
function loadMem() {
    for (var i = 8; i < 18; i++) {
        var hourRow = $("#" + i);
        hourRow.children(".description").val(window.localStorage.getItem("" + i));
    }
}
loadMem();


// function that sets background color in timeblocks
function rowColor() {
    var hourNow = moment().hour();

    for (var i = 8; i < 18; i++) {
        var hourRow = $("#" + i);

        if (i < hourNow) {
            hourRow.children(".description").addClass("past");
            hourRow.children(".description").removeClass("present");
            hourRow.children(".description").removeClass("future");
        } else if (i === hourNow) {
            hourRow.children(".description").removeClass("past");
            hourRow.children(".description").addClass("present");
            hourRow.children(".description").removeClass("future");
        } else {
            hourRow.children(".description").removeClass("past");
            hourRow.children(".description").removeClass("present");
            hourRow.children(".description").addClass("future");
        }
    }
}
rowColor();