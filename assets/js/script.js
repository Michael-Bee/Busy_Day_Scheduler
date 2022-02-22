//function that displays date in jumbotron
var currentDate = document.getElementById("currentDay");
var todaysDate = moment().format("MMMM Do, YYYY");
currentDate.textContent = todaysDate;


//function for save button to console log time and description, then save them in local storage in an array
    

// window.localStorage.setITem(id,description)
//     var Hour = {
//         id:"09",
//         description: "saved text",
//         }

//     window.localStorage.setItem('hour', JSON.stringify(Hour));

//function that constantly displays what's saved in local storage in each description box
//could possibly do this with for loop to avoid wet code
    
    // $("#08 .description").val(LocalStorage.getItem(Hour, id));
    // $("#09 .description").val(LocalStorage.getItem(Hour, id));
    // $("#10 .description").val(LocalStorage.getItem(Hour, id));
    // $("#11 .description").val(LocalStorage.getItem(Hour, id));
    // $("#12 .description").val(LocalStorage.getItem(Hour, id));
    // $("#13 .description").val(LocalStorage.getItem(Hour, id));
    // $("#14 .description").val(LocalStorage.getItem(Hour, id));
    // $("#15 .description").val(LocalStorage.getItem(Hour, id));
    // $("#16 .description").val(LocalStorage.getItem(Hour, id));
    // $("#17 .description").val(LocalStorage.getItem(Hour, id));


//function that sets background color in timeBlock
// function rowColor() {
//     var hourNow = moment().hour();
//     console.log(hourNow);

//     (Hour).each(function()) {
//         var timeBlock = Hour.id
//         console.log(timeBlock, hourNow)
        
//         if timeBlock < hourNow {
//             $(this).addClass("past");
//             $(this).removeClass("present");
//             $(this).removeClass("future");
//         } else if timeBlock === hourNow {
//             $(this).removeClass("past");
//             $(this).addClass("present");
//             $(this).removeClass("future");
//         } else {
//             $(this).removeClass("past");
//             $(this).removeClass("present");
//             $(this).addClass("future");
//         }
//     }
// }
// rowColor();