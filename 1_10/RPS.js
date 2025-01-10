function RPS(){
        const choices = ["gu","choki","pa","muteki"];
    // let select = document.createElement("select");
    // let option1 = document.createElement("option");
    // let option2 = document.createElement("option");
    // let option3 = document.createElement("option");
    // const gu = "gu"
    // option1.value = gu;
    // option1.textContent = gu;
    // select.appendChild(option1)
    // option2.value = choki;
    // option2.textContent = choki;
    // select.appendChild(option2)
    // option3.value = pa;
    // option3.textContent = pa;
    // select.appendChild(option3)
    // gameContainer.appendChild(select);
    let select =document.createElement("select");
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option)
    });
    gameContainer.appendChild(select);

    let image = document.createElement("img");
    image.alt = "choice";
    image.style.width = "300px";
    image.style.height = "300px";
    image.src = "https://assets.st-note.com/production/uploads/images/105450567/picture_pc_cdf6a3e4a6d5e80cca2a2857b30a4ed3.png?width=4000&height=4000&fit=bounds&format=jpg&quality=90"

    gameContainer.appendChild(image);

}