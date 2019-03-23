# CSS Variables

### HTML

```html
<!-- 3개의 input: Spacing, Blur, Base Color -->
<h2>Update CSS Variables with <span class="hl">JS</span></h2>
<div class="controls">
  <label for="spacing">Spacing:</label>
  <input
    id="spacing"
    type="range"
    name="spacing"
    min="10"
    max="200"
    value="10"
    data-sizing="px"
  />
  <label for="blur">Blur:</label>
  <input
    id="blur"
    type="range"
    name="blur"
    min="0"
    max="25"
    value="10"
    data-sizing="px"
  />
  <label for="base">Base Color</label>
  <input id="base" type="color" name="base" value="#ffc600" />
</div>

<img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
```

### CSS

```css
/* css 변수정의 여러개의 값을 한번에 변경 할수있음 */
/* 어느 곳에서나 사용할 수 있게 하려면 :root에 정의 */
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

/* 정의하지 않은 변수를 사용하면, 그 속성을 사용하지 않은 것과 같은 효과를 냄 
특정 선택자에 변수를 선언하면 그 선택자가 적용되는 요소와 그 하위 요소에서 변수를 사용 할 수 있음 */
img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}
```

### JS

```js
const inputs = document.querySelectorAll(".controls input");
// input tag

// document.documentElement.style.setProperty 이용하여 스타일을 수정
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
// input값이 바뀌면
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
```
