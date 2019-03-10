var height=10;
var weight=8;
var depth=10;
gardenSizeInM2=100;
var volumeInMeters= height * weight * depth;
var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
firstPrice=2500000;

if (housePrice<firstPrice){
    console.log("the house price is more than expensive")
}
else if (housePrice==firstPrice) {
    console.log("the house price is fine")
} else {
    console.log("the house price is cheap")
}