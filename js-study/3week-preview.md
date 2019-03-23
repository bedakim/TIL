# 3주차

## JavaScript에서의 Object

     자바스크립트는 객체기반의 스크립트 언어이며 자바스크립트를 이루고 있는 모든것들이 객체로 존재한다.
     객체란! 이름-값 쌍으로 저장되는 원시 데이터(때때로 참조 데이터 타입)의 순서 없는 목록이다.

1.  Built-in Object
2.  Native Object
3.  Host Object

## JavaScript Standard built-in Objects

    표준 내장 객체는 자바스크립트가 기본적으로 가지고 있는 객체들을 의미한다. 이들은 자바스크립트 엔진이 구동되는 시점에서 바로 제공되며 자바스크립트코드 어디에서든 사용이 가능하다.

- Object
- Function
- Array
- String
- Boolean
- Number
- Math
- Date
- RegExp

## Native Object(브라우저 내장 객체)

    자바스크립트 엔진이 구성하는 기본객체라기 보단 브라우저 즉 자바스크립트 엔진을 구동하는 곳에서 빌드되는 객체 들이다.
    하지만 이들을 굳이 Native Object 라 분류한 이유는 브라우저마다 이 Native Object 를 사용함에 있어서 그 구성을 달리하는 경우가 있기 때문이다.

## Host Object(사용자 정의 객체)

    Host Object 는 말그대로 사용자가 생성한 객체 들이다. constructor 혹은 객체리터럴을 통해 사용자가 객체를 정의하고 확장시킨 녀석들이기 때문에 Built-in Object 와 Native Object가 구성된 이후에 구성되어 진다.
