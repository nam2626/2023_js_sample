//구구단 2단~9단까지 출력
for(dan=2;dan<10;dan++){
    console.log('--%d 단--',dan);
    //1~9까지 곱한 값
    for(i=1;i<10;i++){
        console.log('%d * %d = %d',dan,i,dan * i);
    }
}
let d=2, j = 1;
while(d<10){
    console.log('--%d 단--',d);
    //1~9까지 곱한 값
    j = 1;//중첩된 반복문 전에 제어변수를 초기화
    while(j<10){
        console.log('%d * %d = %d',d,j,d * j);
        j++;
    }
    d++;
}