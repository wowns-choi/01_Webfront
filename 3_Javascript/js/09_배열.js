//배열 선언 및 기초 사용법
function check1(){

    //배열 선언 방법 확인
    const arr1 = new Array(); //0칸짜리 배열 생성
    const arr2 = new Array(3); //3칸짜리 배열 생성
    const arr3 = []; //0칸짜리 배열 생성
    const arr4 = ["사과", "바나나", "딸기"]; //3칸짜리 배열 생성

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    //배열명.length : 배열의 길이를 알려줌.
    console.log(arr1.length); //0
    console.log(arr2.length); //3
    console.log(arr3.length); //0
    console.log(arr4.length); //3

    //배열의 index
    /* 
        배열의 각 칸을 구분하는 번호를 index라고 함.
        0부터 시작.
        중간에 번호를 생략할 수 없다(항상 연속적)
        마지막 index == 배열길이 - 1
    */

    //배열명[index] -> 배열의 해당 인덱스에 존재하는 데이터 반환
    console.log(arr4[0]);
    console.log(arr4[1]);
    console.log(arr4[2]);

    //배열명[index] = 값 -> 해당 인덱스에 지정된 값 대입
    arr2[0] = 100;
    arr2[1] = "점심먹자";
    arr2[2] = true;
    console.log(arr2[0]);
    console.log(arr2[1]);
    console.log(arr2[2]);
    //여기서 알 수 있는 자바스크립트 배열의 특징 : 인덱스별로 자료형을 다르게 할 수 있다.
 
    //길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가 가능
    arr1[0] = "가";
    arr1[1] = "나";
    arr1[2] = "다";
    console.log("arr1 : ", arr1);

    //원하는 index에 값을 마음대로 추가할 수 있다. 
    //그렇다면 중간에 건너띈 index 는 빈칸으로 채워짐
    arr1[4] = "마";
    console.log("arr1 : ", arr1);
}

//배열과 for문
function check2(){
    //for문을 이용해서 배열 요소 초기화 하기
    //초기화 : 변수/배열 요소에 처음으로 값을 대입하는 행위
    
    //index : 배열의 각 칸을 구분하는 번호
    //배열 요소 == 배열의 각 칸

    //for 문 안썼을 경우 초기화
    const arr1 = [];
    arr1[0] = 0;
    arr1[1] = 10;
    arr1[2] = 20;
    arr1[3] = 30;

    console.log("arr1 : ", arr1);

    //for 문 썻을 경우 배열 초기화
    const arr2 = [];
    for(let i = 0; i<4; i++){
        arr2[i] = 10*i;
    }
    console.log("arr2 : ", arr2);


}

//배열과 for문 2
function check3(){
    //배열에 지정된 값 하나씩 순서대로 출력하기
    // -> for문을 이용해서 배열의 모든 요소 접근하기

    const arr = [10, 20, 50, 100, 500, 1000];

    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }

}

//배열과 for문 3
function check4(){
    //for문을 이용해서 배열을 순서대로 초기화한 후
    //다른 for문을 이용해서 배열 요소를 하나씩 출력

    const arr = new Array(5); //자리만 5칸 마련해둠
    for(let i=0; i<arr.length; i++){
        arr[i] = Number(prompt(`${i}번째 숫자 입력`));
    }

    let sum = 0; //합계를 내주기 위한 통(변수)

    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    alert(sum);

}

function selectMenu(){
    //결과 출력 span
    const menuResult= document.getElementById("menuResult");
    //저녁 메뉴로 초기화된 배열 생성
    const menu = ["제육볶음", "돈까스", "파스타",
                    "순대국", "닭갈비", "초밥",
                    "삼겹살", "알탕", "햄버거",
                    "피자", "백반"]; //길이 11

    const randomNumber = Math.floor(Math.random() * menu.length);
    menuResult.innerText = menu[randomNumber];
}

//2차원 배열
function check5(){
    const arr = [
    [1,2,3,4], 
    [5,6,7,8],
    [9,10,11,12]
    ];

    //배열명[행][열]
    console.log(arr[1][3]);

    //arr[4][3] 에 600 넣고 빼오기
    const arr1 = [100,200,300,400];
    const arr2 = [900,800,700,600];

    arr[3] = arr1;
    arr[4] = arr2;

    arr[4][3] = 600;
    console.log(arr[4][3]);
}

//2부터 2씩 증가하는 수를
//5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기
function check6(){
    const arr = []; //2차원배열의 바깥쪽의 배열의 공간을 만들어준것
    let count = 2;
    for(let i=0; i<5; i++){
        arr[i] = []; //2차원배열의 안쪽의 배열의 공간을 만들어주는 거야. 
        for(let n=0; n<5; n++){
            arr[i][n] = count;
            count += 2;
        }
    }
    console.log(arr);
}