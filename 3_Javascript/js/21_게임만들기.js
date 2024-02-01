const generateBtn = document.querySelector("#inner-1>button:nth-child(1)");
const characterImgDiv = document.querySelector("#inner-1>div:nth-child(2)");
const manWorrior=document.querySelector("#character-image>img:nth-child(1)");
const manMagician=document.querySelector("#character-image>img:nth-child(2)");
const girlWorrior=document.querySelector("#character-image>img:nth-child(3)");
const girlMagician=document.querySelector("#character-image>img:nth-child(4)");
const characterInfo1 = document.querySelector("#character-info>div:nth-child(1)");
const characterInfo2 = document.querySelector("#character-info>div:nth-child(2)");
const characterInfo3 = document.querySelector("#character-info>div:nth-child(3)");
const characterInfo4 = document.querySelector("#character-info>div:nth-child(4)");
const characterInfo5 = document.querySelector("#character-info>div:nth-child(5)");
const characterInfo6 = document.querySelector("#character-info>div:nth-child(6)");
const characterInfo7 = document.querySelector("#character-info>div:nth-child(7)");
const characterInfo8 = document.querySelector("#character-info>div:nth-child(8)");
const characterInfo9 = document.querySelector("#character-info>div:nth-child(9)");
const characterInfo10 = document.querySelector("#character-info>div:nth-child(10)");
const characterInfo11 = document.querySelector("#character-info>div:nth-child(11)");

let generateCheckCount = 0;
let shield;
let hp;
let attackDamage;
let attackScore;
let weapon;
let shieldWeapon;
let howMoney;
let experienceScore;
let userLevel;


generateBtn.addEventListener("click", function(){
    
    generateCheckCount += 1;


    const character = prompt("남자_전사/남자_마법사/여자_전사/여자_마법사 중 하나를 골라주세요");
    const userName = prompt("이름을 입력해주세요");

    //character 는 남자_전사/남자_마법사/여자_전사/여자_마법사 중 하나의 문자열이 골라짐
    if(character == "남자_전사"){
        manWorrior.style.display = "block";
        manMagician.style.display = "none";
        girlWorrior.style.display = "none";
        girlMagician.style.display = "none";
    } else if (character == "남자_마법사"){
        manWorrior.style.display = "none";
        girlWorrior.style.display = "none";
        girlMagician.style.display = "none";
        manMagician.style.display = "block";
    } else if(character == "여자_전사"){
        manWorrior.style.display = "none";
        manMagician.style.display = "none";
        girlMagician.style.display = "none";
        girlWorrior.style.display = "block";
    } else if(character == "여자_마법사"){
        manWorrior.style.display = "none";
        manMagician.style.display = "none";
        girlWorrior.style.display = "none";
        girlMagician.style.display = "block";
    } 

    const nameSpan = document.createElement("span");
    nameSpan.innerText = `${userName} `;
    characterInfo1.append(nameSpan);  

    const nameSpan2 = document.createElement("span");
    nameSpan2.innerText = `${character}`;
    characterInfo2.append(nameSpan2);  

    if(character =="남자_전사" || character=="남자_마법사"){
        const nameSpan3 = document.createElement("span");
        nameSpan3.innerText = `남자`;
        characterInfo3.append(nameSpan3);
    } else if(character =="여자_전사" || character=="여자_마법사"){
        const nameSpan3 = document.createElement("span");
        nameSpan3.innerText = `여자`;
        characterInfo3.append(nameSpan3);
    }

    const nameSpan4 = document.createElement("span");
    userLevel = nameSpan4;
    nameSpan4.innerText = 0;
    characterInfo4.append(nameSpan4);

    const nameSpan5 = document.createElement("span");
    hp = nameSpan5;
    nameSpan5.innerText = 100;
    characterInfo5.append(nameSpan5);

    const nameSpan6 = document.createElement("span");
    attackScore = nameSpan6;
    attackDamage = nameSpan6;
    nameSpan6.innerText = 10;
    characterInfo6.append(nameSpan6);

    const nameSpan7 = document.createElement("span");
    shield = nameSpan7;

    nameSpan7.innerText = 5;
    characterInfo7.append(nameSpan7);

    const nameSpan8 = document.createElement("span");
    experienceScore = nameSpan8;
    nameSpan8.innerText = 0;
    characterInfo8.append(nameSpan8);

    const nameSpan9 = document.createElement("span");
    howMoney = nameSpan9;
    nameSpan9.innerText = 0;
    characterInfo9.append(nameSpan9);

    const nameSpan10 = document.createElement("span");
    weapon = nameSpan10;
    characterInfo10.append(nameSpan10);

    const nameSpan11 = document.createElement("span");
    shieldWeapon = nameSpan11;
    characterInfo11.append(nameSpan11);

})


