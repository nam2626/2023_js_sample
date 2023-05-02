//증감 연산자
//++ : 1씩 증가
//-- : 1씩 감소
let a = 10;
a++;
console.log(a);
++a;
console.log(a);
console.log('-----------');
let b = 10;
console.log(b); //10
console.log(b++); //10
console.log(b); //11
console.log('-----------');
console.log(b);//11
console.log(++b);//12
console.log(b);//12

let c = 0;
c = a + b++ + b * 2;
console.log(c);
