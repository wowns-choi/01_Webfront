// console.log(값) : 브라우저 콘솔에 출력(기록)

console.log(1234);
console.log("문자열은 양쪽에 쌍따옴표를 작성해야 한다");
console.log('js는 홑따옴표도 문자열로 취급한다.');


// -----------------------------------------------

// 변수 선언
// 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// 작성법 : 변수종류 변수명;
var number1;

// 변수에 값 대입
// 선언된 변수에 값을 대입하는 것
// 작성법 : 변수명 = 값;
number1 = 10;
console.log(number1);

// 변수선언과 동시에 하는 변수 대입
var number2 = 20;
console.log(number2);

// number1, number2 의 합 출력하기
console.log(number1+number2);

// 변수에 대입한 값 변경하기 => 덮어 씌워짐
number1 = 300;
number2 = 400;
console.log("number1의 값: "+number1);
console.log("number2의 값: "+number2);
console.log("100"+100); //100100 이 됨
console.log(100+"100"); //100100 이 됨

//괄호 내부에 ,를 작성해 각각의 값을 독립적으로 출력하기
console.log("number1 : ", number1 , "/number2 : ", number2);


// var, let, const 의 차이점
/*         var : 중복 선언 가능. 재 할당 가능.  
                함수 레벨 scope이다. 
        let : 중복 선언 불가능. 재 할당 가능.
             {}(블록) 레벨 scope 이다.
        const: 중복 선언 불가능. 재 할당 불가능. 
             {}(블록) 레벨 scope 이다.
*/

// var
var menu = "삼겹살";
console.log(menu);
var menu = "쌈장";
console.log(menu);

//let
let coffee = "starbucks";
console.log(coffee);
// let coffee = "ediya"; 이런식으로 안된다는 거야.

//주의점 : let도 값을 다른 걸로 대입해서 바꿀 수 있어. 다만, 중복선언하는 것이 불가능하다는 것이다.
coffee="ediya";
console.log(coffee);

// --------------------------------------------------------------------------

// 3. const(constant의 줄임말) : 항[상] 같은 [수]
// 한 번 값이 대입되면 새로운 값을 대입할 수 없음

const PI = 3.141592;
console.log("PI : " + PI);
// const PI = 5; 재선언 불가능
// PI=1.23; 재할당 불가능


// ------------------------------------------------------------------

// 함수 레벨 스코프 (var)
// : 함수 내에서 선언된 변수는 함수 내에서만 유효하며, 함수 외부에서는 참조할 수 없다.
// 즉, var로 선언된 변수는 함수 내부에서 선언한 변수만이 지역변수이고, 나머지는 다 전역변수로 취급된다.
var test = 123; //var -> 함수 내부 아님 -> 전역변수네
console.log(test); 

{
    var test= 456; // var -> 함수 내부 아님 -> 전역변수네
}

console.log(test); //456 이 출력됨. 왜? var는 동일한 변수명이 중복선언되는 경우 뒤에 선언한 것이 우선시된다고 했잖아.


// 블록 레벨 스코프 (let, const)
// : 모든 코드 블록 내에서 선언된 변수는 블록 내에서만 유효하며, 코드블록 외부에서는 참조할 수 없다.
// 즉, let이나 const로 선언된 변수는 코드블록 내부에서 선언된 변수만이 지역 변수이다. 나머지는 전역변수로 취급된다.

//블록 레벨 스코프(let, const)
let foo = 123; //let -> 블록 외부에 있네 -> 전역변수
{
    //let -> 블록 내부에 있네 -> 지역변수
    let foo =456; 
    let bar =456;
}

console.log(foo); //123 이 출력됨.
//console.log(bar); // Uncaught ReferenceError: bar is not defined : 블록 외부에서는 무효하다.


/********************************************************************/

//JS 자료형 확인하기
// typeof 연산자 : 변수/값의 자료형을 출력하는 연산자

//undefined : 정의되지 않은 변수 / 값이 아직 대입되지 않았다
var undef;
console.log("undef : ", undef, typeof undef);

//string(문자열) : "" 또는 '' 내부에 작성된 값
const name ='홍길동';
console.log("name : ", name, typeof name);

const phone = '01012341234';
console.log("phone : ", phone, typeof phone );

const gender = "M"; // 한 글자만 작성해도 문자열(string). 자바에서는 char 이렇게 따로 자료형이 있는데, 여기에선 그냥 string 으로 퉁침
console.log("gender : ", gender, typeof gender);

//number (정수, 실수, 양수, 음수, 0 등 모든 숫자를 의미한다.)
const age = 25;
const height = 178.9;

console.log("age : ", age, typeof age);
console.log("height : ", height, typeof height);

//boolean (논리 값)
const isTrue = 5
console.log(isTrue - 3 == 2);

//object (객체)
// 값으 ㄹ여러개 저장할 수 있는 형태

//1) 배열(Array) : 여러 값이 나열되어 있는 것의 묶음
const numbers = [10, 20, 30];
console.log("numbers : ", numbers, typeof numbers); //type이 array가 아니라, object임에 주의
console.log("numbers 배열 값 중 0번째 : ", numbers[0], typeof numbers[0]);
console.log("numbers 배열 값 중 1번째 : ", numbers[1], typeof numbers[1]);
console.log("numbers 배열 값 중 2번째 : ", numbers[2], typeof numbers[2]);

//2) JS 객체(object) :{K:V, K:V ..} 이렇게 Map형식으로 여러개 저장하는 형태

// K(key) : 값을 구분하는 이름(변수명과 비슷)
// V(value) : key 에 대응되는 값 (변수에 대입되는 값과 비슷)

const user = {id : "user01", pw : "pass01", userName : "홍길동" };
console.log(user);
//객체에 접근하는 방법은 2개가 있다. 
//방법 1 : 변수명['key']
//방법 2 : 변수명.key
console.log("user['id'] : ", user['id']);
console.log("user['pw'] : ", user['pw']);
console.log("user['userName'] : ", user['userName']);

console.log(user.id);
console.log(user.pw);
console.log(user.userName);

//함수(function)

//작성법 
//const 변수명 = function(){}; 여기서의 변수명이 곧 함수이름이 되는 경우가 많음

const sumFn = function(a,b){return a+b}; //익명함수는 이렇게 쓴다.

/* 위 함수를 아래처럼 쓸 수도 있다.
function sumFn (a,b){
    return a+b;
}
*/

console.log(typeof sumFn); 
console.log(sumFn(3,5));


