interface Dev {
  name: string;
  skill: string;
}

interface Per {
  name: string;
  age: number;
}

function intro() : Dev | Per {
  return {name: 'semin', age: 33, skill: 'game'}

}
let who = intro()
// console.log(who.skill) // error | 유니온의 문제

//타입 가드를 쓰지 않을 경우 코드가 복잡해진다.
if((who as Dev).skill){
  console.log((who as Dev).skill)
} else {
  console.log((who as Per).name)
}

//타입 가드 네이밍 관례 => is로 시작
function isDev (target: Dev | Per):target is Dev{
  return (target as Dev).skill !== undefined;
}

if(isDev(who)){
  console.log(who.skill)
} else {
  console.log(who.age)
}