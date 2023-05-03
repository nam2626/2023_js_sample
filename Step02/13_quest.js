//변수에 점수(0~100)를 하나 저장한 후에 아래 등급표에 따라서 성적 등급을 출력
//100~90 : A, 89~80 : B, 79~70 : C, 69~60 : D, 59~0 : F, 범위를 벗어나면 '잘못된 점수 입니다'

let score = 55;

if(score > 100 || score < 0)
    console.log('잘못된 점수 입니다.');
else if(score >= 90)
    console.log('A');
else if(score >= 80)
    console.log('B');
else if(score >= 70)
    console.log('C');
else if(score >= 60)
    console.log('D');
else
    console.log('F');
