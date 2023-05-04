// 숫자 하나를 저장해서 해당 숫자의 모든 약수를 출력하시오
let n = 24;

for(i=1;i<=n;i++){
    if(n % i == 0)
        console.log(i);
}