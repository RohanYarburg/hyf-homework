


let startBtn= document.getElementById("start");
startBtn.addEventListener('click', function start(){
    let seconds= document.getElementById("secs").value;
    if (seconds.length === 0){
        console.log("you need to enter how many seconds");
    }
    else{
        let time= seconds*1000;
        window.addEventListener('keypress',L);
        let counterL=0, counterS=0;
        function L(){
        if(event.code==='KeyL'){
            counterL+=1;
            let counterLdisplay=document.getElementById('lCount');
            counterLdisplay.innerHTML=('L= '+counterL);
        }else if(event.code==='KeyS'){
            counterS+=1;
            let counterSdisplay=document.getElementById ('sCount');
            counterSdisplay.innerHTML=('S= '+counterL);
        }
        }
        setTimeout(function counter(){
        window.removeEventListener('keypress',L)
        let resultDisplay = document.getElementById('finishResults');
        if (counterS===0 && counterL=== 0) {
            resultDisplay.innerHTML=("Draw 0-0")
        }
        else if (counterS<counterL) {
            resultDisplay.innerHTML=("L wins") 
        }
        else if (counterS>counterL) {
            resultDisplay.innerHTML=('S wins')
        }  
        else if (counterS===counterL ) {
            resultDisplay.innerHTML=('Draw '+counterS+'-'+counterL);
        }
        }, time)
    }
})



