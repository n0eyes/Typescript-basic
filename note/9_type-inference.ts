//타입 추론 기본 1
let A = 'abc';

//반환 값 string 추론 가능
function getWhat(B = 10){
  let C = '10';
  return A+B;
}

//타입 추론 기본 2

// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// const itmes: Dropdown<string>={
//   value: 'shoes',
//   title: 'nike'
// }


//타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailDropdown<K> extends Dropdown<K>{
  desc: string;
  tag: K;
}
const itmes: DetailDropdown<string>={
  value: 'shoes',
  title: 'nike',
  desc: 'bulabula',
  tag: 'running'
}
