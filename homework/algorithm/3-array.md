### 문제 1

두 정수 `start`, `end`를 입력받아, `start`부터 `end`까지의 모든 정수를 배열로 반환하는 함수를 작성하세요.

예:

```
range(3, 6); -> [3, 4, 5, 6]

```

```js
function range(s, e) {
  const arr = [];
  for (let i = s; i <= e; i++) {
    arr.push(i);
  }
  return arr;
}

range(3, 6);
```

### 문제 2

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 합을 구하는 함수를 작성하세요.

```js
function sum(arr) {
  let add = 0;
  for (let i = 0; i < arr.length; i++) {
    add += arr[i];
  }
  return add;
}
sum([1, 2, 3]);
```

### 문제 3

배열을 입력받아, falsy인 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.

```js
function removeFlasy(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

removeFlasy([0, 1, NaN, 65]);
```

### 문제 4

배열을 입력받아, 중복된 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.

```js
function removeCommon(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // 같은요소 는 제거
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
removeCommon([0, 2, 5, 2, 5, 1]);
```

### 문제 5

수 타입의 값으로만 이루어진 두 배열을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.

- 두 배열의 같은 자리에 있는 요소를 더한 결과가 새 배열의 요소가 됩니다.
- 만약 입력받은 두 배열의 길이가 갖지 않다면, 긴 배열에 있는 요소를 새 배열의 같은 위치에 포함시키세요.

예:

```
addArray([1, 2, 3], [4, 5, 6, 7]) -> [5, 7, 9, 7]
```

```js
function addArray(arr1, arr2) {
  let longer;
  let shorter;
  if (arr1.length > arr2.length) {
    longer = arr1;
    shorter = arr2;
  } else {
    longer = arr2;
    shorter = arr1;
  }
  for (let i = 0; i < shorter.length; i++) {
    longer[i] += shorter[i];
  }
  return longer;
}

addArray([1, 2, 3], [4, 5, 6, 7]);
```

### 문제 6

배열을 입력받아, 배열의 요소 중 두 개를 선택하는 조합을 모두 포함하는 배열을 작성하세요.

예:

```
combination([1, 2, 3]); -> [[1, 2], [1, 3], [2, 3]]
```

```js
function twoTwo(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      newArr.push([arr[i], arr[j]]);
    }
  }
  return newArr;
}

twoTwo([1, 2, 3, 4, 5, 6]);
```

### 문제 7

'금액'과 '동전의 종류가 들어있는 배열'를 입력받아, 최소한의 동전을 사용해서 금액을 맞출 수 있는 방법을 출력하는 함수를 작성하세요.
(단, 동전의 종류가 들어있는 배열에는 큰 동전부터 순서대로 들어있다고 가정합니다.)

예:

```
coins(263, [100, 50, 10, 5, 1]);
// 출력
100
100
50
10
1
1
1
```

```js
function coin(input, arr) {
  let currentIndex = 0;
  let remain = input;
  while (remain > 0) {
    if (arr[currentIndex] <= remain) {
      remain -= arr[currentIndex];
      console.log(arr[currentIndex]);
    } else {
      currentIndex++;
    }
  }
}
coin(263, [100, 50, 10, 5, 1]);
```

###문제 1. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (루프를 이용하세요)

예:

max([3, 1, 4, 5, 2]) // -> 5

```js
```

###문제 2. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (Array.prototype.reduce를 이용하세요).

```js
function max(arr) {
  //reduce 를쓸때
  return arr.reduce((acc, item) => {
    if (acc > item) {
      return acc;
    } else {
      return item;
    }
  }, 0);
  //'누적값의 역활 이 무엇인지 잘 정하는것이 중요하다.

  //여기서 누적값은 지금 까지 본것중 가장 큰수
}

max([3, 1, 4, 5, 2]);
max([2, 8, 5, 5, 6]);
```

###문제 3. 2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (루프를 이용하세요)

예:

flatten([
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

###문제 4. 2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (Array.prototype.reduce를 이용하세요)