// ------------------------------------------------------
const startWarBtn = document.querySelector("#inner-2>button:nth-child(1)");
const goblin = document.querySelector("#goblin");
const goblinBeKilled = document.querySelector("#goblin-be-killed");
const goblicHpAttack1 = document.querySelector(".golin-infomation1");
const goblicHpAttack2 = document.querySelector(".golin-infomation2");

startWarBtn.addEventListener("click", function(){
    if(generateCheckCount==0){
        alert("캐릭터가 생성되지 않았습니다");
        return;
    }    


    goblin.style.display = "block";
    goblicHpAttack1.style.display = "block";
    goblicHpAttack2.style.display = "block";5

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
    attackedMessageMe.innerText = `-10 `;
    attackedMessageMe.style.color = "red";
    attackedMessageMe.style.fontSize = "20px";
    characterImgDiv.append(attackedMessageMe);

    const attackedMessageMe2 = document.createElement("span");
    attackedMessageMe2.innerText = `+`;
    attackedMessageMe2.style.color = "black";
    attackedMessageMe2.style.fontSize = "20px";
    characterImgDiv.append(attackedMessageMe2);

    const attackedMessageMe3 = document.createElement("span");
    attackedMessageMe3.innerText = `${shield.innerText}`;
    attackedMessageMe3.style.color = "yellowgreen";
    attackedMessageMe3.style.fontSize = "20px";
    characterImgDiv.append(attackedMessageMe3);

    setTimeout(function(){
        goblin.style.display = "block";
    goblinBeKilled.style.display = "none";
    message.firstElementChild.remove();
    characterImgDiv.lastChild.remove();
    characterImgDiv.lastChild.remove();
    characterImgDiv.lastChild.remove();
    }, 1000);
    let damage = Number(shield.innerText) - 10;
    if(damage <0){
        hp.innerText = Number(hp.innerText) + damage;
    }

    const goblinHp = document.querySelector("#goblin-info>div>span>span");
    console.log(Number(goblinHp.innerText));
    console.log("ggg");

    goblinHp.innerText = Number(goblinHp.innerText) - Number(attackDamage.innerText);

    
    if(Number(hp.innerText) <= 0){
        console.log("죽었네");
        alert("캐릭터가 죽어서 게임이 종료되었습니다");    
    }
    

    if(Number(goblinHp.innerText) <= 0){
        console.log("고블린 피0 됬다");
        setTimeout(function(){
            goblin.style.display = "none";
            goblicHpAttack1.style.display = "none";
            goblicHpAttack2.style.display = "none";
            const messageGoblinDead = document.createElement("div");
            messageGoblinDead.innerText = "고블린이 죽었습니다.";
            messageGoblinDead.style.fontSize = "30px";
            messageGoblinDead.style.fontWeight = "bold";
            messageGoblinDead.style.color = "red";

            const goblinInfoDiv =document.querySelector("#goblin-info");
            goblinInfoDiv.append(messageGoblinDead);

            const reward = document.createElement("div");
            const randomNumber1= Math.floor(Math.random()*100);
            const randomNumber2= Math.floor(Math.random()*100);
            const goblinItemDropRate = Math.floor(Math.random()*100);
            const userItemAcquireRate = Math.floor(Math.random()*100);

            reward.innerHTML = `gold : ${randomNumber1} <br> 경험치 : ${randomNumber2} 를 얻었습니다.`
            reward.style.color="goldenrod";
            reward.style.fontSize = "30px";
            reward.style.fontWeight = "bold";
            goblinInfoDiv.append(reward);

            howMoney.innerText = Number(howMoney.innerText) + randomNumber1;
            experienceScore.innerText = Number(experienceScore.innerText) + randomNumber2;

            if(Number(experienceScore.innerText)>=100){
                console.log("aaaaaaaaaaaaaaaaaa");
                userLevel.innerText = Number(userLevel.innerText) + 1;
                experienceScore.innerText = Number(experienceScore.innerText) - 100;
            }

            let item;
            if(goblinItemDropRate > userItemAcquireRate){
                const sword = Math.floor(Math.random()*100);
                const shield2 = Math.floor(Math.random()*100);
                const potion = Math.floor(Math.random()*100);

                if(sword > shield2 && sword > potion){
                    item = "sword";
                } else if (shield2 > sword && shield2 > potion){
                    item = "쉴드";
                } else if (potion>sword && potion>shield2){
                    item = "potion";
                }

                const acquiredItemDiv = document.createElement("div");
                acquiredItemDiv.innerText = `${item} 을 획득하셨습니다`;
                acquiredItemDiv.style.color = "green";
                acquiredItemDiv.style.fontSize = "30px";
                goblinInfoDiv.append(acquiredItemDiv);

                if(item=="sword"){
                    attackScore.innerText =Number(attackScore.innerText) + 20;
                    weapon.innerHTML += "&nbsp; sword";
                }
                if(item=="쉴드"){
                    shield.innerText = Number(shield.innerText) + 20;
                    shieldWeapon.innerHTML += "&nbsp; shield";
                }
                if(item=="potion"){
                    hp.innerText = Number(hp.innerText) + 20;
                }
                
            }
            const gohp= document.querySelector("#hundred");
            gohp.innerText = 100;
            setTimeout(function(){            goblinInfoDiv.lastChild.remove();
                goblinInfoDiv.lastChild.remove();
                goblinInfoDiv.lastChild.remove();
    }, 3000);

            




        }, 1100);
        
    }
    
    
})

