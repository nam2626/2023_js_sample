//1~100까지의 숫자 중 7과 9의 배수를 출력
//단, 7과 9의 공배수는 한번만 출력
for(i=1;i <= 100;i++){
    if(i % 7 == 0 || i % 9 == 0)
        console.log(i);
}