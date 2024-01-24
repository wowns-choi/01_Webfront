const v1 = document.getElementById('input1');
function check1 (){
    const value1 = Number(v1.value);
    if(value1 > 0){
        alert("양수입니다.");
    }

    if(value1 <= 0){
        alert("양수가 아닙니다.");
    }
}

function check2(){
    const random = Math.floor(Math.random()*101);
    if(random % 2 == 0){
        alert(`${random}은 짝수입니다`);
    } else{
        alert(`${random}은 홀수입니다`);
    }
}
// -3 ~ 3 사이 난수를 발생 시켜 양수, 음수, 0 판별
function check3(){
    const random = Math.floor(Math.random() * 7) - 3;
    let message = random + "은/는 ";

    if(random == 0){
        message += "0입니다";
    } else if (random >0){
        message += "양수입니다."
    }else{
        message += "음수입니다."
    }

    alert(message);
}

const ageString = document.getElementById('inputAge');

function check4 (){
    age = Number(ageString.value);
    if(ageString.value.length == 0 ){
        alert("미입력");
    } else{
        //중첩 if문
        if(age >= 0 && age <= 13){
            alert("어린이");
        } else if( age >=14 && age<=19){
            alert("청소년");
        } else if (age >= 20 && age <=150){
            alert("성인");
        } else if (age <0 || age >150){
            alert("잘못입력하셨습니다");                                                                                                           
        }
    }
}

//switch 문을 이용한 계산기 
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const calcResult = document.getElementById("calcResult");

function calc(op){
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);

    let resultValue;
    console.log(op);
    switch(op){
        case "+" : resultValue = num1 + num2;
        break; /* break 안쓰면, 다음 case로 넘어간다. */
        case "-" : resultValue = num1 - num2;
        break;
        case "*" : resultValue = num1 * num2;
        break;
        case "/" :resultValue = num1 / num2;
        break;
        case "%" : resultValue = num1 % num2;
        break;
        //디폴트값도 정할 수 있음
    default : resultValue = "잘못된 연산자"; ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅃ
        break;
    }
    calcResult.innerText = resultValue;
}


