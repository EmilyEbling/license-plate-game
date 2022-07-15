$(document).ready(function () {
    if (localStorage.getItem("states") == null) {
        localStorage.setItem("states", JSON.stringify(statesDic));
    }
    if (localStorage.getItem("score") == null) {
        localStorage.setItem("score", score);
    }
    statesDic = JSON.parse(localStorage.getItem("states"));
    score = localStorage.getItem("score");
    document.getElementById('score').innerHTML = "Total: " + score;
    createButtons(JSON.parse(localStorage.getItem("states")));
});

function createButtons(states) {
    for (const state in states) {
        var button = document.createElement('button');
        button.name = state;
        button.id = state;
        button.value = state;
        button.innerHTML = state;
        button.onclick = function () {
            var updateStates = JSON.parse(localStorage.getItem("states"));
            if (!updateStates[state]) {
                statesDic[state] = true;
                document.getElementById(state).style.backgroundColor = '#a3b18a';
                //document.getElementById(state).style.backgroundImage = "linear-gradient(rgba(226, 228, 230, .8), rgba(226, 228, 230, .8)), url('{ny.jpg'})";
                //document.getElementById(state).style.backgroundSize = "auto";
                localStorage.setItem("states", JSON.stringify(statesDic));
                updateScore(true);
            }
            else {
                statesDic[state] = false;
                document.getElementById(state).style.backgroundColor = '#f1f3f5';
                localStorage.setItem("states", JSON.stringify(statesDic));
                updateScore(false);
            }
        };

        var br = document.createElement('br');

        var container = document.getElementById('buttons');
        container.appendChild(button);
        container.appendChild(br);

        if (states[state]) {
            document.getElementById(state).style.backgroundColor = '#a3b18a';
        }
    }
}

function clearStorage() {
    if (confirm('Are you sure you want to start a new trip? All state data will be cleared.')) {
        localStorage.clear();
        console.log(localStorage.getItem("states"))
        console.log(localStorage.getItem("score"))
        location.reload();
    } 
    else {
        console.log('Clear canceled.');
    }
}

function updateScore(direction) {
    score = parseInt(localStorage.getItem("score"));
    if (direction) {
        score = score + 1;
    }
    else {
        score = score - 1;
    }
    document.getElementById('score').innerHTML = "Total: " + score;
    localStorage.setItem("score", score);
}

function searchList() {
    var search = document.getElementById('searchbar');
    var filter = search.value.toUpperCase();
    var buttons = document.getElementById('buttons');
    var button = buttons.getElementsByTagName('button');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < button.length; i++) {
        txtValue = button[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            button[i].style.display = "";
        } else {
            button[i].style.display = "none";
        }
    }
}

function addPlate() {
    var states = JSON.parse(localStorage.getItem("states"));
    var newState = document.getElementById('add').value;
    states[newState] = true;
    localStorage.setItem("states", JSON.stringify(states));
    updateScore(true);
    location.reload();
}

var score = 0;

var statesDic = {
    "Alabama": false,
    "Alaska": false,
    "Arizona": false,
    "Arkansas": false,
    "California": false,
    "Colorado": false,
    "Connecticut": false,
    "Delaware": false,
    "Florida": false,
    "Georgia": false,
    "Hawaii": false,
    "Idaho": false,
    "Illinois": false,
    "Indiana": false,
    "Iowa": false,
    "Kansas": false,
    "Kentucky": false,
    "Louisiana": false,
    "Maine": false,
    "Maryland": false,
    "Massachusetts": false,
    "Michigan": false,
    "Minnesota": false,
    "Mississippi": false,
    "Missouri": false,
    "Montana": false,
    "Nebraska": false,
    "Nevada": false,
    "New Hampshire": false,
    "New Jersey": false,
    "New Mexico": false,
    "New York": false,
    "North Carolina": false,
    "North Dakota": false,
    "Ohio": false,
    "Oklahoma": false,
    "Oregon": false,
    "Pennsylvania": false,
    "Rhode Island": false,
    "South Carolina": false,
    "South Dakota": false,
    "Tennessee": false,
    "Texas": false,
    "Utah": false,
    "Vermont": false,
    "Virginia": false,
    "Washington": false,
    "West Virginia": false,
    "Wisconsin": false,
    "Wyoming": false,
    "Washington D.C.": false
}