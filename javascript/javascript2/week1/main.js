const books = [
    {   title:'Harry potter and the philosopher stone',
        id:'Harry potter and the philosopher stone'.toLowerCase().replace(/ /g,"_"),
        language:'English',
        author:'J.K Rowling'
    },
    {   title:'Harry potter and the chamber of secrets',
        id:'Harry potter and the chamber of secrets'.toLowerCase().replace(/ /g,"_"),
        language:'English',
        author:'J.K Rowling'
    },
    {   title:'Harry potter and the prisoner of azkaban',
        id:'Harry potter and the prisoner of azkaban'.toLowerCase().replace(/ /g,"_"),
        language:'English',
        author:'J.K Rowling'
    },
    {   title:'Harry potter and the goblet of fire',
        id:'Harry potter and the goblet of fire'.toLowerCase().replace(/ /g,"_"),
        language:'English',
        author:'J.K Rowling'
    },
    {   title:'Harry potter and the order of the phoenix',
        id:'Harry potter and the order of the phoenix'.toLowerCase().replace(/ /g,"_"),
        language:'English',
        author:'J.K Rowling'
    },
    {   title:'Harry potter and the half blood prince',
        id:'Harry potter and the half blood prince'.toLowerCase().replace(/ /g,"_"),
        language:'English',
        author:'J.K Rowling'
    },
    {   title:'Harry potter and the deathly hallows part 1',
        id:'Harry potter and the deathly hallows part 1'.toLowerCase().replace(/ /g,"_"),
        language:'English',
        author:'J.K Rowling'
    },
    {   title:'Harry potter and the deathly hallows part 2',
        id:'Harry potter and the deathly hallows part 2'.toLowerCase().replace(/ /g,"_"),
        language:'English',
        author:'J.K Rowling'
    },
    {   title:'Harry potter and the cursed child',
        id:'Harry potter and the cursed child'.toLowerCase().replace(/ /g,"_"),
        language:'English',
        author:'J.K Rowling'
    },
    {   title:'Fantastic beasts and where to find them',
        id:'Fantastic beasts and where to find them'.toLowerCase().replace(/ /g,"_"),
        language:'English',
        author:'J.K Rowling'
    }
]

function listArray(a){
    for (let i = 0; i < a.length; i++) {
        let h2=document.createElement('h2');
        h2.innerText= a[i].title;
        document.body.appendChild(h2);
        h2.setAttribute( 'id',a[i].id)

        let language=document.createElement('h4');
        language.innerText='Language: '+a[i].language;
        document.body.appendChild(language);

        let author=document.createElement('h4');
        author.innerText= 'author: '+a[i].author;
        document.body.appendChild(author);

        let cover= document.createElement('img');
        cover.setAttribute('id','cover'+i);
        document.body.appendChild(cover);

        }
}

listArray(books);

let images={
    'harry_potter_and_the_philosopher_stone': 'assets/philosopherStone.jpg',
    "harry_potter_and_the_chamber_of_secrets":"assets/chambreSecrets.jpeg",
    "harry_potter_and_the_prisoner_of_azkaban":"assets/prisonerAzkaban.jpeg",
    "harry_potter_and_the_goblet_of_fire":"assets/gobletFire.jpg",
    "harry_potter_and_the_order_of_the_phoenix":"assets/orderPhoenix.jpg",
    "harry_potter_and_the_half_blood_prince":"assets/halfPrince.jpg",
    "harry_potter_and_the_deathly_hallows_part_1":"assets/deathlyHallows1.jpg",
    "harry_potter_and_the_deathly_hallows_part_2":"assets/deathlyHallows2.jpg",
    "harry_potter_and_the_cursed_child ":"assets/cursedChild.jpg",
    "fantastic_beasts_and_where_to_find_them":"assets/fantasticBeasts.jpg"  
}

srcVal=Object.values(images);
 


function displayImages() {
    for (let i = 0; i < books.length; i++) {
        let display=document.getElementById('cover'+i);
        display.setAttribute('src',srcVal[i]);
        display.setAttribute('height','450px')
        display.setAttribute('width','300px')
    }
}

displayImages();