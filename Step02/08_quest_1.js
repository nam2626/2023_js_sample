//숫자 하나를 저장한 후에 해당 숫자가 양수인지 음수인지 출력
let num = 0;
let result = num < 0 ? '음수' : '양수';
console.log(result);
result = num < 0 ? '음수' : (num == 0 ? '0입니다.' : '양수');
console.log(result);

//숫자 두개를 저장한 다음에, 두 숫자의 뺄셈 결과를 무조건 양수로 만들어서 출력
// 10, 9 --> 1
let n1 = 10, n2 = 9;
result = a > b ? a - b : b - a;
console.log(result);