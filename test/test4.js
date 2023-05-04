// 숫자 하나를 저장해서 해당 숫자가 소수인지 아닌지 판단해서 출력하는 코드를 작성하시오.

var n = 31;
var i = 2;

while(i<n){
    if(n % i == 0) break;
    i++;
}
if(i==n) console.log('소수입니다.');
else console.log('소수가 아닙니다.');