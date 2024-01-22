// .js 파일 내부를 <script> 태그 내부라고 생각하면 됨

function externalFn (){
    alert('외부 파일에 작성된 externalFn() 함수가 호출됨');    
}

/*********************************************************** */ 

// JS 맛보기
// 버튼 클릭시 body 태그의 글자색, 배경색을 변경
//document = html문서 전체를 의미함.    
const body = document.querySelector("body");

function lightMode(){
    body.style.color="black";
    body.style.backgroundColor="white";

}
function darkMode(){
    body.style.color="white";
    body.style.backgroundColor="black";
}

// js는 카멜케이스로 작성해야함.