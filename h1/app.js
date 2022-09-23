// T3

let wordArr = ['JavaScriptin', 'opiskelu', 'on', 'ihanaa!'];

const formulateSentence = (arr) => {
  let sentence = '';

  arr.forEach((word, index) =>
    index === 0 ? (sentence += word) : (sentence += ` ${word}`)
  );

  return sentence;
};

console.log(formulateSentence(wordArr));

// T4

let num1 = 1;
let num2 = 2;
let num3 = 3;

const findGreatestNumber = (num1, num2, num3) => {
  let arr = [num1, num2, num3];
  let result = 0;
  arr.forEach((num) => {
    num > result && (result = num);
  });
  return result;
};

console.log('Greatest number is:', findGreatestNumber(num1, num2, num3));

// T5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const findEvenNumbers = (arr) => {
  const evenNumbers = [];
  arr.forEach((num) => num % 2 === 0 && evenNumbers.push(num));
  return evenNumbers;
};

console.log('Numbers:', numbers, 'Even numbers:', findEvenNumbers(numbers));

// T7
const yearResult = document.getElementById('yearResult');
const inputYear = document.getElementById('year');

const checkLeapYear = () => {
  const year = inputYear.value;

  const result = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  result
    ? (yearResult.innerText = `${year} is a leap year`)
    : (yearResult.innerText = `${year} is not a leap year`);
};

inputYear.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('submitYear').click();
  }
});
