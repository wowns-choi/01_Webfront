document.getElementById("id-input").addEventListener("keyup", function(){

    const regExp = /^[a-z][A-Z0-9a-z-_]{5,13}$/;
    if(regExp.test(this.value)){this.style.backgroundColor="springgreen";}
    
})

const duplicateInput = document.getElementById("duplicateInput");
const passwordInput = document.getElementById("passwordInput");
const password = document.getElementById("password");
const duplicateCheckPassword = document.getElementById("duplicateCheckpassword");
duplicateInput.addEventListener(
    "keyup", function(){
        console.log(passwordInput.value);
        if(passwordInput.value.trim() == ""){
            alert("비밀번호를 입력해주세요");
            passwordInput.focus();
        }

        const notCorrect = document.createElement("div");
        notCorrect.innerHTML = "비밀번호가 불일치";
        notCorrect.style.color = "red";

        const correct = document.createElement("div");
        correct.innerHTML = "비밀번호가 일치함";
        correct.style.color="springgreen";


        if(passwordInput.value != duplicateInput.value){
            duplicateCheckPassword.lastChild.remove(); //왜, 최초에 불일치 시 input태그가 지워져야 하는데, 안지워지나?
            duplicateCheckPassword.append(notCorrect);
        }

        if(passwordInput.value == duplicateInput.value){
            duplicateCheckPassword.lastChild.remove();
            duplicateCheckPassword.append(correct);
        }
        
    }
)
const nameInput = document.getElementById("nameInput");
const name = document.getElementById("name");
nameInput.addEventListener("keydown", () => {
    
    const regExp = /^[ㄱ-힣]{2,5}$/;
    const div1 = document.createElement("div");
    


    if(regExp.test(nameInput.value)){
        name.lastChild.remove();
        div1.innerHTML = "정상입력";
        div1.style.color = "yellowgreen";    
        name.append(div1);
    } else if (!regExp.test(nameInput.value)){
        name.lastChild.remove();
        div1.innerHTML = "한글로 입력해주세요";
        div1.style.color = "red";    
        name.append(div1);
    }

})

const genders = document.querySelectorAll("[name=gender]");
const telNumber = document.querySelector("#telNumber");

function validation (){
    if(genders[0].checked == false && genders[1].checked == false){
        alert("성별을 선택해주세요");
        e.preventDefault();
        
    }
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
   
    if(!regExp.test(telNumber.value)){
        alert("전화번호의 형식이 올바르지 않습니다");
        e.preventDefault();
        
    }

    alert("회원가입 완료");

}


const joinBtn = document.getElementById("join-btn");
joinBtn.addEventListener("click", function(e) {
    validation();
    
})