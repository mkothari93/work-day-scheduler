var currentHr = moment().format('H');
var timeBlockEl = $(".time-block");

//Diplay current day and date
$("#currentDay").append(moment().format('dddd - MMMM Do, YYYY'));

$(document).ready(function () {
    //Checks for the current hour
    timeBlockEl.each(function (){
        var currentTimeBlockHr = parseInt($(this).attr("id"));

        $(this).children(".description").val(localStorage.getItem(currentTimeBlockHr));

        //If the time block is equal to the current hour, add the class "present"
        if (currentTimeBlockHr == currentHr) {
            $(this, ".description").addClass("present")
        }
        //If the time block is less than to the current hour, add the class "past"
        if (currentTimeBlockHr < currentHr) {
            $(this, ".description").addClass("past")
        }
        //If the time block is greater than to the current hour, add the class "future"
        if (currentTimeBlockHr > currentHr) {
            $(this, ".description").addClass("future")
        }
    });

    //Save button function
    $(".saveBtn").click(function() {
        //Gets the Id value from the save button clicked
        var time = $(this).parent().attr("id");

        //Gets the description value from the save button clicked
        var task = $(this).siblings("textarea.description").val();

        //Stores the Id value and the description value into local storage
        localStorage.setItem(time, task);
    });
});
