let spritiAnimalArray = [
    "Hawk",
    "Cat",
    "Humming bird",
    "Lizard",
    "Marble swan of Ninani",
    "lion",
    "Snow leopard",
    "pig",
    "swan",
    "dragonfly"]

    let randomNumber = Math.floor(Math.random() * 10);

    function test()
    {
        let userInput = document.getElementById("userInput").value;
        if (userInput.value=="") {
            document.write("invalid input");
        }else{
        document.write(userInput+" - "+spritiAnimalArray[randomNumber]);
        }
    }

    test();