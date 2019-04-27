# Promise

Promise는 자바스크립트 `비동기 처리`에 사용되는 객체.
new Promise() 메서드를 호출하면 Pending(대기) 상태가 된다.

```js
new Promise(function(resolve, reject) {
  resolve(); // Fullfilled(이행)
});
// 이행 후 then 으로 처리값 받기
function getData() {
  return new Promise(function(resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function(resolvedData) {
  console.log(resolvedData); // 100
});
// 마찬가지로 Reject(실패)의 경우 실패한 이유catch() 로 받기
```
