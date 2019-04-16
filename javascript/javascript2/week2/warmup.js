

let Text = setTimeout(timeOut, 2500);
function timeOut() {
    console.log("Called after 2.5 seconds");
}


function logText1(delay, stringToLog) {
    let text2 = setTimeout(timeFx, delay);
    function timeFx() {
        console.log(stringToLog);
    }
}

logText1(5500, 'Called after 5.5 seconds');

let button = document.getElementById("btn");
button.addEventListener('click',function(){
    logText1(3500,'called after 3.5 seconds');
})
let textDisplay=document.getElementById('planet');
function earthFx() {
    textDisplay.innerHTML=('This is the Earth');
}
function saturnFx() {
    textDisplay.innerHTML=('This is the Earth');
}
function thirdFx(planetLogFunction) {
    planetLogFunction();
}
thirdFx(saturnFx);
thirdFx(earthFx);

let locButton= document.getElementById("location");
locButton.addEventListener('click', function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    locButton.innerHTML = "Geolocation is not supported by this browser.";
  }
    }
)

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude + 
  "\n Longitude: " + position.coords.longitude); 
}

function runAfterDelay(delay, callback) {
    let Fx = setTimeout(callback, delay); 
}
runAfterDelay(9000, earthFx);

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){
    if (shouldTellFunnyJoke===true) {
        logFunnyJoke();
    } else if(shouldTellFunnyJoke===false){
        logBadJoke();
    }
}

function funnyJoke(){
    console.log("I told my girlfriend she drew her eyebrows too high. She seemed surprised")
}

function badJoke(){
    console.log("What did the pirate say when he turned 80 years old? Aye matey")
}

jokeCreator(false, funnyJoke, badJoke);
jokeCreator(true, funnyJoke, badJoke);