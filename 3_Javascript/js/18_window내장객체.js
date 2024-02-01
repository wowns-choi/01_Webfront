//window.setTimeout()
document.getElementById("btn1").addEventListener("click", ()=> {
    //window.setTimeout();  여기서 window 생략 가능
    setTimeout(function(){alert("3초 후 출력!");},3000);

})

// ----------------------------------------------------
// window.setInterval()

let interval; // setInterval 을 저장하기 위한 전역 변수를 만들어보자.

// 현재 시간을 문자열로 반환하는 함수를 만들것이다.
function currentTime(){
    const now = new Date();
    let hour = now.getHours(); // 시
    let min = now.getMinutes(); //분
    let sec = now.getSeconds(); //초

    if(hour <10){
        hour = "0" + hour;
    }
    if(min <10){
        min = "0" + min;
    }
    if(sec <10){
        sec = "0" + sec;
    }
    
    return hour + " : " + min + " : " + sec;

}

function clockFn(){
    const clock = document.getElementById("clock");
    clock.innerText = currentTime();

    interval = setInterval(function(){
        clock.innerText = currentTime();
    }, 1000);
}

clockFn(); //함수 호출

//clearInterval()
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);

    // ^[a-z][a-z\d\-_]{5,13}$
})
