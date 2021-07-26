// Set current time and update continuously 
function dateTime() {
    timeNow = document.querySelector("#currentDay").innerText = moment().format('dddd MMMM Do YYYY, h:mm a');
    setTimeout(function () {
        dateTime();
    }, 1000);
}
dateTime();

// Pull saved user input from local storage if there is any
let planArr = [];
let savedPlans = JSON.parse(localStorage.getItem("userInput"));

if (savedPlans !== null) {
    planArr = savedPlans;
}

// Build time blocks by creating elements and appending them
for (i = 9; i < 18; i++) {

    let rowEl = $("<form>");
    rowEl.attr({
        "data-hour": i,
        "id": "row-" + i,
        "index": i - 9
    })

    rowEl.addClass("row");

    $(".container").append(rowEl);

    let hourEl = $("<div>");
    hourEl.addClass("hour col-2 col-md-1");

    let hourText = moment(i, "H").format("hA");
    hourEl.text(hourText);
    rowEl.append(hourEl);

    let inputText = $("<input>");
    inputText.attr({
        "type": "text",
        "placeholder": "Enter a task here"
    });
    inputText.addClass("description col-8 col-md-10");

    // Add a class for colour change depending on hourNow 
    let hourNow = moment().format("H");

    if (savedPlans !== null) {
        inputText.val(savedPlans[i - 9]);
    }
    if (hourNow == i) {
        inputText.addClass("present");
    } else if (hourNow > i) {
        inputText.addClass("past");
    } else {
        inputText.addClass("future");
    }
    rowEl.append(inputText);

    let saveBtn = $("<button>");
    saveBtn.addClass("saveBtn col-2 col-md-1");
    saveBtn.text("Save");
    rowEl.append(saveBtn);
}

// Save user input into local storage as an array
$("button").on("click", function (event) {
    event.preventDefault();
    index = $(this).parent().attr("index");
    userInput = $(this).prev().val()
    planArr[index] = userInput;
    localStorage.setItem("userInput", JSON.stringify(planArr));
})