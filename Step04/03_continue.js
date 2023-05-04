/* 
    continue 키워드
        - 반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행하게 함
        - if문과 함께 사용, 특정 조건에는 반복을 멈추고 다음 반복을 진행할 수 있음
*/
let i = 1;
while(i<=10){
    if(i % 2 == 1){
        i++;
        continue;
    }
    console.log(i);
    i++;
}