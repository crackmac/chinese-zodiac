'strict mode';

//// Chinese Zodiac App ////

// Data
const zodiac = [
  'Monkey',
  'Rooster',
  'Dog',
  'Pig',
  'Rat',
  'Ox',
  'Tiger',
  'Rabbit',
  'Dragon',
  'Snake',
  'Horse',
  'Sheep',
];
const elements = [
  'Metal',
  'Metal',
  'Water',
  'Water',
  'Wood',
  'Wood',
  'Fire',
  'Fire',
  'Earth',
  'Earth',
];

// Elements
const labelWelcome = document.querySelector('.title');
const labelResults = document.querySelector('.birthday_results');

const inputBirthday = document.querySelector('.birthday_input-year');

const btnBirthday = document.querySelector('.birthday_btn');

// if born in January or Fenruary then the resuts may need to be adjusted.
// const year = 2001;

//Event Handlers
btnBirthday.addEventListener('click', function (e) {
  const year = inputBirthday.value;
  console.log(year);

  displayResults(year);
});

const displayResults = function (y) {
  console.log(y);
  const result = calcSign(y);
  labelResults.textContent = `Your Chinese Zodiac sign is the ${result.element} ${result.sign}.`;
};

const calcSign = function (y) {
  const zodiacCalc = y % 12;
  const sign = zodiac[zodiacCalc];
  const elementCalc = y % 10;
  const element = elements[elementCalc];
  const result = {
    sign: sign,
    element: element,
  };
  console.log(`year is ${y}, ZCalc is ${zodiacCalc}, ECalc is ${elementCalc}`);
  return result;
};

// const zodiac_calc = (year + 8) % 12;
// const sign = zodiac[zodiac_calc];

// const element_calc = year % 10;
// const element = elements[element_calc];

// console.log(sign);
// console.log(element);
