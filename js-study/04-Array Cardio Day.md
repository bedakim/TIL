# Array Cardio Day

## Data

```js
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];
```

## JS

```js
//01 1500도에 태어난 사람 거르기
const fifteen = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year < 1600
);

console.table(fifteen);
// 02 발명가 풀네임
const fullNames = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);
//03 나이가 더많은 사람 sort() 배열안 원소 정렬
// a 가 b 보다 작을경우 - 값, 두개가 같을 경우 0, 두번째 가 클경우 + 값
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered);

//04 얼마나 살았는지 뽑아내기
//
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);
//05 오래산 사람 순서대로
const oldest = inventors.sort(function(a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);
//06 de가 들어간 거리 뽑기
const category = document.querySelector(".mw-category"); //class mw-category 접근
const links = Array.from(
  //배열에 담기
  category.querySelectorAll("a")
);
const de = links
  .map(link => link.textContent)
  .filter(streetName => streetName.includes("de"));

//07

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

//08 lastname 알파벳 순서대로
const transportation = data.reduce(function(obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
```
