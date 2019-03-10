var dogYearOfBirth=2005;
var dogYearFuture=2020;
var dogYear=dogYearFuture - dogYearOfBirth;
var shouldShowResultInDogYears=false;
if (shouldShowResultInDogYears){
    dogYear*=7;
    console.log("your dog will be "+dogYear+" dog years old in "+dogYearFuture)
}
else{
    console.log("your dog will be "+dogYear+" human years old in "+dogYearFuture)
}