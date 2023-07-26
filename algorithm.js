const str = "10 20 3 4 5";

const words = str.split(" ");
const array = [];
words.forEach((ele) => {
  array.push(parseInt(ele));
});
console.log(array);
const n = array.length;
let sumMax = 0;
let tempMax = 0;
let sumMin = 0;
let tempMin = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j !== i) {
      tempMax += array[j];
      tempMin += array[j];
    }
  }
  if (tempMax > sumMax) {
    sumMax = tempMax;
  }
  if (i === 0) {
    sumMin = tempMin;
  }
  if (tempMin < sumMin) {
    sumMin = tempMin;
  }
  tempMax = 0;
  tempMin = 0;
}
console.log(sumMax);
console.log(sumMin);
consolelo.log(123123123);
