// 두 수가 같은지 비교
const cv1 = document.getElementById("compareValue1");
const cv2 = document.getElementById("compareValue2");
const result1 = document.getElementById("result1");
function compareFn1(){
    const v1 =cv1.value;
    const v2 = cv2.value;
    
    console.log('1111');

    result1.innerText = (v1 == v2);
}

//A>B 초과 비교
const cv3 = document.getElementById("compareValue3");
const cv4 = document.getElementById("compareValue4");
const result2 = document.getElementById("result2");

function compareFn2(){
    const v3 = Number(cv3.value);
    const v4 = Number(cv4.value);

    result2.innerText= (v3 > v4);
    
}

//배수확인
const input3_1 = document.getElementById("input3_1");
const input3_2 = document.getElementById("input3_2");
const result3 = document.getElementById("result3");

function checkFn3(){
    const v1 = Number(input3_1.value);
    const v2 = Number(input3_2.value);


    result3.innerText=`${v1}은/는 ${v2}의 배수 :  ${(v1%v2)==0}`;
}

//백틱(`) 을 이용하여 문자열 작성하면, 중간에 변수 있을 때, ${변수명} ${연산식} 으로 작성하면 된다.

//입력된 값 만큼 누적/차감
let count4 = 0;
const input4 = document.getElementById("input4");
const result4 = document.getElementById("result4");

function minus4 (){
    const value = Number(input4.value);
    count4 -= value;
    result4.innerText = count4;
}
function plus4(){
   const value = Number(input4.value);
   count4 += value;
   result4.innerText = count4; 
}

//논리 연산자 확인하기
function checkFn5 (){

    // AND (&&)
    const bool1 = (104 >= 100) && (104 % 2 == 0);
    console.log(`104는 100 이상의 수 이면서 짝수인가? ${bool1}`);

    const bool2 = (50 <=70) && (50 % 4 == 0);
    console.log(`50은 70이하이고, 4의 배수인가? ${bool2}`);

    const bool3 = (13 > 1) && (13 < 10);
    console.log(`13은 1부터 10 사이의 수가 맞는가? ${bool3}`);

    // OR (||)
    const bool4 = (4 > 10) || (4 % 2 == 0);
    console.log(`4는 10을 초과하거나, 짝수인가? ${bool4}`);
    
    const bool5 = (50 <= 0) || (50 >= 40);
    console.log(`50은 0이하 또는 40이상인가? ${bool5}`);

    // NOT (!)
    console.log(`!true = ${!true}`);

}

//삼항 연산자
const id = document.getElementById("inputId");
const pw = document.getElementById("inputPw")

function login(){
    (id.value == "member01") && (pw.value == "pass01!") ? alert("로그인 성공!") : alert("아이디 또는 비밀번호가 일치하지 않습니다");
}
