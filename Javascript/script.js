// Display current date to top of schedule
var currentDay = moment().format('dddd, MMMM Do');
$("#currentDay").text = currentDay;
$(".jumbotron").append(currentDay);

$(document).ready(function () {

    // Create event listener for save button icon
    $(".saveBtn").on("click", function () {
        var entry = $(this).siblings("textarea")[0];
        var hour = $(this).parent();
        var key = hour[0].id;
        localStorage.setItem(key, $(entry).val().trim());
    });

    $.each(localStorage, function (key, value) {
        $("#" + key).find("textarea").val(value);
    });

    // Modify hour block color based on current time
    $("textarea").each(function () {
        var currentHour = moment().hour();
        var hour = $(this).parent();
        var key = parseInt(hour[0].id.replace("hour-", ""));
        console.log(key);
        if (currentHour == key) {
            $(this).css("background-color", "red");
        };
        if (currentHour < key) {
            $(this).css("background-color", "green");
        };
        if (currentHour > key) {
            $(this).css("background-color", "gray");
        };    
    
    });

});


