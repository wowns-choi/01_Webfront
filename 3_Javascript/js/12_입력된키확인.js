//문자열.toLowerCase() : 영어를 모두 소문자로 변경해줌 (A -> a)
//문자열.toUpperCase() : 영어를 모두 대문자로 변경 (a -> A)

const key1 = document.querySelector(".key-box>div:nth-child(1)");
const key2 = document.querySelector(".key-box>div:nth-child(2)");
const key3 = document.querySelector(".key-box>div:nth-child(3)");
const key4 = document.querySelector(".key-box>div:nth-child(4)");
const keyArray = document.querySelectorAll(".key");

document.addEventListener("keydown", function(e){
    const inputKey= e.key;
    const soKey = inputKey.toLowerCase();
    if(soKey == "q"){
        key1.style.backgroundColor = "navy";
        key1.style.color = "white";
    }
    if(soKey == "w"){
        key2.style.backgroundColor = "navy";
        key2.style.color = "white";
    }
    if(soKey == "e"){
        key3.style.backgroundColor = "navy";
        key3.style.color = "white";
    }
    if(soKey == "r"){
        key4.style.backgroundColor = "navy";
        key4.style.color = "white";
    }
}
)

document.addEventListener("keyup", function(e){
    const keykey=e.key;
    const keykeykey = keykey.toLowerCase();
    if(keykeykey=="q"){
        key1.style.backgroundColor="white";
        key1.style.color="black";

    }
    if(keykeykey=="w"){
        key2.style.backgroundColor="white";
        key2.style.color="black";

    }
    if(keykeykey=="e"){
        key3.style.backgroundColor="white";
        key3.style.color="black";

    }
    if(keykeykey=="r"){
        key4.style.backgroundColor="white";
        key4.style.color="black";

    }
})

// -------------------------------------------------






