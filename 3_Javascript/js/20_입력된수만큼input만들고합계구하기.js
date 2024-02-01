const generateBtn = document.getElementById("btn");
const inputCount = document.getElementById("inputCount");
const container = document.getElementById("container");
generateBtn.addEventListener("click", function(){
    const wantInputCount= inputCount.value;
    for(let i = 0; i<wantInputCount; i++){
        const input = document.createElement("input");
        input.classList.add("input-number");
        container.append(input);
    }
})

const sumBtn= document.getElementById("sumBtn");
sumBtn.addEventListener("click", function(){
    const inputNumber = document.querySelectorAll(".input-number");
    let sum = 0;
    for(let i=0; i<inputNumber.length; i++){
        console.log("aaaaaaaaaaaaa");
        sum += Number(inputNumber[i].value);
    }
    console.log("sumsum", sum);
    let spanDiv = document.createElement("span");
    spanDiv.innerText = sum;
    document.getElementById("result").append(spanDiv);
})