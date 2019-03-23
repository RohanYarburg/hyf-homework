const numberArray = [1,2,3,4,5,6,7,8,9,10];
const randomNumber = parseInt (Math.random() * 11);
for (let numbersToRemove = 0; numbersToRemove < numberArray.length; numbersToRemove++) {
    if ( randomNumber === numberArray[numbersToRemove] ) {
        delete numberArray[numbersToRemove];
        }    
}
console.log(numberArray);