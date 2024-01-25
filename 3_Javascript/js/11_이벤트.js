// 인라인 이벤트 모델 확인
function check1(btn){
    //매개변수 btn == 클릭한 버튼(this)
    console.log(btn);
    
    //this 를 통해 버튼의 배경색을 얻어와 저장
    const bgColor = btn.style.backgroundColor;
    console.log(bgColor);

    //버튼이 클릭될 때 마다 pink <-> yellow 변경
    if(bgColor == "yellow"){
        btn.style.backgroundColor = "pink";
    } else{
        btn.style.backgroundColor = "yellow";
    }

}

//--------------------------------------------------------------------------------------

//고전 이벤트 모델 확인
//선택자로 요소를 선택한 다음, 요소.이벤트리스너 = 이벤트핸들러 라고 하면 됨.
const test1a= document.querySelector("#test1-1");

test1a.onclick = function(){
    alert("고전 이벤트모델 확인 버튼 클릭됨");
}

//고전 이벤트 모델 제거하기
//#test1-2 버튼 클릭시 
//#test101 의 onclick 이벤트 리스너의 이벤트 핸들러 제거하기
document.querySelector("#test1-2").onclick = function(){
    
    //기존 onclick 의 이벤트 핸들러를 null 로 덮어씌움(이벤트 제거)
    document.querySelector("#test1-1").onclick = null;
    alert("이벤트 제거됨");
}

//고전 이벤트 모델 단점
// #test1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

//#test1-3 요소가 클릭 되었을 때 배경색을 red로 변경해볼거임.

test1c.onclick = function(){
    test1c.style.backgroundColor = "red";
}

//.........6개월 후 .............. 

//#test103 이 클릭되었을 때 글자색을 "white"로 변경하려고 함.

test1c.onclick = function(){
    test1c.style.color = "white";
}
//했더니, 배경색이 날라가 버림. 이게 단점이다. onclick에 저장된 값이 덮어씌워지면서 이전코드(배경색 red)가 사라지는 문제 발생

//-----------------------------------------------------------------------------------

// 표준 이벤트 모델 작성법
//요소.addEventListener("이벤트 종류", function(){})           주의) 이벤트 종류는 문자열로 써줘야함.
const test2 = document.querySelector("#test2");

test2.addEventListener("click",function(){
    
    //투명도 1(불투명) -> 0(투명) , 0.1씩 투명도를 높여볼거임.

    //현재 #test2 의 투명도 확인
    let curr = test2.style.opacity;
    
    //맨 처음에는 투명도 '' 임. 그래서, 초기값으로 1을 대입해줘야함.
    if(curr == ''){
        test2.style.opacity = 1;
        curr = 1;
    }

    //투명도 0.1 감소시킬 거임.
    test2.style.opacity = curr - 0.1;

    //완전히 투명해졌다면, 자동으로 완전히 불투명하게 만듦
    if(test2.style.opacity == 0){
        test2.style.opacity = 1; 
    }
});

let count = 0;

//#test2 요소를 클릭하면 클릭 횟수 카운트
test2.addEventListener("click", function(){
    count += 1;

    //표준 이벤트 모델의 이벤트 핸들러 안에서 this의 의미
    // == 이벤트가 발생한 태그 자체를 의미한다.
    console.log(this); // <div id="test2"></div>
    this.innerText = count;
})

const box3 = document.querySelector("#box3");
const input3 = document.querySelector("#input3");

input3.addEventListener("keydown", function(e){ //e : 발생한 이벤트에 대한 정보를 담은 객체
   
    if(e.key=="Enter"){
        console.log("hello");
        const color = this.value;
        console.log(color);
        box3.style.backgroundColor = color;
    }
})

//색깔 클릭하면, 배경색이 얼럿창이 나오도록
box3.addEventListener("click", function(e){
    // const backgroundColor = this.style.backgroundColor;
    // alert(`${backgroundColor}`);

    //위 방법 말고, e(이벤트 객체)를 통해서 해결해볼거야.
    console.log(e);//여기보면, target 이라는 게 있음. 이벤트가 발생한 요소를 가리킨다. 그래서 아래와 같이 해줘도 됨.
    alert(`배경색 : ${e.target.style.backgroundColor}`);
    
})
