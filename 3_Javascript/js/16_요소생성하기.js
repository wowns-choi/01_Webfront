const createBox = document.querySelector("#createBox");
const container = document.querySelector(".container");

//createBox 버튼 클릭시 div.box 를 생성하여
//container 안에 마지막 자식으로 추가. 

createBox.addEventListener("click", ()=>{

    //1. div 요소 생성
    const box = document.createElement("div");
    console.log(box); //만들어졌지만 화면에는 아직 안보임

    //2. 만들어진 div 요소 "box" 클래스(css를 추가한다는거야) 추가
    box.classList.add("box"); // <div class="box"></div>

    //3. container 의 마지막 자식으로 div 요소 추가
    container.append(box);

    //4. input 요소 생성
    const input = document.createElement("input");
    input.type = "text"; // <input type="text">

    //5. 생성된 input을 box의 마지막 자식으로 추가
    box.append(input);

    
});

/*
    요소.classList: 요소의 클래스 목록
        -> 클래스 존재여부, 추가, 제거 등을 할 수 있음
    
    1. 요소.classList
        -> 요소 목록이 배열 형식으로 반환

    2. 요소.classList.contains("클래스명")
        -> 클래스가 있으면 true, 없으면 false

    3. 요소.classList.add("클래스명")
        -> 클래스 추가
    4. 요소.classList.remove("클래스명")
        -> 클래스 제거

*/


//-----------------------------------------------------
//innerHTML 로 요소 추가하기 해보면서 불편함을 느껴봐라
const innerHTML = document.querySelector("#innerHTMLBox");
innerHTML.addEventListener("click", () => {
    container.innerHTML 
        += "<div class='box'><input type='text'></div>"
});