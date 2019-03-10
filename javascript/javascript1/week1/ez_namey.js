var firstWords = ["The","Big","Cute","Purple","Smart","Easy","Simple","Organic","Only","Your"];
var secondWords =["company","shop","friends","gathering","support","satisfaction","needs","A+","success","fun"];
const firstNumber= Math.floor(Math.random() * 10) + 0;
const secondNumber= Math.floor(Math.random() * 10) + 0;
var startupName= firstWords[firstNumber] + secondWords[secondNumber];
console.log("The startup: "+startupName+" contains "+startupName.length+" characters");