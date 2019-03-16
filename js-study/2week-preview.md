# 2주차 예습

## JavaScript 값, 식, 문 이란?

### 값

    JavaScript 에서 값을 표현하기 위한 문법을 리터럴 이라고 합니다.

리터럴 예시

```js
// 문자열
let name = "Ryan";
let sex = "male";
// 숫자
let age = 26;
let weight = 77;
// 불린
let happy = true;
let sad = false;
// null
let money = null;
// undefined
let yourGirlFriend = undefined;
let nothing;
// 값을 할당하지 않으면 기본적으로 undefined
```

JavaScript에서 다루어지는 모든 값은 그 '타입'을 가지고 있습니다.

### 식 (expression)

    표현식이란 JavaScript 문장의 구성요소를 구분하는 하나의 단위로, 값으로 변환될 수 있는 부분을 가리킵니다.
    (값식, 연산식, 리터럴, 함수호출)모두 식!

### 문 (statement)

    JavaScript는 특정 조건을 만족할 때에만 코드를 실행시키거나, 혹은 여러 번 실행시킬 수 있는 구문을 제공합니다.(if문, while문, for문...)

## Primitive Type & Reference type

    자바스크립트에서는 원시 타입(primitive type) 참조 타입(reference type)이라는 두 가지 자료형을 제공합니다.

#### Primitive Type?

     string, number, boolean, null, undefined, symbol 6가지의 원시 자료형이 존재합니다.
     모든 원시 값은 불변합니다. 즉, 변형할 수 없습니다. 단 원시 값을 교체할 수는 있지만, 직접 변형할 수는 없습니다, 즉 변수에 새 값이 할당 될 때 변수에 할당된 메모리 블럭에 저장된 값을 바로 변경한다는 뜻 입니다.Access By Value

#### Reference type?

    참조 타입은 객체(Object), 배열(Array), 함수(function)가 있습니다.
    참조 타입 데이터는 크기가 정해져 있지 않고 변수에 할당될 때 값이 직접 해당 변수에 저장될 수 없으며, 변수에는 데이터에 대한 참조만 저장됩니다. 자바스크립트 엔진이 변수가 가지고 있는 메모리 주소를 이용해서 변수의 값에 접근합니다. Access By Reference

## Truthy & Falsy

    JavaScript에서는 boolean 타입이 와야 하는 자리에 다른 타입의 값이 와도 에러가 나지 않고 실행됩니다.

    어떤 값들은 true로, 어떤 값들은 false로 취급되는데, 전자를 truthy, 후자를 falsy라고 부릅니다.

```js
if (1) {
  console.log("이 코드는 실행됩니다.");
}

if (0) {
  console.log("이 코드는 실행되지 않습니다.");
}
```

JavaScript에서는 아래의 값들은 모두 falsy이고, 이를 제외한 모든 값들은 truthy입니다.

- false
- null
- undefined
- 0
- NaN
- ''

[참조]:
https://helloworldjavascript.net/pages/130-number.html , https://developer.mozilla.org/ko/
