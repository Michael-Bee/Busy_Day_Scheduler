//function that displays date in jumbotron
var currentDate = document.getElementById("currentDay");
var todaysDate = moment().format("MMMM Do, YYYY");
currentDate.textContent = todaysDate;


/*
//function for save button to console log time and description, then save them in local storage in an array

// window.localStorage.setItem(id,description)
//     var Hour = {
//         id:"09",
//         description: "saved text",
//         }

// window.localStorage.setItem('hour', JSON.stringify(Hour));



//function that constantly displays what's saved in local storage in each description box
//could possibly do this with for loop to avoid wet code
    
    // $("#08 .description").val(LocalStorage.getItem(Hour, id, description));
    // $("#09 .description").val(LocalStorage.getItem(Hour, id, description));
    // $("#10 .description").val(LocalStorage.getItem(Hour, id, description));
    // $("#11 .description").val(LocalStorage.getItem(Hour, id, description));
    // $("#12 .description").val(LocalStorage.getItem(Hour, id, description));
    // $("#13 .description").val(LocalStorage.getItem(Hour, id, description));
    // $("#14 .description").val(LocalStorage.getItem(Hour, id, description));
    // $("#15 .description").val(LocalStorage.getItem(Hour, id, description));
    // $("#16 .description").val(LocalStorage.getItem(Hour, id, description));
    // $("#17 .description").val(LocalStorage.getItem(Hour, id, description));

//var hourDescription = document.getElementById('description);
//hourDescription.textContent = Hour.description



// function that sets background color in timeBlock
function rowColor() {
    var hourNow = moment().hour();
    console.log(hourNow);

    var timeBlock = /*row.id*/
//     console.log(timeBlock)
        
//     if (timeBlock < hourNow) {
//         /*row textarea*/.addClass("past");
//         /*row textarea*/.removeClass("present");
//         /*row textarea*/.removeClass("future");
//     } else if (timeBlock === hourNow) {
//         /*row textarea*/.removeClass("past");
//         /*row textarea*/.addClass("present");
//         /*row textarea*/.removeClass("future");
//     } else {
//         /*row textarea*/.removeClass("past");
//         /*row textarea*/.removeClass("present");
//         /*row textarea*/.addClass("future");
//     }
// }

// rowColor();
