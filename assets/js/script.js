document.querySelector("#currentDay").innerText = moment().format('dddd MMMM Do YYYY, h:mm:ss a');

const taskInput = document.querySelectorAll("#task");
const saveBtn = document.querySelectorAll(".save-btn");

const storedInput = localStorage.getItem(taskInput);

localStorage.setItem(taskInput);


/* Code not working
$(document).ready(function () {

    storeTask = function () {
        $(".task-form").saveStorage();
    };

    $(".save-btn").on("click", storeTask());


});
*/

/* Code not working
storeTask = function () {
    localStorage.setItem("taskInput", taskInput.value);
};

$(document).ready(function () {

    $(".save-btn").on("click", storeTask());

});
*/