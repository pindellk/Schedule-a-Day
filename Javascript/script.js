
// Load content from local storage

// If the time block is in the past: gray
// Current: red
// Future: green
// use class $(".textarea") to modify colors


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

   $.each((moment().hour());


});


