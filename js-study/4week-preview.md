### Prototype

자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 Prototype(프로토타입) 객체 또는 줄여서 Prototype(프로토타입)이라 한다.
JavaScript에서는 이렇게 객체 간에 공유되어야 하는 속성과 메소드를, 프로토타입(prototype)이라는 기능을 이용해서 효율적으로 저장할 수 있다. 어떤 객체에 프로토타입을 지정하면, 프로토타입의 속성을 해당 객체에서 재사용할 수 있다.

```js
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function() {
  return this.name;
};
const mySon = new Person("stan");
const yourSon = new Person("beda");
console.log(mySon.getName()); // stan 반환
console.log(yourSon.getName()); // beda 반환
```

### 생성자 (constructor)

객체를 초기화
객체를 생성하는 함수를 생성자 함수라고 부릅니다. 다른 언어에서는 class가 있지만 자바스크립트에서는 없습니다. 생성자 함수가 그 역할을 대신합니다.
자바스크립트의 생성자 함수는 'new'와 함께 사용할 수도, 그냥 일반적인 함수처럼 사용할 수도 있다.

### new

new 와 함께 사용된 생성자 함수는 묵시적으로 객체를 생성하여 'this' 에 바인딩한다. 그리고 동적으로 속성을 정의한 뒤에 역시나 묵시적으로 'this' 를 반환한다. 정상적인 객체가 생성되어 메모리에 할당 되는 것이다.

```js
function MyConstructor(prop) {
  this.prop = prop;
}

var obj1 = MyConstructor("prop value");
var obj2 = new MyConstructor("prop value");
console.log(obj1); // undefined
console.log(obj2); // MyConstructor
console.log(obj2.prop); // "prop value"
```

### OOP

OOP: Object-Oriented Programming
객체지향 프로그래밍
OOP의 기본 컨셉은 프로그램 내에서 표현하고자 하는 실 세계(real world)의 일들을 객체를 사용해서 모델링 하고, 객체를 사용하지 않으면 불가능 혹은 무지 어려웠을 일들을 쉽게 처리하는 방법을 제공하는것

### Instance

생성자를 통해 생성된 객체를 생성자의 인스턴스(instance)라고 하고, 객체 리터럴을 통해 생성된 객체는 Object의 인스턴스 이다.

```js
const obj = {};
obj instanceof Object; // true
```
