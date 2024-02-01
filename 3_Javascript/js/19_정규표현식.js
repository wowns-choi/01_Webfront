// 정규 표현식 객체 생성 + 확인하기
document.getElementById("btn1").addEventListener("click", () => {

    //정규표현식 객체 생성
    const regExp1 = new RegExp("script"); //아마 Regular Expression 인듯
    //문자열 "script" 와 일치하는 문자열이 있는지 검사하는 정규표현식

    const regExp2 = /java/;
        //문자열 "java" 와 일치하는 문자열이 있는지 검사하는 정규표현식

    //확인하기
    const str1 = "저희는 지금 javascript를 공부하고 있습니다";
    const str2 = "jsp(java server page) 도 나중에 할겁니다";
    const str3 = "java, java, java";

    console.log(regExp1.test(str1)); //true
    console.log(regExp1.test(str2)); //false
    console.log(regExp1.test(str3)); //false

    console.log(regExp2.exec(str1));
    console.log(regExp2.exec(str2));
    console.log(regExp2.exec(str3));

})

//메타 문자 확인하기
document.getElementById("btn2").addEventListener("click", () =>{

    const div1 = document.getElementById("div1");

    // a (일반문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색하는 것
    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple: " + regExp1.test("apple") + "<hr>";
    div1.innerHTML += "/a/, price: " + regExp1.test("price") + "<hr>";

    //[abcd] : 문자열 내에 a,b,c,d 중에 하나라도 일치하느 문자가 있는 지 검색하는 것
    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd], apple: " + regExp2.test("apple") + "<hr>";
    div1.innerHTML += "/[abcd], ssbss: " + regExp2.test("ssbss") + "<hr>";
    div1.innerHTML += "/[abcd], qwert: " + regExp2.test("qwert") + "<hr>";

    // ^(캐럿) : 문자열의 시작을 의미
    const regExp3 = /^group/; //문자열의 시작이 group 인지 확인해라
    div1.innerHTML += "/[^group], group100 : " + regExp3.test("group100") + "<hr>";

    // $ : 문자열의 끝을 의미
    const regExp4 = /group$/;
    div1.innerHTML += "/[group$], group100 : " + regExp4.test("group100") + "<hr>";

})


//이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", function() {
    const span = document.getElementById("inputNameResult");
    const regExp5 = /^[ㄱ-힣]{2,5}$/; //시작과 끝이 한글로 이루어진 2글자~5글자 사이 모든 한글

    //빈칸인지 검사 //this 는 이벤트가 발생한 현재 태그를 의미한다.
    console.log(this.value);
    if(this.value.length == 0 ){
        span.innerText = "";
        return;
    }

    //유효성 검사
    if(regExp5.test(this.value)){
        span.innerText = "유효한 이름 형식 입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";
    }else{
        //유효하지 않은 경우
        span.innerText = "이름 형식이 유효하지 않습니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
})

//주민등록번호 유효성 검사
document.getElementById("inputPno").addEventListener("keyup", (e)=>{
    const span = document.getElementById("inputPnoResult");
    if(e.target.value.length == 0){
        span.innerText = "주민등록번호를 작성해주세요";
        span.classList.remove("confirm");
        span.classList.remove("error");
        return;
    }

    //생년월일(6)-고유번호(7)
    const regExp = /^\d{6}\-\d{7}$/;
    /*
    주의할 건, - 는 \- 이렇게 써야함.
    */
   if(regExp.test(e.target.value)){
    span.innerText = "유효한 주민등록 번호 형식입니다.";
    span.classList.remove("error");
    span.classList.add("confirm");
   }else{
    span.innerText = "유효하지 않습니다.";
    span.classList.remove("confirm");
    span.classList.add("error");
    }
})

