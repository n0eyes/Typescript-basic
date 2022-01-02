// enum Shoes{
//   Nike, // 0
//   Adidas // 1
// }
//별도로 값을 지정하지 않으면 number가 등록된다.
var Shoes;
(function (Shoes) {
    Shoes["Nike"] = "\uB098\uC774\uD0A4";
    Shoes["Adidas"] = "\uC544\uB514\uB2E4\uC2A4";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Nike;
console.log(myShoes);
//ex
var Answer;
(function (Answer) {
    Answer["Yes"] = "Yes";
    Answer["No"] = "No";
})(Answer || (Answer = {}));
function askQuestion(answer) {
    if (answer === Answer.Yes) {
        console.log('ok');
    }
    if (answer === Answer.No) {
        console.log("no");
    }
}
console.dir(Answer);
console.dir({})
askQuestion(Answer.Yes);
//enum에서 제공하는 값만 인자로 넘길 수 있다.
