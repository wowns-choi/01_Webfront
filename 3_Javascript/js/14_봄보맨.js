let xindex = 0; //x좌표 방향으로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; //y좌표 방향으로 얼마만큼 이동했는지 기억할 변수

document.addEventListener("keydown", function(e){
    const bomberman = document.getElementById("bomberman");

    switch(e.key){
        case "ArrowRight" : xindex += 10;
            break;
        case "ArrowLeft" : xindex -= 10;
            break;
        case "ArrowUp" : yindex -= 10;
        break;
        case "ArrowDown" : yindex += 10;
        break;
        case "x" :
            const box = document.getElementById("box");
            box.innerHTML +=
            `<img src="../../images/boom.png"
            style="transform: translate3d(${xindex}px,${yindex}px, 0); position:absolute;"
            >`;
            break;
        default:
        alert("방향키와 x만 가능");
    }

    bomberman.style.transform = `translate3d(${xindex}px,${yindex}px, 0)`;



})