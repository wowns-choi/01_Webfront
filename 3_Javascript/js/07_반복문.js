// for(let num = 1; num <= 5; num++){
//     //조건식이 true 인 경우 반복 수행할 코드;
//     console.log("통과!");
// }


//"12345" 출력
//포인트는 문자열 + 숫자 하면 문자열이 된다는 거임.
function check1(){
    let result = "";
    for(let num=1; num<=5; num++){
        result += num;
    }
    console.log(result);
}

function check2 (){
    for(let num=1; num<=10; num++){
        console.log(num);
    }
}

function check3(){
    for(let num=1; num<=20; num++){
        console.log(num);
    }
}

function check4(){
    for(let num=5; num<=15; num++){
        console.log(num);
    }
}

function check5(){
    for(let num=1; num<=30; num += 2){
        console.log(num);
    }
}

function check6(){
    let total = 0;
    for(let num=1; num<=10; num++){
        total += num;
    }
    console.log(total);
}

//첫번째 문제
const star= document.getElementById("inputNumber1-1");
const en= document.getElementById("inputNumber1-2");
const result1= document.getElementById("result1");
function sumFn(){
    const starVal= Number(star.value);
    const enVal= Number(en.value);
    let totalValue = 0;
    for(let num=starVal; num <=enVal; num++){
        totalValue += num;
    }
    result1.innerText = totalValue;
}




//두번째 문제
let start = document.getElementById('inputNumber2-1');
let end = document.getElementById('inputNumber2-2');
let increment = document.getElementById('inputNumber2-3');
const ul = document.getElementById('result2');

function executeFn2(){
    const startVal = Number(start.value);
    const endVal = Number(end.value);
    const incrementVal = Number(increment.value);
    
     ul.innerHTML = ""; //이전 ul에 작성된 내용을 모두 삭제
    //ul.innerText.val = ""; 이건 안되더라?

    for(let num=startVal; num <=endVal; num +=incrementVal ){
        console.log(num);

        ul.innerHTML+=`<li>${num}</li>`;
    }
}
//요소.innerText = `<li>${num}</li>`;
// -> 요소의 내용으로 문자열을 대입
// (HTML 태그를 해석하지 않고 문자열을 그대로를 렌더링해버림)

//요소.innerHTML = `<li>${num}</li>`;
// -> HTML 태그를 해석하여 화면에 태그의 본 기능대로 출력
//언어로 정확히 표현하면, 어떤 요소의 안에 HTML을 쓰겠다는 뜻으로 해석하면 됨.




function executeFn3(){
    const dan = Number (document.getElementById("input3").value);
    const result3 = document.getElementById("result3");
    result3.innerHTML = "";
    
    if(dan<2 || dan>9){
        alert("2~9사이만 입력해주세요");
        return; //함수를 종료하고 함수를 호출한 곳으로 돌아가는 역할을 한다.
    }
    
    for(let num=1; num<=9; num++){ 
        result3.innerHTML += `<li>${dan} X ${num} = ${dan*num}</li>`;
    }
}


function check8(){
    for(let num=1; num<=4; num++){
        let stringPiece = "";
        for(let i=1; i<=5; i++){
            stringPiece += i;
        }
        console.log(stringPiece);
    }
}

function check9(){
    for(let num=1; num<=5; num++){
        let stringPiece = "";
        for(let i =1; i<=num; i++){ 
            stringPiece += i;
        }
        console.log(stringPiece);
    }
}

function check16(){

    //변수를 선언만 해두기
    let val; // 선언만 했을 경우 변수는 undefined

    //취소를 누르기 전까지 계속 반복할 거임.
    //== 취소를 누르면 반복하지 않겠다.
    while(val !== null 
    /* !== 동일 비교연산자라고 함. 값과 자료형이 모두 달라야 true이다. 
    === 는 값과 자료형이 모두 같은 경우 true*/){
        val = prompt("입력 후 확인"); //변수에 prompt 값 대입
        //확인 -> 입력한 값
        //취소 -> null
        console.log(val);
    }

}

function check17(){
    //메뉴 가격
    const gimbab = 3000;
    const ramen = 3500;
    const dongas = 5000;

    //메뉴 개수
    let gCount = 0;
    let rCount = 0;
    let dCount = 0;

    //prompt로 입력한 값을 저장할 변수 선언
    let input; //undefined

    while(input !== null){        //취소 누르기 전까지 반복하겠다.
        input = prompt("메뉴 번호를 입력하세요!");

        switch(input){
            case "1" : gCount++;
            break;
            case "2" : rCount++;
            break;
            case "3" : dCount++;
            break;
            case null : alert("주문 완료!");
            break;
            default : alert("메뉴에 작성된 번호만 입력해주세요"); 
        }
    }

    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
    let sum = (gCount*gimbab) + (rCount*ramen) + (dCount * dongas);
    alert(`총 가격: ${sum} 원 입니다.`)

}

function check18(){
    //1부터 10까지 출력하기
    let num = 1;
    while(num <11){
        console.log(num);
        num++;
    }

    console.log("--------------------------------");

    //10부터 1까지 1씩 감소 (while0문 이용해서)
    let i = 10;
    while(i>0){
        console.log(i);
        i--;
    }
}