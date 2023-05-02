//논리 연산자
// && , || , !
// &&(AND) : 양쪽의 조건식이 모두 true일 때 true가 되는 연산자
// ||(OR) : 양쪽의 조건식 중 하나라도 true 면 true가 되는 연산자
// ! (NOT) : 조건식의 결과를 반대로 뒤집음, true -> false, false -> true

// && (AND)
let a = 10, b = 20;
console.log(a > 5 && b < 30);
console.log(a > 5 && b > 30);

// || (OR)
console.log(a > 5 || b < 30);
console.log(a > 5 || b > 30);
console.log(a < 5 || b > 30);

// ! (NOT)
console.log(!(a > 5));
console.log(!(a > 5 || b < 30));
console.log(!(a > 5 && b < 30));

//단락 회로(Short Citcuit)
let n1 = 10, n2 = 20;
let result = n1 < n2 || ++n2 > 10;
console.log(n1, n2, result);
result = n1 > n2 && ++n2 > 10;
console.log(n1, n2, result);



