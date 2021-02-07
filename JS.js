//var newContent = prompt("JavaScript는 HTML 페이지를 변경할 수 있습니다.");
//document.body.innerText = newContent;
//var a = document.getElementById("songwriter");
//a.innerHTML= "<h1>hello</h1>"
var b = document.getElementById("logo");
b.setAttribute("src","1.png")

hr = document.createElement("hr");
 // <hr> 생성 = 줄이 생성되는것.
document.body.appendChild(hr);
 // body 맨 마지막에 추가되는것.
document.body.insertBefore( hr, document.body.children[3]);
 // body의 3번째 밑에 추가. 즉 1절 위에 줄을 추가
hr2 = hr.cloneNode();
 // 줄을 2개 넣고싶으면 hr을 복제하여 hr2에 넣고사용
document.body.insertBefore(hr2, document.body.children[6]);
hr3 = hr.cloneNode();
document.body.insertBefore(hr3, document.body.children[9]);

//document.body.removeChild(hr2);
 // 삭제시키는방법. or
//document.body.removeChild(document.body.children[3]);
// 삭제시키는방법 2


