### 문제 1

양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.
```js
function print (n){
  const radi =  n * n
  console.log(radi)
  return Math.PI*(radi)
}
print(2)

```

### 문제 2

두 정수 `min`, `max` 를 입력받아, `min` 이상 `max` 미만인 임의의 정수를 반환하는 함수를 작성하세요.

```js
function print (min, max){
return Math.floor(Math.random()* (max - min )+ min)
}
print(5, 15)

```

### 문제 3

정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.


```js
function ceilBy5(n){
 return Math.ceil(n/5)*5;  
}

ceilBy5(37); 
```
예:
```
ceilBy5(32); -> 35
ceilBy5(37); -> 40
```

### 문제 4

배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.

```js

function shuffle(input){
  const newArr = []
  const length = input.length
  for ( let i = 0; i < length; i++){
    newArr.push(input.splice(Math.floor(Math.random()* input.length),1)[0]) 
  }
  return newArr
}

shuffle([1,2,3,4,5])

```

### 문제 5

임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.

<!-- # 으로 시작 -->

```js 
function random(){
  const str = '0123456789abcdef';
  let newStr = '#';
  
  for(let i=0; i < 6; i++) {
    newStr += str[Math.floor(Math.random()*16)];
  }
  return newStr;
}
random();
```
```js
//rgb 코드
function random(){
  const r = Math.floor(Math.random()*256)
  const g = Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)

  return `rgb(${r},${g},${b})`

}
random()
```


### 문제 6

양수를 입력받아, 그 수만큼의 길이를 갖는 임의의 문자열을 반환하는 함수를 작성하세요.
```js

function print(n){
  let newStr = '';
  let str = 'qwertyuiopasdfghjklzxcvbnm';
  for(let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);
    newStr += str[randomIndex];
  }
  return newStr;
}

print(5);

```

```js
//유니코드
function random(n){
  let result  = ''
  for(let i = 0; i < n; i++){
    result += String.fromCodepoint(Math.floor(Math.random()* 65536))
  }
  return result
}
random(5)

```


### 문제 7

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 표준편차를 구하는 함수를 작성하세요.

```js
function stdDev(arr){

  //arr 평균구하기
  const sum = arr.reduce((acc, item)=> acc + item, 0)
  
  const mean = sum / arr.length
  console.log(`mean:${mean}`)
  //각요소에 대한 편차 구하기
  const ps = arr.map(item => item - mean)
  console.log(ps)
  // 각요소 에 대해 제곱
  const ps2 = ps.map(item => item * item )
  console.log(ps2)
  //위 제곱한 평균 
  const vv = ps2.reduce((acc, item)=> acc + item, 0) / ps2.length
  console.log(vv)

  //루트 씌우기
  return Math.sqrt(vv)

}


stdDev([1, 2, 3, 4, 5])
```