let funcArray = [log1,log2,log3];

function log1(){
    console.log("hey 1");
}
function log2(){
    console.log("hey 2");
}
function log3(){
    console.log("hey 3");
}

for (let i = 0; i < funcArray.length; i++) {
    funcArray[i]();
}

let a= function(){
    console.log("hello");
}

function b(){
    console.log("hello b");
}

a();
b();

let c={
    func: function(){
        console.log("hello c");
    }
}

c['func']();

function outer(){
    function inner(){
        console.log("d");
    }
    return inner;
}

let d= outer();

d();