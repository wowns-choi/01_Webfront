function check1(){
    //1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    for(let i=1; i<=10; i++){
        console.log(i);
        if(i==5){
            break; //break 문에서 가장 가까운 반복문을 나가버림.
        }
    }
}

//무한 반복하는 while문 멈추기
function check2(){

    let i = 1;
    //i가 10 초과시 멈추게 할거임.
    while(true){
        console.log("i : ", i++);
        if(i>10){
            break;
        }
    }
}
// continue 확인하기
function check3(){

    //1부터 20까지 출력. 단, 3의 배수는 건너뛰기
    for(let i = 1; i<=20; i++){
        if(i % 3 == 0){
            continue;
        }

        console.log("i : ", i);
    }
}

//1부터 30까지 1씩 증가하며 출력하는데, 
//단, 홀수 또는 10의 배수는 건너뛰기
function check4(){
    for(let i =1; i<=30; i++){
        if(i%2==1 || i%10==0 ){
            continue;
        }
        console.log("i : ", i);
    }
}

/*0~9까지 5줄 출력
    단, 각 줄에서 4의 배수는 건너뛰기
    3번째 줄 출력 후 멈추기
*/
function check5(){

    for(let i=1; i<=5; i++){
        let numbers = "";
        if(i>3){
            break;
        }
        for(let n=0; n<=9; n++ ){
            if(n!=0){
                if(n%4==0){
                    continue;
                }
                
            }
            numbers += n;
        }
        console.log(numbers);

    }
}

function startGame (){
    const randomNumber= Math.floor(Math.random() * 100);
    console.log(randomNumber);
    let inputNumber = prompt("숫자를 입력해주세요");
    let count = 0;
    while(true){
        if(inputNumber < randomNumber){
            count += 1;
            prompt(`[UP] 숫자를 입력해주세요 시도횟수: ${count}`);
        } else if(inputNumber > randomNumber){
            count += 1;
            prompt(`[DOWN] 숫자를 입력해주세요 시도횟수: ${count}`);
        } else if(inputNumber == randomNumber){
            alert("정답입니다. 축하드립니다.");
            break;
        } else if(inputNumber == null){
            alert("게임을 종료하셨습니다.");
            break;
        }
         
    
    }

}

