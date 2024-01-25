
//-----------------------------------------------2번째 문제
const inputArray = document.getElementsByClassName("color-input");
const divArray= document.getElementsByClassName('box');
document.getElementById("changeButton").addEventListener(
    "click", function(){
        for(let i=0; i<inputArray.length; i++){
            const color1 = inputArray[i].value;
            divArray[i].style.backgroundColor = color1;
        }
    }
)
