// //prompt 사용 연습
// function test(){
//     const password = prompt("비밀번호를 입력하세요");
//     //확인 버튼 누르면 -> input창에 작성한 입력한 문자열이 전송되고,
//     //취소 버튼 누르면 -> null 값이 전송된다.

//     if(password ==null){
//         alert("취소");
//     } else{
//         if(password == "1234"){
//             alert("비밀번호 일치");

//         }else{
//             alert("비밀번호 불일치");
//         }

//     }
// }

const output = document.getElementById("output");
const amount = document.getElementById("amount");

let balance = 10000; //잔액 기록 변수(초기값 10000)
const password = "1234"; //비밀번호 저장 변수(초기 비밀번호 문자열 1234)

output.innerText = balance;

function deposit(){
    if(amount.value.length==0){
        alert("금액을 입력해주세요");
    } else{        
        const 금액 = Number(amount.value);
        balance += 금액;
        output.innerText = balance;
        amount.value = "";
    }
}

function withdrawal (){

    if(amount.value.length == 0){
        alert("금액을 입력해주세요");
    } else{
        const password = prompt("비밀번호를 입력해주세요");
        
        
        if(password == null){ //prompt 창 취소 누른경우
            alert("취소");
        } else{
            if(password != "1234"){
                alert("비밀번호가 일치하지 않습니다.");
            } else{
                const money = Number(amount.value);

                //출금할 금액이 잔액 보다 큰 경우 : 출금이 불가능하다고 해줘야해.
                if(money > balance){
                    alert("출금금액이 잔액보다 클 수 없습니다.");
                }
                else{
                    balance -= money;
                    output.innerText = balance;
                    amount.value = "";

                    alert(`${money} 원이 출금되었습니다. 남은 잔액 ${balance}`);
                }


            }
        }
    }

   
    


}