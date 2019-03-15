function clothes(temp){
    let clothePieces="";
    if (temp>20) {
        clothePieces="shorts and t-shirt";
    } else if(temp<=20 && temp>=7){
        clothePieces="shirt and pants";
    } else if (temp<7 && temp >(-2)) {
        clothePieces="shirt, jacket and pants";
    } else if (temp<=-2) {
        clothePieces="double shirts, double pants and coat"
    }
    return clothePieces;
} 

const clothesToWear = clothes(-10);
console.log(clothesToWear);