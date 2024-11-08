const gameselector = document.getElementById("game-selector");

const gameContainer = document.getElementById("game-container");

gameContainer.textContent="ゲームを選ぶとここに表示されます"

gameselector.addEventListener("change",function(){
    gameContainer.innerHTML = "";
    switch(gameselector.value){
        case"note":
            gameContainer.textContent="ゲームを選ぶとここに表示されます"
            break;
        case"click-counter":
            ClickCounterGame();
            break;
        case"number-guess":
            NunberGuessGame();
            break;
        case"RPS":
            RPS();
            break;
    }
})

