/*  ''  '*'  +=   for
    아래 예시에 만들어 놓은 삼각형을 출력하는 코드
    *            
    **
    ***
    ****
    *****
    ******
    *******
    ********
    *********
    **********
*/
for(i=0;i<10;i++){
    let str = '';
    for(j=0;j<i+1;j++){
        str += '*';
    }
    console.log(str);
}