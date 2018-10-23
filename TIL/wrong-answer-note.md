# 오답노트

1. 개행 문자로 맥과 리눅스에서는 (1) 이 사용되고, 원도우에서는 (2)가 사용된다. 각각에 들어갈 것으로 알맞게 짝지어 진것은?
=> 1.Line Feed(\n)2. Charge Return + Line Feed (\r\n)

2. if(true){console.log('hello')}else {console.log('bye')}는 표현식으로, 결과값은 undefined가 반환 되며 실행결과를 변수에 대입할수있다.
=> if 구문은 표현식이 아니므로 결과값이 없다. 즉 if 구문의 실행결과 자체를 변수에 대입하거나 함수의 인수로 넘길수 없다.

3. textarea 요소에 텍스트가 입력될때마다 함수를 실행시키고 싶다면, change 이벤트에 리스너를 등록해주면 된다.
=> input에 리스너를 등록해주어야한다.

4. Math 객체의 Math.PI 속성을 삭제하려고 하면 엄격모드에서는 에러가 나지만 엄격모드가 아닐때에는 에러가 나지 않는다. 

5. 자바스크립트에서는 함수를 변수에 대입해서 호출하거나 배열이나 객체에 넣거나 함수를 다른함수에 인수로 넘기는것이 가능하다. 값으로 사용가능한 자바스크립트의 함수는 `일급함수` 라고 한다.

6. 문자열 숫자가 들어있는 객체에서 빈칸에 들어갈 적절한 배열 메소드 는 무엇일까?
```js
const cart = [ 
    {   name: 'toy',
        price: 10000,
    },
    {
        name: 'bread',
        price: 3000,
    }
]

const names = cart.map(x => x.name)
const prices = cart.map(x => x.price)
const discountPrices = cart.map(x => x.price * 0.8)
```

## JS coding quiz (DOM API)

```js
// 꼭 **저장** 하시고 제출해주세요!!!

// 조건:
//   키보드 상하좌우 방향키를 눌렀을 때, 검은색 칸은 방향키의 방향대로 움직여야 합니다.
//   (예를 들어, 오른쪽 키를 눌렀다면 오른쪽으로 움직여야 함)

// 배점:
//   1. 키보드 방향키를 눌렀을 때 자연스럽게 잘 움직일 경우: 20점
//   2. 검은색 칸이 게임판 바깥으로 사라지지 않고 게임판 안에 머무르는 경우: 10점

const boardEl = document.querySelector('.board')

let x = 0; y = 0;
// let box = document.querySelector('cursor')
// 사용자 입력 시 상태 변경 후 화면 그리기

document.addEventListener('keydown', e => {
  // console.log(e.key)
  // e.key 가 각각의 위치를  입력 받았을때 증가 혹은 감소 됨 단 음수값, 9보다 커서는 안됨
  if( e.key === "ArrowRight" && x < 9 ){
   x++
  }else if(e.key === "ArrowDown" && y < 9){
    y++
  }else if(e.key=== "ArrowLeft" && x > 0){
    x--
  }else if(y > 0){
    y--
  }    
  drawBoard()
})


// 상태로부터 화면 그리기
function drawBoard() {
  boardEl.querySelectorAll('.row').forEach((rowEl, rowIndex) => {
    rowEl.querySelectorAll('.col').forEach((colEl, colIndex) => {
      // rowIndex 값이 y colIndex 값이 x 와 같을때 검정색을 그려줌
      
        if (rowIndex === y && colIndex === x){
          colEl.classList.add('cursor')
          // 아닌경우 검정색을 지움
        }else {
    colEl.classList.remove('cursor')
        }
    })
  })
}


```