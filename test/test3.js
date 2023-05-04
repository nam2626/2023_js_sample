// 숫자하나를 저장해서 저장한 숫자가 완전수 인지 체크하는 코드를 작성하시오
let n = 6;
let total = 0;
for(i=1;i<n;i++){
    if(n % i == 0)
        total += i;
}
if(total == n)
    console.log('완전수 입니다.');
else
    console.log('완전수가 아닙니다.');