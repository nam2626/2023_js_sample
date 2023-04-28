// 변수(Variable) : 데이터를 저장하는 공간
// var 변수명 = 값;
//숫자 - number
var a = 1;
a = 10; //마지막에 저장된 값만 유지
console.log(a);
//변수를 동시에 2개 이상 선언
var b = 1, c = 2;
console.log(b, c);

//문자열 저장 - string
var str = 'Hello World';
console.log(str);
str = '안녕하세요';
console.log(str);

a = c; //변수 a에 변수 c의 값을 저장
console.log(a);

//논리값 - boolean
var flag = true;
console.log(flag);
flag = false;
console.log(flag);

//변수명 지을때 주의사항
//1. 변수명은 숫자로 시작할 수 없다.
//  var 1a = 10; //에러
//2. 변수명은 특수문자를 _, $와 알파벳, 숫자 조합으로 구성된다.
//3. 변수명은 keyword(예약어)를 사용할 수 없다.
//4. 변수명은 대소문자 구분한다.
//5. 변수명은 공백을 포함할 수 없음.
