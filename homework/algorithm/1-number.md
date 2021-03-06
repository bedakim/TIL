### 문제 1

두 수를 입력받아 큰 수를 반환하는 함수를 작성하세요.

```js
function larger(x, y) {
  const a = x;
  const b = y;
  let c;

  if (a > b) {
    c = a;
  } else {
    c = b;
  }

  return c;
}
```

```js
function larger(x, y) {
  let c;

  if (x > y) {
    c = a;
  } else {
    c = b;
  }
  return c;
}
```

```js
function larger (x, y){
  if (x > y) {
    return = x
  }
  else{
    return = y
  }
}

```

### 문제 2

세 수를 입력받아 그 곱이 양수이면 `true`, 0 혹은 음수이면 `false`, 둘 다 아니면 에러를 발생시키는 함수를 작성하세요.

에러를 발생시키는 코드는 다음과 같습니다.

```js
throw new Error("입력값이 잘못되었습니다.");
```

```js
function isPositive(x, y, z) {
  if (x * y * z > 0) {
    return true;
  } else if (x * y * z <= 0) {
    return false;
  } else {
    throw new Error("입력값이 잘못되었습니다.");
  }
}
console.log(isPositive(2, 5, 6));
console.log(isPositive(2, 5, -6));
console.log(isPositive(2, 5, "z"));
```

### 문제 3

세 수 `min`, `max`, `input`을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.

- `min`보다 `input`이 작으면, `min`을 반환합니다.
- `max`보다 `input`이 크면, `max`를 반환합니다.
- 아니면 `input`을 반환합니다.

예:

```
limit(3, 7, 5); -> 5
limit(3, 7, 11); -> 7
limit(3, 7, 0); -> 3

```

```js
function limit(min, max, input) {
  if (min > input) {
    return min;
  } else if (max < input) {
    return max;
  } else {
    return input;
  }
}

console.log(limit(5, 6, 10));
```

### 문제 4

어떤 정수가 짝수인지 홀수인지 출력하는 함수를 작성하세요. 이를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 프로그램을 작성하세요.

```js
function evenOrOdd(x) {
  if (x % 2 === 0) {
    console.log(x + " : 짝수");
  } else {
    console.log(`${x}: 홀수`);
  }
}

for (let i = 0; i <= 20; i++) {
  evenOrOdd(i + 1);
}
```

```js
function odd(num) {
  return num % 2 === 0 ? console.log(num + "even") : console.log(num + "odd");
}
for (let i = 0; i < 20; i++) {
  odd(i + 1);
}
```

### 문제 5

100 이하의 자연수 중 3과 5의 공배수를 모두 출력하는 프로그램을 작성하세요.

```js
for (let i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
```

### 문제 6

자연수를 입력받아, 그 수의 모든 약수를 출력하는 함수를 작성하세요.

```js
function print(x) {
  for (let i = 0; i < x; i++) {
    const num = i + 1;
    if (x % num === 0) {
      console.log(`${num}: 약수`);
    } else {
      console.log(`${num}: 아님`);
    }
  }
}
print(100);
```

### 문제 7

2 이상의 자연수를 입력받아, 그 수가 소수인지 아닌지를 판별하는 함수를 작성하세요.

```js
function print(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}
print(5);
```

### 문제 8

1부터 100까지의 수를 차례대로 출력하되, 자릿수에 3, 6, 9중 하나라도 포함되어 있으면 '짝!'을 대신 출력하는 프로그램을 작성하세요.

```js
function print(x) {
  for (let i = 0; i < x; i++) {
    const num = i + 1;
    if (num.toString().includes("3")) {
      console.log(`${num} 짝!`);
    } else if (num.toString().includes("6")) {
      console.log(`${num}: 짝! `);
    } else if (num.toString().includes("9")) {
      console.log(`${num}: 짝! `);
    } else {
      console.log(`${num} 1`);
    }
  }
}
print(100);
```

```js
for (let i = 0; i < 100; i++) {
  const num = i + 1;
  const str = num.toString();
  if (str.includes("3") || str.includes("6") || str.includes("9")) {
    console.log(`${num} 짝!`);
  } else {
    console.log(`${num} `);
  }
}
```

### 문제 9

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

```js
function starRepeat(x) {
  const star = " *";
  for (let i = 1; i <= x; i++) {
    console.log(star.repeat(i));
  }
}

starRepeat(5);
///
function starRepeat(x) {
  for (let i = 0; i < x; i++) {
    console.log(" *".repeat(i + 1));
  }
}

starRepeat(5);
```

```js
function print(height) {
  for (let i = 0; i < height; i++) {
    let stars = "";
    for (let j = 0; j < i + 1; j++) {
      stars += " *";
    }
    console.log(stars);
  }
}

print(3);
```

1을 입력받은 경우:

```
*
```

3을 입력받은 경우:

```
*
* *
* * *
```

5를 입력받은 경우:

```
*
* *
* * *
* * * *
* * * * *
```

### 문제 10

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

```js
function diamond(x) {
  let blank = " ";
  let star = " *";
  for (let i = 1; i < 2 * x; i++) {
    if (i <= x) {
      console.log(blank.repeat(x - i) + star.repeat(i));
    } else {
      console.log(blank.repeat(i - x) + star.repeat(2 * x - i));
    }
  }
}
diamond(10);
```

```js
function diamond(x) {
  for (let i = 0; i < x; i++) {
    const n = i + 1;
    " ".repeat(x - n) + "* ".repeat(n);
    const line = " ".repeat(x - n) + "* ".repeat(n);
    console.log(line);
  } // 루프 반대로 돌기
  for (let i = x - 2; i >= 0; i--) {
    const n = i + 1;
    " ".repeat(x - n) + "* ".repeat(n);
    const line = " ".repeat(x - n) + "* ".repeat(n);
    console.log(line);
  }
}

diamond(5);
```

1를 입력받은 경우:

```
*
```

3를 입력받은 경우:

```
  *
 * *
* * *
 * *
  *
```

5를 입력받은 경우:

```
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
```

### 문제 11

두 수를 입력받아서, 두 수의 최대공약수를 반환하는 함수를 작성하세요. ([유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)을 참고하세요.)

```js
const gcdlcm = (a, b) => {
  let gcd = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (!(a % i) && !(b % i)) gcd = i;
  }
  return [gcd, (a * b) / gcd];
};
```

### 문제 12

세 수를 입력받아 큰 것부터 차례대로 출력하는 함수를 작성하세요.

```js
function sort(x, y, z) {
  // 셋 중에 제일 큰 놈을 따로 빼기
  let larger = x > y ? x : y;
  let smaller1 = x > y ? y : x;
  let max = larger > z ? larger : z;
  let smaller2 = larger > z ? z : larger;
  console.log(max);
  if (smaller1 > smaller2) {
    console.log(smaller1);
    console.log(smaller2);
  } else {
    console.log(smaller2);
    console.log(smaller1);
  }
}

sort(100, 2, 10);
```

### 문제 13

자연수 `n`을 입력받아, `n`번째 피보나치 수를 반환하는 함수를 작성하세요.

```js
function fibo(n) {
  let x = 0;
  let y = 1;
  for (let i = 0; i < n; i++) {
    const sum = x + y;
    let arr = [];
    x = y;
    y = sum;
    console.log(x);
    //[x, y] = [y, x];
  }
}
fibo(10);
```
