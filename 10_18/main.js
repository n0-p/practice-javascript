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
            break;
    }
})

function NunberGuessGame(){
    const randomNumber = Math.floor(math.random()*100)+1;
    console.log(randomNumber)
    let message = document.createElement("p");
    let imput = document.createElement("imput");
    imput.type = "number";
    imput.max = 100;
    imput.min = 0;
    imput.placeholder = "好きな数字を入力してください(1~100)"
    let button = document.createElement("buttn");
    message.textContent = "文字"
    button.addEventListener("click".function(){
        count userGuess = parseInt(input.value);
        if(userGuess === randomNumber){
            message.textContent = "正解"
        }else if(userGuess > randomNumber){
            message.textContent = "値が高いよ！"
        }else{
            message.textContent = "値が小さいよ！"
        }
        })

    gamecontainer.appendChild(imput);
    gamecontainer.appendChild(button);
    gamecontainer.appendChild(message);
}

function ClickCounterGame(){
    let count = 0;
    

    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";

    let button2 = document.createElement("button");
    button2.textContent = "+10ボタン";

    let counter = document.createElement("p");
    counter.textContent = count;
    button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })

    button2.addEventListener("click",function(){
        count=count+10;
        counter.textContent = count;
    })

    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(counter);
}


ClickCounterGame();