//매개변수, 전달인자
const input1 = document.querySelector("#input1"); 
const btn1 = document.querySelector("#btn1");

//2개의 값을 전달 받아 출력하는 함수
//자바와는 다르게 매개변수의 타입을 안정해줘도 됨.
function print1 (num, str){
    console.log(`${num}은  ${str}입니다.`);
}

//#btn1 클릭 시 #input1의 값을 읽어와 print1()함수 호출
btn1.addEventListener("click", function(){
    const value = input1.value;
    if(!typeof Number ||value.trim().length == 0){
        console.log("숫자를 입력해주세요");
        return; //함수 종료 + 호출한 곳으로 돌아감
    }

    let result;

    if(Number(value) == 0){result = "0";}
    else if(Number(value) >0){result="양수";}
    else{result="음수";}

    // 함수 호출(값 전달)
    // 중요! 전달되는 값의 순서가 중요합니다
    print1(value, result);
})

function arrayTest(arr){
    //전달 받은 배열의 모든 요소 출력하기
    for(let i=0; i<arr.length; i++){
        if(arr[i] == "메론"){
            arr[i] = "딸기";
        }
        console.log(arr[i]);
    }
}

// 매개변수로 배열 전달하기
//#btn2a 클릭 되었을 때, arrayTest() 라는 함수를 호출할 것
document.querySelector("#btn2a").addEventListener("click", function(){
    const arr1 = [10,20,30];
    const arr2 = ["사과","바나나","메론"];
    
    arrayTest(arr2);

    console.log("arr2[2] :", arr2[2]);

    //왜 멜론이 아니라 딸기가 출력될까?
    //-> arrayTest(arr2) 호출 시 
    //arr2 배열을 통째로 복사해서 전달하는 것이 아닌
    //arr2에 저장된 주소만 보내서 함수를 수행한다.
    
    //arrayTest() 함수에서 arr2와 같은 배열을 참조해서 수정
    // -> 함수 수행 후 돌아와서도
    //참조하고 있던 배열의 2번 인덱스 값이 변화되어 있음



    /*
    참조란?

    -객체 지향 언어에서
    배열, 객체 등 object는 값을 여러개 가지고 있는 자료형인데
    변수는 값을 1개만 저장할 수 있기 때문에

    object를 메모리 다른 곳에 저장을 따로 해놓고,
    저장된 곳의 주소를 변수에 저장해서 

    필요할 때마다 해당 주소를 찾아가 
    원하는 값을 얻어오거나 수정할 수 있게 하는 것을 "참조"한다고 한다.

    즉, 참조 == 주소를 보고 찾아가는 것

    
    */
})

// 매개변수로 this 전달
function btn2bFn(el){
    console.log(el);
    el.style.backgroundColor = "yellow";
}

//매개변수로 함수 전달

function print2(fn){
    console.log(` a + b = ${fn(3,4)}`)
}

document.querySelector("#btn2c").addEventListener("click",
    function(){
        //함수도 변수에 저장 가능! 변수명 == 함수명
        const sumFn = function(a, b){
            return a + b; 
        }

        print2(sumFn);
    }



)

// 전달 받은 수(num) x제곱 하여 반환
function pow(num, x){
    let result = 1;
    for(let i=0; i<x; i++){
        result *= num;
    }
    return result;
}

function sumFn(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

//return 확인하기
document.querySelector("#btn3a").addEventListener("click", function(){
    const numbers = []; //비어있는 배열 생성

    // 배열.push(값) : 값이 배열의 마지막 요소로 추가됨.
    numbers.push(30);
    numbers.push(50);
    numbers.push(4);
    numbers.push(pow(2,5)); // 32 가 저장되겠지.

    console.log(numbers);
    console.log(numbers[3]);

    console.log( sumFn(numbers));

})


// -----------------------------------------------------------------------------

//화살표 함수

//클래스가 arrow인 요소를 모두 얻어옴(배열)
const arrowList = document.querySelectorAll(".arrow");

//화살표 함수 기본 형태
arrowList[0].addEventListener("click", () => {
    alert("화살표 함수 기본 형태 연습");
})

//매개변수가 1개인 경우 : () 생략 가능
function print3 (otherFn) {
    const numbers = [1,2,3,4];
    console.log(otherFn(numbers));    
}

arrowList[1].addEventListener("click", e => {  //매개변수가 e(이벤트 객체) 하나밖에 없기 때문에,
                                               //소괄호 생략됨.
    e.target.style.backgroundColor = "red"; //e.targer은 이벤트가 발생한 태그자체(여기서는 arrowList[1]임)

    print3( arr => { //매개변수가 하나라서 ()생략됨
        let result = 0;
        for(let i=0; i<arr.length; i++){
            result += arr[i];
        }
        return result;
    });

});

// return 한 줄만 작성된 경우
function towNumberPlus (otherFn) {
    const input1 = Number(prompt("첫 번째 값"));
    const input2 = Number(prompt("두 번째 값"));

    alert(otherFn(input1, input2)); //alert 도 함수였음.
}

arrowList[2].addEventListener("click", () => { //매개변수가 0개여도 ()소괄호 생략못함.

    towNumberPlus(
        (a, b) => a + b //'return' '중괄호' ';' 까지 모두 생략되었다.
    );
})

//return 한 줄인데 object 반환하는 경우
function printObject(otherFn){
    const obj = otherFn("홍길동", 20);
    console.log(`obj.name: ${obj.name}`);
    console.log(`obj.age: ${obj.age}`);
}

arrowList[3].addEventListener("click", () => {
    printObject((name, age) => {
        return {"name": name, "age" : age}; //객체를 리턴하는 경우, {} return 생략 불가능
    })
})


//즉시 실행 함수
(()=>{
    console.log("즉시 실행 함수입니다.");
    console.log("함수 모양이 좀 어렵죠?");

})() 
//이렇게만 써두면, 바로 호출됨. 즉, 어떤 이벤트발생하면 ~ console 찍어줘. 이렇게 해왔었는데, 
//그렇게 안하고, 그냥 즉시 실행함수만 써두면, 아마도 document가 로드될 때 실행되는 거 같아.


