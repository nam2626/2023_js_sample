//1~100까지 숫자 중 3과 5의 배수의 합을 출력하는 코드를 작성하세요
let total = 0;
for(i=1;i<=100;i++){
    if(i % 3 == 0 || i % 5 == 0)
        total += i;
}
console.log(total);
