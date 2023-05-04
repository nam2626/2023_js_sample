/* 
    1부터 숫자를 차례대로 계속 더하면서 반복문을 진행
    숫자의 합이 1000이 넘어가는 순간의 숫자와 반복문을 빠져나오는 코드를 작성
*/
let i = 1, sum = 0;

while(true){
    sum += i++;
    if(sum > 1000)
        break;
}
console.log(sum);