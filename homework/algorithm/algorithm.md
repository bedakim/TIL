# 문제 1

* 두 수 x, y를 입력받아 큰 수를 반환하는 함수(larger)를 작성하세요.

let large = function (x , y){
    if (x > y){
        return x;
    }
    else (x < y){
        return y;
    }
};

large (4, 12);

# 문제 2

* 세 수 x, y, z를 입력받아 그 곱이 양수이면 true, 0 혹은 음수이면 false, 둘 다 아니면 에러를 발생시키는 함수(isPositive)를 작성하세요.

let isPositive = function (x , y, z){
    if (x * y * z > 0){
        return true;
    }
    else if (x * y * z <= 0 ){
        return false;
    }
    else{
      throw new Error('입력값이 잘못되었습니다.');
    }
};

// isPositive(2, 2, '뀨');
isPositive(2, -5, 0);

# 문제 3

어떤 숫자(num)가 짝수인지 홀수인지 출력하는 함수(printEvenOdd)를 작성하세요.

let printEvenOdd = function(num){
    if (num%2 === 1 ){
        return '홀수';
    }
    else{
        return '짝수';
    }
};

printEvenOdd(6);

# 문제 3-1

문제 3번의 함수(printEvenOdd)를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 함수(printEvenOdd20)를 작성하세요.

let number = 1;

const printEvenOdd20 = function(num){
    console.log(number ++ + ':' + (num % 2 === 0 ? '짝수' : '홀수'));
}

for(let i = 1; i < 21; i++){
    printEvenOdd20(i);
}

# 문제 4 

세 수를 입력받아 큰 것부터 차례대로 출력하는 함수(printLargerFirst)를 작성하세요.

let printLargerFirst = function sort(x, y, z) {
  let arr = [x, y, z];
  arr.sort(function(a, b){
    return b - a;
  });
  for(let i = 0; i < 3; i++) {
    console.log(arr[i]);
  }
}
printLargerFirst(12, 0, -15);  


# 문제 5

두 문자열 str1, str2를 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수(insensitiveEqual)를 작성하세요.

const insensitiveEqual = function(srt1, str2){
console.log((srt1.toLowerCase() === str2.toLowerCase()) ? 'true' : 'false');
}

insensitiveEqual('hello', 'hello'); // 반환값: true
insensitiveEqual('hello', 'Hello'); // 반환값: true
insensitiveEqual('hello', 'world'); // 반환값: false

# 문제 6

이메일 주소를 입력받아, 아이디 부분을 별표(*)로 가린 새 문자열을 반환하는 함수(hideId)를 작성하세요.

const hideId = function (x){
const arr = x.split('@');
const mail = arr[1];
const arr2 = arr[0].split('');
const arr3 = '*'.repeat(arr2.length);
return arr3 + '@' + mail;
}

hideId('ksh@fastcampus.co.kr') // 반환값: '***@fastcampus.co.kr'

# 문제 7

숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수(insertHyphen)를 작성하세요.








