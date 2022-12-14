var hourBeginning = moment().startOf('day').add(7,'h');

var totalHours = 11;

var currentHour = moment().format('H');

var timeTableElement;
var currentState;


function displayToday() {

    var today = moment().format("dddd, MMMM Do, HH:mm A");
    $('#currentDay').text(today);
}

function fillTimeTable() {

    for (var hour = 0; hour < totalHours; hour++) { 
        var realHour = hour + 8;

        timeTableElement = hourBeginning.add(1,'h').format('HH:mm A');

        if (currentHour == realHour) {
            currentState = '.present';
        } else if (currentHour < realHour) {
            currentState = '.past';
        } else {
            currentState = '.future';
        }

        var appendBlock = 
            `<div id="hour-${realHour}" class="row time-block ${currentState}">
                <div class="col-md-1 hour">${timeTableElement}</div>
                <textarea class="col-md-10 description ${realHour}"></textarea>
                <button class="btn saveBtn col-md-1">
                    <i class="fas fa-save"></i>
                </button>
            </div>`;

        $(".container").append(appendBlock);

    }

    loadSchedule();
}

function saveSchedule() {

    var keyName = $(this).parent().attr('id');
    var keyValue = $(this).parent().children().eq(1).val();

    localStorage.setItem(keyName, keyValue);
}


function loadSchedule() {

    for (var hour = 0; hour < totalHours; hour++) {
        var realHour = hour + 8;
        var loadedSchedule = localStorage.getItem(`hour-${realHour}`);

        $(`.${realHour}`).val(loadedSchedule);
    }

}


displayToday();
fillTimeTable();
$('.saveBtn').on('click', saveSchedule);


setInterval(function() {
    displayToday();
}, 60000);


setInterval(function() {
    fillTimeTable();
}, 600000);
