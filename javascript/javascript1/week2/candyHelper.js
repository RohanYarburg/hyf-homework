let boughtCandyPrices=[];
function addCandy(candyType, Weight){
    let price=0;
    if (candyType=="Sweet") {
        price=Weight*0.5;
    } else if (candyType=="Chocolate") {
        price=Weight*0.7;
    } else if (candyType=="Toffee") {
        price=Weight*1.1;
    } else if (candyType=="Chewing-gun") {
        price=weight*0.03;
    }        
    boughtCandyPrices.push(price);
}

let amountToSpend= Math.random()*100;

addCandy("Sweet",520);

function canBuyMoreCandy(){
    let totalPrice=0;
    for (let index = 0; index < boughtCandyPrices.length; index++) {
        totalPrice+=boughtCandyPrices[index];        
    }
    if (totalPrice<amountToSpend) {
        console.log("You can but more, so please do!");
    }
    else{
        console.log("Enough candy for you!");
    }
    console.log(totalPrice);

}
canBuyMoreCandy();
console.log(amountToSpend);
