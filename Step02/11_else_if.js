/* 
    if(조건식1){
        조건식1이 true일때 실행할 코드
    }else if(조건식2){
        조건식2이 true일때 실행할 코드
    }else if(조건식3){
        조건식3이 true일때 실행할 코드
    }else{
        모든 조건식이 false일 때 실행할 코드
    }
*/
let n = 10;
if(n > 0){
    console.log('양수');
}else if(n < 0){
    console.log('음수');
}else{
    console.log('0 입니다.');
}