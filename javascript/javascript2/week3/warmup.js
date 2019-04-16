//                  Doubling of Number

const numbers = [1, 2, 3, 4];
let newNumbers = [];

function doubleOddNumbers(){
    newNumbers=numbers.filter(element=>(element % 2 !== 0)).map(x => x * 2);

    let text = document.getElementById('doublingNumbers');
    text.innerHTML=("The doubled numbers are : "+ newNumbers);
}

//                  Working With Movies
let years1980And1989= movies.filter(movie => movie.year>=1980 && movie.year<=1989);

console.log(years1980And1989);

let ratingArray = movies.map(movie => {
    if (movie.rating >= 7){
        movie.tag = 'Good';
    }
    else if (movie.rating >= 4 & movie.rating < 7 ){
        movie.tag = 'Average';
    }
    else if (movie.rating < 4){
        movie.tag = 'Bad';
    }
    return movie;
});

const higherThan6 = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);
console.log(higherThan6);

const keyword = movies.filter(movie => {
    let lowerCaseMovies = movie.title.toLowerCase();
    return lowerCaseMovies.includes('the') || lowerCaseMovies.includes('dog') || lowerCaseMovies.includes('who') || lowerCaseMovies.includes('is') || lowerCaseMovies.includes('not') || lowerCaseMovies.includes('a') || lowerCaseMovies.includes('man');;
});
console.log(keyword);