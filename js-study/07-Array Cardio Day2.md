# Array Cardio Day

```js
// Array

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

// Array.prototype.some() // is at least one person 19?
const isAdult = people.some(
  person => new Date().getFullYear() - person.year >= 19
);
// 현재년도 - 각사람이 태어난 연도가 19 >= 일때 true 출력
console.log({ isAdult });

// Array.prototype.every() // is everyone 19?
const allAdults = people.every(
  person => new Date().getFullYear() - person.year >= 19
);
console.log({ allAdults });

// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);
//  해당 id와 같다면 값을 보여줌

// Find the comment with this ID
// delete the comment with the ID of 823423

//index 값만 넣어두기
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);
// slice() 얕은복사 원본의 값을 변화 시키지 않음
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
```
