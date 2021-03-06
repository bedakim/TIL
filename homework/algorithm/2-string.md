### 문제 1

두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

예:
```
insensitiveEqual('hello', 'hello'); -> true
insensitiveEqual('hello', 'Hello'); -> true
insensitiveEqual('hello', 'world'); -> false
```
```JS
function insensitiveEqual(x, y){
  if(x.toLowerCase() === y.toLowerCase()){
    return true
  }
  else{
    return false
  }
}
insensitiveEqual('hello', 'Hello');
```
```js
function insensitiveEqual(x, y){
  return x.toLowerCase() === y.toLowerCase()
}
```


### 문제 2

문자열 `s`와 자연수 `n`을 입력받아, 만약 `s`의 길이가 `n`보다 작으면 `s`의 왼쪽에 공백으로 추가해서 길이가 `n`이 되게 만든 후 반환하고, 아니면 `s`를 그대로 반환하는 함수를 작성해보세요.

예:
```
leftPad('hello', 8); -> '   hello'
leftPad('hello', 3); -> 'hello'
```
```js
function leftPad( s, n){
  if(s.length < n){
    const spaceNum = n - s.length
    return' '.repeat(spaceNum) + s
  }
  else{
    return s
  }

}
leftPad('hello', 3);
```



### 문제 3

문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.
apple

```js
function count(str){
  let num = 0
  for (let i = 0; i < str.length; i++){ 
    if (str[i] === 'a'||
    str[i] === 'e'||
    str[i] === 'i'|| 
    str[i] === 'o'||
    str[i] === 'u'){
    num += 1
    }
}
return num
}

count('apple')
```

### 문제 4

문자열을 입력받아, 해당 문자열에 포함된 문자의 종류와 갯수를 나타내는 객체를 반환하는 함수를 작성하세요.

예:
```
countChar('tomato'); -> {t: 2, o: 2, m: 1, a: 1}
```
```js
  function countChar(input) {
  const obj = {}
  for (let i = 0; i < input.length; i++) {
    const char = input[i]
    // 글자를 본적이 없다면 "글자": 1 을 적어준다.
    if ( !(char in obj) ) {
      obj[char] = 1
    } else {
      // 글자를 본적이 있다면 개수를 1 증가시켜준다.
      obj[char]++
    }
  }
  return obj
}
```


### 문제 5

문자열을 입력받아 그 문자열이 회문(palindrome)인지 판별하는 함수를 작성하세요. (회문이란, '토마토', 'never odd or even'과 같이 뒤에서부터 읽어도 똑같이 읽히는 문자열을 말합니다.)

```js
  const isPalindrome = (input) => {
  const arr = input
  const n = input.length
  for (let i = 0; i < n; i++)
    if (arr[i] === arr[input.length - i - 1]) {
    }
    else {
      return false
    }
  return true
}

isPalindrome('토마토마토')
///
const isPalindrome = (input) => {

  for (let i = 0; i < input.length; i++) {
    const left = i;
    const right = input.length - i - 1
    if (input[left] !== input[right]) {
      return false
    }
    }
    return true
  }

isPalindrome('토마토마토')
///


```




### 문제 6

문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.

예:
```
subString('햄버거');
// 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']
```

### 문제 7

문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.

예:
```
removeDuplicates('tomato'); -> 'toma'
removeDuplicates('bartender'); -> 'bartend'
```

```js
  function removeDuplicates(x){
 let str= ''
 for (let i=0; i< x.length; i++){
  //  보지않았을때
   if(!str.includes(x[i])){
     str += x[i]
   }
   
 }
  return str
}
removeDuplicates('tomato')

///
const removeId = (input) => {
  let seen = false
  let memory = ''
  for (let i = 0; i < input.length; i++) {
    // 내가 지금 보고 있는 글자가 '@' 이면
    if (input[i] === '@') {
      // seen의 값을 true로 바꾼다.
      seen = true
    }
    // seen이 true이면
    if (seen) {
      // 내가 지금 보고 있는 글자를 그대로 memory에 덧붙인다.
      memory += input[i]  
    } else {
      // 아니면, 별표를 대신 덧붙인다.
      memory += '*'
    }
  }
  // 변환한 결과를 반환한다.
  return memory
}

removeId('sfdsf@naver.com')


```

