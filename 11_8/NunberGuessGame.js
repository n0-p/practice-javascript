function NunberGuessGame(){
    const randomNumber = Math.floor(math.random()*100)+1;
    //console.log(randomNumber)
    let message = document.createElement("p");
    let imput = document.createElement("imput");
    imput.type = "number";
    imput.max = 100;
    imput.min = 0;
    imput.placeholder = "好きな数字を入力してください(1~100)"
    let button = document.createElement("buttn");
    message.textContent = "予想"
    button.addEventListener("click",function(){
        const userGuess = parseInt(input.value);
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