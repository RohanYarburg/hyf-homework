function getFullname (firstName, lastName, formal){
    var fullName= firstName + lastName;
   if (formal == true){
       fullName = "lord " + fullName;
       return fullName;
   }
   else return fullName;
}

var fullname1 = getFullname("alec ","benjamin ", true);
var fullname2 = getFullname("tina ","turner ", false);

console.log(fullname1, fullname2);