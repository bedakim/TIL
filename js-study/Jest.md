# Jest 사용

```js
// beda.spec.js 문제
import { larger } from "./beda";

describe("테스트", function() {
  it("조건", function() {
    expect(larger(1, 5)).toBe(5);
  });
});
//beda.js 해결
export function larger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
```

## lexical

## 실행컨텍스트

```js
const person1 = {
  name: "beda",
  age: 30,
  hobby: "baseBall"
};

const person2 = {
  name: "stan",
  age: 20,
  hobby: "soccer"
};

const person3 = {
  name: "minyeob",
  age: 10,
  hobby: "tennis"
};
```
