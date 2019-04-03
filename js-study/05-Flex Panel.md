# Flex Panel

### HTML

```html
<!-- 5개의 panels 각 3개의 p태그 -->
<div class="panels">
  <div class="panel panel1">
    <p>Hey</p>
    <p>Let's</p>
    <p>Dance</p>
  </div>
  <div class="panel panel2">
    <p>Give</p>
    <p>Take</p>
    <p>Receive</p>
  </div>
  ...
</div>
```

### CSS

    ">" : Child combinator
    selector1 > selector2{
        ...
    }
    selector1 아래에 있는 selector2 의 스타일
    ">*", " >:firstchild"등 으로 사용가능.

```css
.panels {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
}
.panel {
  background: #6b0f9c;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  align-items: center;
  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), flex 0.7s
      cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
  font-size: 20px;
  background-size: cover;
  background-position: center;
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
/* 첫번째, 마지막 p태그 open-active없을시 숨기기 */
.panel > *:first-child {
  transform: translateY(-100%);
}

.panel.open-active > *:first-child {
  transform: translateY(0);
}

.panel > *:last-child {
  transform: translateY(100%);
}

.panel.open-active > *:last-child {
  transform: translateY(0);
}
```

### JS

```js
const panels = document.querySelectorAll(".panel");
// Click 된 Panel에  .open 추가
function toggleOpen() {
  console.log("Hello");
  this.classList.toggle("open");
}
// Panel의 propertyName에 flex 있을때 open-active 추가
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
```
