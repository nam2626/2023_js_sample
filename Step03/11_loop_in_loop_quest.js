/*  ''  '*'  +=   for
    아래 예시에 만들어 놓은 삼각형을 출력하는 코드
        *            
       ***
      *****
     *******
    *********
*/
for(i=0;i<5;i++){
    str = '';
    for(j=0;j<5-1-i;j++){
        str += ' ';
    }
    for(j=0;j< i * 2 + 1;j++){
        str += '*'
    }
    console.log(str);
}

console.log('----------------');
for (i = 0; i < 5; i++) {
    var star = '';
    for (j = 0; j < 9; j++) {
        if (j < 4 - i || j > 4 + i) {
            star += ' ';
        } else {
            star += '*';
        }
    }
    console.log(star);
}