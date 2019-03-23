const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];

function addSongToDatabase(song) {
songDatabase.push(song)
}

addSongToDatabase({
    songId: 5,
    title: 'Hello',
    artist: 'Adele',
  });

function getSongByTitle(title){
    for (let index = 0; index < songDatabase.length; index++) {
        if (title === songDatabase[index].title) {
           return songDatabase[index]; 
        }
    }
}

const searchedSong = getSongByTitle('Blacker than black');

function addSongToMyPlaylist(title){
    myPlaylist.push(title);
}
addSongToMyPlaylist(searchedSong);
console.log(myPlaylist);