const swordBtn = document.getElementById("swordBtnBtn");
const shieldBtn = document.getElementById("shieldBtnBtn");
const potionBtn = document.getElementById("potionBtnBtn");

swordBtn.addEventListener("click", function(){
    if(Number(howMoney.innerText) <100){
        alert("골드가 부족합니다.");
    }
    if(Number(howMoney.innerText) >= 100){
        alert("검을 구매하셨습니다.");
        weapon.innerHTML += "&nbsp; sword";
    }
})

shieldBtn.addEventListener("click", function(){
    if(Number(howMoney.innerText) <100){
        alert("골드가 부족합니다.");
    }
    if(Number(howMoney.innerText) >= 100){
        alert("방패을 구매하셨습니다.");
        shieldWeapon.innerHTML += "&nbsp; shield";
    }
})

potionBtn.addEventListener("click", function(){
    if(Number(howMoney.innerText) <10){
        alert("골드가 부족합니다.");
    }
    if(Number(howMoney.innerText) >= 10){
        alert("포션을 구매하셨습니다.");
        hp.innerText = Number(hp.innerText) + 20;
        hp.style.backgroundColor = "red";
        hp.style.color = "white";
        hp.style.borderRadius = "10px";
        hp.style.padding = "10px";

        setTimeout(function(){
        hp.style.backgroundColor = "white";
        hp.style.color = "black";
        hp.style.borderRadius = "none";
        hp.style.padding = "0px";

        }, 1000);

    }
})
