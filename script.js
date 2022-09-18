var clock = 60;
var timeInt;
var incScore = 0;
var clickValue;
var lives = 3;

//operates the timer
function timerFunction() {
    timeInt = setInterval(function () {
        if (clock > 0) {
            --clock;
            document.querySelector("#clock").innerHTML = clock;
        }
        else {
            clearInterval(timeInt);
            document.querySelector("#pop-up").style.display = 'flex';
        }

    }, 1000)
}

// shows 110 bubbles on the screen and shows random values in each bubble
function bubbles() {
    var clutter = "";
    for (var i = 0; i < 110; i++) {
        var rn = Math.floor(Math.random() * 20)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#bottom").innerHTML = clutter;

}

// changes the value with random number and 
// you have to select that same value from bubble to increase your score
function toClick() {
    clickValue = Math.floor(Math.random() * 20)
    document.querySelector("#clickValue").textContent = clickValue

}

// increase your score
function increaseScore() {
    incScore = incScore + 10;
    document.querySelector("#score").textContent = incScore;
}

//decreases your live (if you click the wrong bubble)
function decreaseLive() {
    if (lives > 0) {
        lives--;
        document.querySelector("#lives").textContent = lives;
    }
}

// by clicking close, it reloads your game  
function close() {
    document.querySelector("#close").addEventListener("click", function () {
        window.location.reload();

    })
}


// store your score
function scoreStore() {
    document.querySelector("#bottom").addEventListener("click", function (dets) {
        // console.log(dets.target.textContent);
        if (Number(dets.target.textContent) === clickValue) {
            increaseScore();
            toClick();
            bubbles();

        }
        else {
            decreaseLive();
            if(lives === 0){
                document.querySelector("#pop-up").style.display = 'flex';
            }

        }
    })
}


// calling function
bubbles();
timerFunction();
toClick();
close();
scoreStore();



