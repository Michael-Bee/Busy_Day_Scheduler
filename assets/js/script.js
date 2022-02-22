//function that displays date in jumbotron
var currentDate = document.getElementById("currentDay");
var todaysDate = moment().format("MMMM Do, YYYY");
console.log(todaysDate);
currentDate.textContent = todaysDate;


//function for save button to console log time and description, then save them in local storage in an array
    

window.localStorage.setITem(id,description)
    var Hour = {
        id:"09",
        description: "saved text",
        }

    window.localStorage.setItem('hour', JSON.stringify(Hour));

//function that constantly displays what's saved in local storage in each description box
    
    08.description = textContent.getLocalStorage.idHour
    09.description = textContent.getLocalStorage.idHour
    10.description = textContent.getLocalStorage.idHour
    11.description = textContent.getLocalStorage.idHour
    12.description = textContent.getLocalStorage.idHour
    13.description = textContent.getLocalStorage.idHour
    14.description = textContent.getLocalStorage.idHour
    15.description = textContent.getLocalStorage.idHour
    16.description = textContent.getLocalStorage.idHour
    17.description = textContent.getLocalStorage.idHour




    //make function that sets background color in timeBlock

    var hourNow = moment().hour();
    console.log(hourNow);


    // (array of timeblocks).each(function){
    //     var timeBlock = pull hour id from array
        //  console.log(timeBlock, hourNow)
        
        // if timeBlock < hourNow {
        //    $(this).addClass("past");
        //    $(this).removeClass("present");
        //    $(this).removeClass("future");
        // } else if timeBlock === hourNow {
        //    $(this).removeClass("past");
        //    $(this).addClass("present");
        //    $(this).removeClass("future");
        // } else {
        //    $(this).removeClass("past");
        //    $(this).removeClass("present");
        //    $(this).addClass("future");
        // }
    //}