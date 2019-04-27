```js
let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it

  let inBetween = false;

  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    // 누르기전 마지막 체크된 박스에서 부터 shift 누르며 체크한 박스 사이의 것들을 체크
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between!");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}
```
