


//display current date when calendar page opens
//obtain date with moment formatting
let todaysDate = moment().format('dddd, MMMM Do');
//add text to p element, id=currentDay
$("#currentDay").append(todaysDate);



//on saveBtn click, save text to local storage
$(".saveBtn").on("click", function() {
//set DOM variable to text area content
let textArea = $(this).siblings(".textarea").val();
//set key variable to equal parent attribute representing hour of the day
let hour = $(this).parent().attr("id");
// save DOM var to local storage
localStorage.setItem(hour, textArea);
})

//load local storage values on window load
$(document).ready(function() {
    //set var for the hour div id to equal localStorage value
    let hour = localStorage.getItem("hour9");
    //set var for textarea id
    let hourEl = document.getElementById("9");
    //set innerHTML equal to localStorage value
    hourEl.innerHTML = hour;

    hour =localStorage.getItem("hour10");
    document.getElementById("10").innerHTML = hour;

    $("#11").val(localStorage.getItem("hour11"));
    $("#12").val(localStorage.getItem("hour12"));
    $("#13").val(localStorage.getItem("hour1"));
    $("#14").val(localStorage.getItem("hour2"));
    $("#15").val(localStorage.getItem("hour3"));
    $("#16").val(localStorage.getItem("hour4"));
    $("#17").val(localStorage.getItem("hour5"));
//FOUND THREE DIFFERENT WAYS TO GETITEM FROM LOCALSTORAGE
//IS THERE A FUNCTION TO MAKE THIS EASIER?
}) 


//function to audit time of day
let auditTime = function() {
    //set variable for time of day
    let timeNow = moment().hour();
    
    //use jquery .each to iterate over textarea ids
    $(".textarea").each(function() {
        //define variable to the id attribute
        let currentHour = $(this).attr("id");
        if (timeNow > currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present future");
        } else if (timeNow == currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past future");
        } else if (timeNow < currentHour) {
            $(this).addClass("future");
            $(this).removeClass("past present");
        }
    })
}

auditTime();





