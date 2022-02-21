var currentDate = document.getElementById("currentDay");
var todaysDate = moment().format("MMMM Do, YYYY");


//function that displays date in jumbotron
console.log(todaysDate);
currentDate.textContent = todaysDate;


//make function for save button to console log time and description, then save them in local storage in an array
    //window.localStorage.setITem(id,description)
    //var Hour = {
    //    id:"0900",
    //  description: "saved text",
    //}
    //window.localStorage.setItem('hour', JSON.stringify(Hour));

//make function that constantly displays what's saved in local storage in each description box
    // hourDiv.description = textContent.getLocalStorage.idHour
    // repeat this for all of the hourDivs

//make function that sets background color in description area for past, present, future
    // if currentTime === currentHour {
    //     set hourDiv background to yellow highlight
    // } else if currentTime > currentHour{
    //     set hourDiv background to green highlight
    // } else {
    //     set hour Div background to lightgray
    // }

    var hourNow = moment().hour();
    console.log(hourNow);

    // (array of timeblocks).each(function){
    //     var hourBlock = pull hour id from array
        
        // if hourBlock < hourNow {
        //    $(this).addClass("past");
        //    $(this).removeClass("present");
        //    $(this).removeClass("future");
        // } else if hourBlock === hourNow {
        //    $(this).removeClass("past");
        //    $(this).addClass("present");
        //    $(this).removeClass("future");
        // } else {
        //    $(this).removeClass("past");
        //    $(this).removeClass("present");
        //    $(this).addClass("future");
        // }
    //}