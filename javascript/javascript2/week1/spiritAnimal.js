let spritiAnimalArray = [
    "Hawk",
    "Cat",
    "Humming bird",
    "Lizard",
    "octopus",
    "lion",
    "Snow leopard",
    "pig",
    "swan",
    "dragonfly"]

    let randomNumber = Math.floor(Math.random() * 10);
    let button = document.getElementById("onclick");
    button.addEventListener(click, function(){
        let userInput = document.getElementById("userInput").value;
        if (userInput.value=="") {
            document.write("invalid input");
        }else{
        document.write(userInput+" - "+spritiAnimalArray[randomNumber]);
        }
    })