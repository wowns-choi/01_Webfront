//클래스 접근 테스트
function classTest(){
    //.cls-test 요소 모두 얻어오기
    const divs = document.getElementsByClassName("cls-test");
    console.log(divs);
    //유사배열이란? 
    //배열처럼 index, length 를 가지고 있으나, 
    //배열전용 기능(메서드)제공하지 않음. 
    //여기서, 가장 중요한 포인트는, 선택자 중에 s붙은 선택자로 선택한 경우, 선택한 요소들을 하나의 배열 안에 담는다는 것이다.
    //배열안에 담기면 어떻게 되? 배열에 담긴 요소들을 대상으로 for문을 돌릴 수 있게 됨.
    //여기서, 배열전용 기능(메서드) 란? pop(), push() 같은 메서드를 말함.
 
    divs[0].style.backgroundColor = "rgb(114,203,80)";
    divs[1].style.backgroundColor = "red";
    divs[2].style.backgroundColor = "blue";

}





//태그명으로 요소 접근하기
function tagNameTest(){
    // HTML 문서에 존재하는 모든 li 태그 요소를 얻어와
    // 배열로 묵어서 반환해준다.
    const tagList = document.getElementsByTagName("li");

    console.log(tagList);

    for(let i =0; i <tagList.length; i++){
        tagList[i].style.backgroundColor = tagList[i].innerText;
    }
    


}

//name 으로 요소 접근하기
function nameTest(){
    //name 속성값이 "hobby" 인 요소를 모두 얻어와 변수에 저장
    const hobbyList = document.getElementsByName("hobby");

    // console.log(hobbyList);
    let str = ""; //체크된 값 누적
    let count = 0; //체크된 수 카운트

    for(let i = 0; i<hobbyList.length; i++){
        //순차 접근

        //checkbox, radio 전용 속성(.checked)

        //input요소.checked -> 요소가 체크되어 있으면 true, 아님 false반환
        //input요소.checked = true -> 해당 요소를 체크
        //input요소.checked = false -> 해당 요소 체크를 해제

        if(hobbyList[i].checked){
            str += hobbyList[i].value + " ";
            count++;
        }

    
    }

    //#name-div 요소에 내용으로 결과 출력
    document.getElementById("name-div").innerHTML
    = `${str} <br><br> 선택된 취미 개수 : ${count}`;
}

//css 선택자로 요소 접근하기
function cssTest(){
    /*
        [요소 1개]만 가져오기
        1) document.querySelector("css 선택자");
            -> 선택자가 선택한 요소 중 첫번째 요소를 반환
        
        [요소 여러 개] 가져오기 배열로 가져옴
        2) document.querySelectorAll("CSS 선택자")
            -> 선택한 요소 모두를 배열(유사배열) 형태로 반환해준다.

    */

    //target-div 속성 값이 "css-div" 요소에 접근할 것이다.
    const container = document.querySelector("[target-div='css-div']");
    container.style.border = "10px solid red";

    const firstChild = document.querySelector("[target-div='css-div']>div:first-child");
    //const firstChild = document.querySelector("[target-div='css-div']>div"); 이렇게 해도 querySelector 는 하나만 가져오기 때문에, 상관없다.
    firstChild.innerHTML = 'CSS 선택자로 선택해서 값 변경됨';

    const firstChild2 = document.querySelector("[target-div='css-div'] >div:last-child");
    firstChild2.innerHTML = '첫번째 요소가 아니면 querySelector() 특징 활용 못함';

    const divList = document.querySelectorAll("[target-div='css-div'] >div");
    console.log(divList);

    divList[0].style.fontFamily = "궁서";
    divList[1].style.fontSize = "20px";

    for(let i=0; i<divList.length; i++){
        divList[i].onclick = function(){
            alert(`${i+1}번째 요소 입니다!`);
        }
    }
}

//카카오톡 채팅 화면 만들기
function readValue(){

    //채팅이 출력되는 배경
    const bg = document.querySelector("#chatting-bg");
    //채팅 내용 입력 input
    const input = document.querySelector("#user-input");

    //입력된 값이 없을 경우 처리
    //입력된 값이 없을 경우는 2가지가 있다.
    //1) 진짜 안적은 경우
    //2) 공백만 적음

    //문자열.trim() : 문자열 좌우 공백 제거
    if(input.value.trim().length == 0){
        alert("채팅 내용을 입력해주세요");
    
        input.value = ""; //이전 input에 작성된 값 삭제

        input.focus(); //input 창에 커서 활성화

        return; //현재 수행중인 함수 종료 + 호출한 곳으로 돌아감
    }

    //채팅 출력
    bg.innerHTML += `<p><span>${input.value}</span></p>`;

    //스크롤 위치부터 조정해보자.
    //bg.scrollHeight : bg 의 스크롤 전체 높이가 반환된다.
    //bg.scrollTop : 스크롤 윗 부분 위치가 나온다. 대부분 처음은 0입니다.
    //bg.scrollTop = 값 : 스크롤 윗부분을 값 위치로 이동시켜준다.
    //(값이 너무 크면 스크롤은 자동으로 제일 밑으로 이동)

    bg.scrollTop = bg.scrollHeight;

    //입력 눌렀을 경우, input태그 비워주기
    input.value ="";
    input.focus();
}

//enter 눌렀을 경우, 입력버튼이 눌러지도록 하기
/*
아이디가 user-iuput 인 요소에서 키가 올라오는 동작이 발생했을때(감지되었을때)
올라온 키가 "Enter" 키 이면 readValue()함수를 호출
*/ 
//keydown : 이벤트 중 하나인데, 키가 눌리면 ~ 어떤 동작이발생하도록 함. 키보드를 꾹 누르고 있으면 계속 인식됨
//keyup : 눌러지던 키가 떼어졌을 때 (1회만 인식함)

document.querySelector("#user-input")
.addEventListener("keyup", function(e){ //e는 이벤트 객체(발생한 이벤트 정보를 담고있는 객체)
    console.log(e); //찍어보면, 여러가지 정보를 담고 있음.

    if(e.key == "Enter"){
        readValue();
    }
});


