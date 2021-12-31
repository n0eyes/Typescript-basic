//함수의 파라미터에 타입 정의
// function sum(a: number, b: number) {
//   return a + b;
// }
sum(10, 20);

//함수의 반환 값에 타입 정의
function add(): number {
  return 10;
}

//파라미터와 반환 값 모두 정의
function sum(a: number, b: number): number {
  return a + b;
}
//파라미터의 개수까지 체크
// sum(1, 2, 3, 4, 5);

//함수의 옵셔널 파라미터
function showLog(a: string, b?: string, c?: string) {}
showLog("hi");
showLog("hi", "Im noeyes");
