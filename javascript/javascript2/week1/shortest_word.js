const danishWords = ['bil','plante','kaffe','bog','planetarium','0'];

function shortestWord(a){
    let word = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i].length<word.length) {
            word=a[i];
        }
    }
    console.log(word);
}

shortestWord(danishWords);