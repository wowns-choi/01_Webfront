const chuga = document.querySelector("#add");
const calc = document.querySelector("#calc");
const container= document.querySelector(".container");


chuga.addEventListener("click", ()=>{
    const div = document.createElement("div");
    container.append(div);
    div.classList.add("row");

    const input = document.createElement("input");
    // input.type = "number"; 이렇게 대신 아래처럼 할 수 있음
    input.setAttribute("type", "number");

    input.classList.add("input-number");

    div.append(input);

    const span = document.createElement("span");
    span.classList.add("remove-row");
    div.append(span);

    span.innerHTML = "&times;";


    //잘봐. 추가 버튼을 누를때마다 만들어지는 span태그에 이벤트리스너를 붙여주는거임
    span.addEventListener("click", function(e){

        const parent = e.target.parentElement;
        parent.remove();
    })
})



calc.addEventListener("click", () => {
    const inputArray = document.querySelectorAll(".input-number");
    let sum = 0;
    for(let i=0; i<inputArray.length; i++){
        sum += Number(inputArray[i].value);
    }
    alert(sum);
})



