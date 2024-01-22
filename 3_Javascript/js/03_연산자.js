const number1 = document.getElementById('input1');
const number2 = document.getElementById("input2");
const result = document.getElementById('calcResult');



function plusFn(){
    //input요소.value : input 요소에 작성된 값 얻어오기
    const value1 = number1.value; //input태그에 작성한 것들은 무조건 string으로 얻어진다.
    const value2 = number2.value;  
    
    //string -> number 로 타입변환 : Number(문자열)
    const numValue1 = Number(value1);
    const numValue2 = Number(value2);

    const plusResult = numValue1 + numValue2;
    result.innerText=plusResult;
}

function minusFn(){
    const value1 = number1.value;
    const value2 = number2.value;

    result.innerText = Number(value1) - Number(value2);
}

function multiFn(){
    const value1 = number1.value;
    const value2 = number2.value;

    result.innerText = Number(value1) * Number(value2);
}

function divFn(){
    const value1 = number1.value;
    const value2 = number2.value;

    result.innerText = Number(value1) / Number(value2);
}

function modFn(){
    const value1 = number1.value;
    const value2 = number2.value;

    result.innerText = Number(value1) % Number(value2);
}

// ------------------------------------

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const resultSpan = document.getElementById('total');

function totalFn(){
    
    const num_1= num1.value;
    const num_2= num2.value;
    const num_3= num3.value;

    resultSpan.innerText = Number(num_1) + Number(num_2) + Number(num_3);
}



// ------------------------------------
//증가/감소 연산자(++, --)

//증가, 감소할 수를 저장할 변수 선언
let count = 0;

//문서 내에서 id가 "result2"인 요소를 얻어와 result2 변수에 대입
const result2 = document.getElementById("result2");

//1 증가 함수
function increase(){
    count++; //또는 ++count 도 가능. 
    result2.innerText = count;
}
//1 감소 함수
function decrease(){
    count--; //또는 --count 도 가능.
    result2.innerText = count;
}

// 전위, 후위 연산 확인하기
function check (){
    let count = 100;

//전위 연산(++count, --count) 과 후위 연산(count++, count--)
console.log(++count); //101
console.log(count++); //101
console.log(count); //102

    // 문제
    console.log("--------------");
    let a = 10;
    let b = 5;
    let c = ++a * b--;
    console.log(a,b,c);

    //최종적으로 a,b,c 에 저장된 값은 얼마?

    // a=10
    // b=5
    // c= 55


}