# Class

    Class는 함수이다. 함수를 표현식과 선언을 통해 생성하는 것 처럼 Class 도 마찬가지로 표현식과 선언을 사용할 수 있다.

사용예시

```js
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### Class 참고사항

1. 클래스 선언은 함수 선언과 달리 Hoisting되지 않음. 클래스 선언은 let 선언과 같다.
2. 클래스 안에선 strict 모드로 자동 실행
3. 내부에 constructor가 없으면 new 호출 불가능.
