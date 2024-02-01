const numbers = document.querySelectorAll(".number");
const resultSpan = document.getElementById("result");

let countNumber = 0;

for(let i=0; i<numbers.length; i++){
    numbers[i].addEventListener(
        "click", function(){
            console.log("aaa");
            if(countNumber>10){
                console.log("bbb");
                resultSpan.firstElementChild.remove();
                
            }
            console.log("ddd");
            const spanTag = document.createElement("span");
            spanTag.innerHTML += numbers[i].innerText;
            resultSpan.append(spanTag);
            countNumber += 1;
            console.log("countNumber", countNumber);
        }
    )
}