### 문제 8

이메일 주소를 입력받아, 아이디 부분을 별표(`*`)로 가린 새 문자열을 반환하는 함수를 작성하세요.

- 루프로 먼저 풀어보세요.
- `split` 메소드를 이용해서 풀어보세요.


```js
  const removeId = (input) => {
  let seen = false
  let memory = ''
  for (let i = 0; i < input.length; i++) {
    // 내가 지금 보고 있는 글자가 '@' 이면
    if (input[i] === '@') {
      // seen의 값을 true로 바꾼다.
      seen = true
    }
    // seen이 true이면
    if (seen) {
      // 내가 지금 보고 있는 글자를 그대로 memory에 덧붙인다.
      memory += input[i]  
    } else {
      // 아니면, 별표를 대신 덧붙인다.
      memory += '*'
    }
  }
  // 변환한 결과를 반환한다.
  return memory
}

removeId('sfdsf@naver.com')
```

### 문제 9

문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.


```js
  
function change(x){
  let str = '';
  for (let i =0; i < x.length; i++){
    if(x[i].toLowerCase()===x[i]){
      str += x[i].toUpperCase();
    }else{
      str += x[i].toLowerCase();
    }
  }
  return str;
}
change('dsdjdAADKdkj')

///
```


### 문제 10

문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

```js

function changedCap(x){
  let str = '';
  for (let i = 0; i < x.length; i++){
    // 첫글자 를 봤을때
    if(i===0 || x[i-1] === ' '){
      str += x[i].toUpperCase();
    }
    // 내앞이 공백일때
    else {
      str += x[i]
    }
  }
  return str
}
changedCap('i am hungry')
/// 

```


### 문제 11

문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

```js
 
function longestWord(x) {

  const str = x.split(" ");

  const strr = str.reduce((a, b) => {
    if(b.length > a.length) {
      return b
    } 
    else {
      return a
    }
  })
  return strr
}
longestWord("And if you gaze long into an abyss");

///
function longestWord(input){
  let longest ='' //지금껏 봤던 단어중 가장 긴단어
  let current = ''// 내가 보고 있느 단어

  for ( let  i = 0; i < input.length; i++){
    //내가 보고있는게 공백이 아니면
    if(input[i] !== ' '){
      current += input[i]
      if(current.length > longest.length){
        longest = current
      }
    }
    //보다가 공백이면
    else{
      current = ''
    }
  }
  return longest
}

longestWord("And if you gazeeee long into an abyss");
```




### 문제 12

문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.

```js

function print(s, n){
  let str = '';
  for(let i = 0; i < n && i < s.length; i++){
    str += s[i];
  }
  return str;
}

print('hello','3');
//
function print(s, n){
  if( s.length < n ){
    return s
  }
 let str = ''
 for(let i = 0; i < s.length; i++){
   str += s [i]
   if(str.length === n){
     return str
   }
   else{

   }

 }
 return str
}
print('hello',8);
```


### 문제 13

Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

```js
function changedCap(x){
  let str = '';
  for (let i = 0; i < x.length; i++){
    // 첫글자 를 봤을때
    if(x[i].toLowerCase() === x[i] ){
     str += x[i]
    }
    else {
      
       str += '_' + x[i].toLowerCase();
    }
  }
  return str
}
changedCap('backGround')
// 

function toSnakeCase(input){
  // 한글자씩 보면서 첫글자 가 아닌 대문자를 만났을때 바로 앞에 밒줄을 쳐줌

  let str  = ''
  for( let i =0; i < input.length; i++){
    //만약 첫글자가 아닌 대문자 를 만났을 경우
    if(i !==0 && (input[i].toUpperCase() === input[i])) {
      str += '_'
    }
    str += input[i].toLowerCase()
  }
  return str

}
toSnakeCase('fjdkskdfHafkfwfl')
```

<!-- ### 문제 14 -->

Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

### 문제 15

`String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

예:
```
split('Hello World'); -> ['Hello World']
split('Hello World', ' '); -> ['Hello', 'World']
split('let,const,var', ',') -> ['let', 'const', 'var']
```

```js 

```



### 문제 16

2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

예:
```
convertBinary('1101'); -> 13
```

### 문제 17

숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

예:
```
insertHyphen('437027423'); -> '4370-274-23'
```
