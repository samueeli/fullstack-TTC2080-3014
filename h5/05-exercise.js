//T5
if (
  process.argv.length < 5 ||
  isNaN(process.argv[2]) ||
  isNaN(process.argv[3]) ||
  isNaN(process.argv[4])
) {
  console.log(
    `Usage: 05-exercise.js RANDOMIZED_NUMBERS_COUNT MIN_VALUE MAX_VALUE`
  );
  process.exit(-1);
}

const RANDOMIZED_NUMBERS_COUNT = Number(process.argv[2]);
const MIN_VALUE = Number(process.argv[3]);
const MAX_VALUE = Number(process.argv[4]);

const createArray = (min, max) => {
  let newArr = [];
  min = Math.ceil(min);
  max = Math.floor(max);

  for (let i = 0; i < RANDOMIZED_NUMBERS_COUNT; i++) {
    newArr.push(
      Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
        Math.ceil(min)
    );
  }

  return newArr;
};

console.log(createArray(MIN_VALUE, MAX_VALUE));
