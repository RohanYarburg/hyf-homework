const class07Students = ["akku","david","jack","hagrid","sigrid"];
function addStudentToClass(studentName){
    let name=studentName;
    let response="";

    if (name!="Queen of Denmark") { 
             if (class07Students.includes(name)) {
            response="student "+name+" is already is class 07"
            }
            else if (class07Students.length==6){
            response="Cannot add more students to class 07";
            }
            else if (name=="") {
                response="please add name";
            }
            else{
                class07Students.push(name);
            }
    }
    else if (name=="Queen of Denmark") {
        response="Queen is welcome to class 07";
        console.log(class07Students.push('queen'))
    }
    return response;
}  

function getNumberOfStudents(){
    return class07Students.length;
}

console.log(addStudentToClass(""))

console.log(getNumberOfStudents());