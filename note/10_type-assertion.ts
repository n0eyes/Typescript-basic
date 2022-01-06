//타입 선언
let foo1;
foo1 = 20;
let foo2 = foo1 as number;


// DOM API 조작
// <div id='app'>hi</div>

let div = document.querySelector('#app') as HTMLDivElement;
//div = Element | null
if(div){
  // div.innerText = 'abc'
}
div.innerText = 'abc'
//div 단언을 통해 위와 같이 간편하게 메서드 사용 가능.