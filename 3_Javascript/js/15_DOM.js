// Node 확인하기

document.querySelector("#btn1").addEventListener("click", () => {
    const test = document.querySelector("#test");
    
    //#test 의 모든 자식 노드 얻어오기
    //요소.childNodes
    const list = test.childNodes;
    console.log(list);

    //자식 노드 중 첫번째 li 요소
    const li1 = list[3];
    console.log(li1);

    // 1. 부모 노드 찾기(요소.parentNode)
    // -> li1 부모 노드 배경색 변경하기
    li1.parentNode.style.backgroundColor = "skyblue";
    
    // 2. 첫번째 자식 노드 찾기 (요소.firstChild)
    // -> #test(ul태그)의 첫번째 자식 노드 찾기
    //부모의 0번째 인덱스를 뱉어냄.
    console.log(test.firstChild);

    // 3. 마지막 자식 노드 찾기 (요소.lastChild)
    // -> #test(ul태그)의 마지막 자식 노드 찾기
    //부모의 마지막 인덱스를 뱉어냄.
    console.log(test.lastChild);

    // 4. 원하는 위치(index)에 존재하는 자식 노드 찾기
    // (요소.childNodes[index])
    // -> #test의 자식 노드 중 3번째 li태그를 찾아서 배경 pink 지정하기
    test.childNodes[9].style.backgroundColor = "pink";

    // 5. 이전/다음 형제 노드 찾기
    // (요소.previousSibling) : 이전 형제
    // (요소.nextSibling) : 다음 형제
    
    // -> 탐색용 코드는 연달아서 작성 가능하다.
    test.childNodes[9].nextSibling.nextSibling.style.backgroundColor = "yellow";

    // #test 의 마지막 자식 노드의 이전 형제 노드 선택
    console.log(test.lastChild.previousSibling);

    // -------------------------------------------------------
    // 노드 추가
    // 1. 마지막 자식 노드로 추가해보기 ( appendChild(노드) )
    // -> list[11]의 마지막 자식으로 "ZZZ"라는 TextNode 를 추가해보자.
    list[11].appendChild(document.createTextNode("ZZZ"));

    //2. 마지막 자식으로 추가 ( append("내용" 또는 노드 또는 요소 * n) )
    list[11].append("12345","abcd","가나다라"); //문자가 추가됨. 위의 appendChild 와 같은 거 해준다는 뜻.
    
    //3. 첫번째 자식으로 추가( prepend("내용" 또는 노드 또는 요소 * n) )
    list[11].prepend("오늘", "점심", "뭐먹지?");

    //4. 이전/다음 형제로 추가하기 (before/after("내용" 또는 노드 또는 요소 * n))
    // #test 전/후에 내용 추가
    test.before("이전 입니다");
    test.after("이후 입니다");

});


//-------------------------------------------------------
/*
      children : 자식 요소만 모두 선택
      parentElement : 부모 요소 선택


      firstElementChild : 첫 번째 자식 요소 선택
      lastElementChild  : 마지막 자식 요소 선택


      previousElementSibling : 이전 형제 요소 선택
      nextElementSibling     : 다음 형제 요소 선택
*/

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {

    //#test2 얻어오기(ul)
    const test2 = document.querySelector("#test2");
    
    //#test2 의 모든 자식 요소(children)
    console.log(test2.children);

    //#test2 의 부모 요소
    console.log(test2.parentElement);

    //#test2 의 첫 번째 자식 요소
    console.log(test2.firstElementChild);

    //#test2 의 마지막 자식 요소
    console.log(test2.lastElementChild);

    //#test2 의 이전 형제 요소
    console.log(test2.previousElementSibling);

    //#test2 의 다음 형제 요소
    console.log(test2.nextElementSibling);

})