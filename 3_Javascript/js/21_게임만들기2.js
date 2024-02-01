const startWarBtn = document.querySelector("#inner-2>button:nth-child(1)");
const goblin = document.querySelector("#goblin");
const goblinBeKilled = document.querySelector("#goblin-be-killed");
startWarBtn.addEventListener("click", function(){
    if(generateCheckCount==0){
        alert("캐릭터가 생성되지 않았습니다");
        return;
    }
    goblin.style.display = "block";
    


})


const message = document.querySelector("#attacked-message");
goblin.addEventListener("click", function(){
    let smallPicAttribute = goblin.getAttribute("src");
    goblin.style.display = "none";
    goblinBeKilled.style.display = "block";
    const attackedMessage = document.createElement("span");
    attackedMessage.innerText = "-10";
    attackedMessage.style.color = "red";
    attackedMessage.style.fontSize = "50px";
    message.append(attackedMessage);

    const attackedMessageMe = document.createElement("span");
    attackedMessageMe.innerText = `-10 + ${nameSpan7.innerText} = ${-10+nameSpan7.innerText}`;
    attackedMessageMe.style.color = "red";
    attackedMessageMe.style.fontSize = "50px";
    characterImgDiv.append(attackedMessageMe);

    setTimeout(function(){
        goblin.style.display = "block";
    goblinBeKilled.style.display = "none";
    message.firstElementChild.remove();
    characterImgDiv.lastElementChild.remove();
    }, 1000);
})