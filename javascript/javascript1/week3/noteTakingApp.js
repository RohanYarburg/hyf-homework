let notes= new Array;

function addNote(content,Id){
    let newNote={
        content:content,
        id:Id,
    }
    notes.push(newNote);
}
addNote("hello",1);
addNote("new lesson",2);
addNote("new",3);

console.log(notes);

function getNoteFromId (id){
let num =-100;
    for (let i = 0; i < notes.length; i++) {
        if (id===notes[i].id) { 
            num = i;
           }  
         else if(!id){
            console.log( "ERROR")
        }
    }
        if (num==-100) {
        console.log("Id does not exist")
    }else{console.log( notes[num]);}
  }

getNoteFromId(1);

function getAllNotes() {
     for (let index = 0; index < notes.length; index++) {
         console.log (notes[index]);         
     }  
}

getAllNotes();

function logOutNotesFormatted(id){
    formattedObj= notes[id];
    console.log( "The note with id:"+
                id+", has the following note text: "+formattedObj.content +".")
}

logOutNotesFormatted(1);

function checkedOrNot(id, check){
    notes[id-1].checked= check;
}

checkedOrNot(2,"yes")
checkedOrNot(3,"No")
checkedOrNot(1,"yes")
console.log(notes);