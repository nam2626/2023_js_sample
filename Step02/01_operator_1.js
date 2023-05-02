//사칙연산자
// + - * / %
// % : 나머지
//1. 숫자 연산
//변수 두개 선언해서 숫자 두개 저장
var a = 10, b = 3;
//덧셈
console.log(a + b);
//뺄셈
console.log(a - b);
//곱셈
console.log(a * b);
//나눗셈
console.log(a / b);
// 나머지 나눗셈
console.log(a % b);

var c = 0;
c = a + b; // 계산된 결과값이 c에 저장
console.log(c);

//2. 문자열 연산 - 문자열과 다른 타입이 계산하면 문자열로 변환해서 합침
var str1 = 'Hello';
var str2 = 'World';

console.log(str1 + str2);
console.log(str1 + str2 + c); // 문자열 + 숫자 ---> HelloWorld13
console.log('A' + 'B' + 10 + 20); //AB1020
console.log('A' + true);

//3. 논리값 연산
var bool1 = true;
var bool2 = false;
console.log(bool1 + bool2);
console.log(bool1 + 10);
console.log(bool2 + 10);
