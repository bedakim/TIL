### Object

- typeof
- Array.isArray() => [] 인지 아닌지

- Scope: 변수의 유효 범위(블록단위,함수{})

var => es2015+ 이전

let

const

this

method && 함수
객체안의 속성의 함수 가 method

Object.freeze()다른 곳의 코드에서 객체의 속성을 지우거나 바꿀 수 없습니다.


Object.seal()다른 코드가 객체의 속성을 삭제하지 못하도록 합니다.

Object.is()
두 값이 같은지를 비교합니다. 모든 NaN 값은 같다고 처리됩니다.(다른 추상적 또는 엄격한 등호 비교에서는 다르게 처리됩니다)