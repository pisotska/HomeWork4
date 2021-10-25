// 5.

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = a.filter(function (item) {
  if (item % 2 !== 0) {
    return true;
  } else {
    return false;
  }
});
//console.log(b);

// 1

function getRandomArray(lenght, min, max) {
  const rand = () => Math.floor(Math.random() * (max - min) + min);
  const empty = [];
  while (lenght-- > 0) {
    empty.push(rand());
  }
  return empty;
}
// console.log(getRandomArray(10, 1, 15));

//3.

function average(nums) {
  return nums.reduce((a, b) => a + b) / nums.length;
}
//console.log(average(20, 5, 25));

function average() {
  // - цей код не мій
  var sum = 0;

  for (var i = 0; i < arguments[i]; i++) sum += arguments[i];

  return sum == 0 ? sum : sum / arguments.length; // - нєпанятна
}

// console.log(average(10, 5, 15));

// 7.

let getDividedByFive = [6, 2, 55, 11, 78, 2, 100, 77, 55, 87, 23, 2, 10, 3, 20];
let res = getDividedByFive.filter(function (item) {
  if (item % 5 == 0) {
    return true;
  } else {
    return false;
  }
});
// console.log(res);

//4.

let arr = [1, 2, 3, 4, 5];
let sortArr = arr.sort(function (a, b) {
  return a - b;
});
//console.log(sortArr);
let median = sortArr.reduce((a, b) => a + b) / sortArr.length;
//console.log(median);

//9.

let str = "love";
let slog = [];
let slogSize = 3;

while (str) {
  if (str.length < slogSize) {
    slog.push(str);
    break;
  } else {
    slog.push(str.substr(0, slogSize));
    str = str.substr(slogSize);
  }
}
//console.log(slog);

//6.

let countPositiveNumbers = [1, 3, 2, 4, 2, 6, 2];
let result = countPositiveNumbers.filter(function (item) {
  return item > 0;
}).length;
//console.log(result);

function countPositiveNumbers2(value) {
  return value > 0;
}
let filtered = [12, 5, 8, 130, 44, -2, -5].filter(countPositiveNumbers2).length;
//console.log(filtered);

// 8.

const phrase = "Holy shit";
const badWords = ["shit", "fuck"];
let cutPharase = phrase.split(" ");
//console.log(cutPharase);
const newArray = badWords.forEach(function (badWords) {
  cutPharase = cutPharase.map((item) => item.replace(badWords, "****"));
});
console.log(cutPharase.join(" "));

//let re = /shit/gi;
//let final = cutPharase.replace(re, "****");
//mat.forEach((value) => {
// console.log;
//});
