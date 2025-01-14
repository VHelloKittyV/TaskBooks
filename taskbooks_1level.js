//Level 1

/* Дано число. Проверьте, отрицательное оно или нет. 
   Выведите об этом информацию в консоль. */

{
  const positiveNumber = (number) => {
    return number > 0;
  };
  console.log(positiveNumber(0));
}

/* Дана строка.
   Выведите в консоль длину этой строки. */
{
  const string = (str) => {
    return str.length;
  };
  console.log(string("sdsdsass"));
}

/* Дана строка.
   Выведите в консоль последний символ строки. */

{
  const stringLastChar = (str) => {
    console.log(str.at(-1));
  };
  stringLastChar("sdsdsassk");
}

/* Даны два слова.
   Проверьте, что первые буквы этих слов совпадают.*/

{
  const simWords = (word1, word2) => {
    word1.at(0) === word2.at(0) ? console.log(true) : console.log(false);
  };
  simWords("pad", "pomidro");
}

/* Дано слово. Получите его последнюю букву.
   Если слово заканчивается на мягкий знак, 
   то получите предпоследнюю букву.*/

{
  const lastLetter = (str) => {
    console.log(str.at(-1) === "ь" ? str.at(-2) : str.at(-1));
  };
  lastLetter("игрь");
}

/* Дано число.
   Выведите в консоль первую цифру этого числа. */

{
  const firstNumber = (number) => {
    console.log(parseInt(number.toString().at(0)));
    console.log(Number(String(number).at(0)));
  };
  firstNumber(122);
}

/* Дано число.
   Выведите в консоль последнюю цифру этого числа.*/
{
  const lastNumber = (number) => {
    console.log(Number(String(number).at(-1)));
  };
  lastNumber(1223);
}

/* Дано число.
   Выведите в консоль сумму первой и последней цифры этого числа. */

{
  const sumOfNumbers = (number) => {
    console.log(Number(String(number).at(0)) + Number(String(number).at(-1)));
  };
  sumOfNumbers(1225);
}

/* Дано число. Выведите количество цифр в этом числе. */

{
  const lenghtOfNumber = (number) => {
    console.log(String(number).length);
  };
  lenghtOfNumber(234);
}

/* Даны два числа.
   Проверьте, что первые цифры этих чисел совпадают. */

{
  const compareFirstDigits = (digit1, digit2) => {
    console.log(Number(String(digit1).at(0)) === Number(String(digit2).at(0)));
  };
  compareFirstDigits(12, 132);
}

/* Дана строка. Если в этой строке более одного символа, 
   выведите в консоль предпоследний символ этой строки. */

{
  const secondToLast = (str) => {
    console.log(str.length > 1 ? str.at(-2) : "only one charecter");
  };
  secondToLast("ч");
}

/* Даны два целых числа.
   Проверьте, что первое число без остатка делится на второе */

{
  const isInteger = (num1, num2) => {
    console.log(num1 % num2 == 0);
  };
  isInteger(32, 3);
}

/* Выведите в консоль все целые числа от 1 до 100.*/

{
  const integerNumbers = () => {
    for (let i = 3; i < 10; i += 3) {
      console.log(i);
    }
  };
  integerNumbers();
}

/* Выведите в консоль все целые числа от -100 до 0.*/

{
  const sumOfIntegers = () => {
    let sum = 0;
    for (let i = 1; i < 100; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
    console.log(sum);
  };
  sumOfIntegers();
}

/* Даны два целых числа.
   Найдите остаток от деления первого числа на второе. */

{
  const remainder = (num1, num2) => {
    console.log(num1 % num2);
  };
  remainder(3, 4);
}

/* Дана некоторая строка. 
   Переберите и выведите в консоль по очереди все символы с конца строки. */

{
  const symbols = (str) => {
    const reversedStr = str.split("").reverse();

    for (let i of reversedStr) {
      console.log(i);
    }
  };
  symbols("paddle");
}

/* Дан массив с числами.
   Найдите сумму квадратов элементов этого массива. */

{
  const sumOfSqNumbers = (numbers) => {
    const sum = numbers.reduce((acc, value) => acc + value ** 2, 0);
    console.log(sum);
  };
  sumOfSqNumbers([3, 2]);
}

/* Дан массив с числами.
   Найдите сумму квадратных корней элементов этого массива.*/

{
  const sumOfRootsNumbers = (numbers) => {
    const sum = numbers.reduce((acc, value) => acc + value ** (1 / 2), 0);
    console.log(`Sum of roots:`, sum);
  };
  sumOfRootsNumbers([3, 2]);
}

/* Дан массив с числами.
   Найдите сумму положительных элементов этого массива. */

{
  const sumOfPositiveNumbers = (numbers) => {
    const sum = numbers.reduce(
      (acc, value) => acc + (value > 0 ? value : 0),
      0
    );
    console.log(sum);
  };
  sumOfPositiveNumbers([3, 2, -1]);
}

/* Дан массив с числами. 
   Найдите сумму тех элементов этого массива,
   которые больше нуля и меньше десяти. */

{
  const sumOfPositiveNumbers = (numbers) => {
    const sum = numbers.reduce(
      (acc, value) => acc + (value > 0 && value < 10 ? value : 0),
      0
    );
    console.log(sum);
  };
  sumOfPositiveNumbers([3, 2, -1, 12]);
}

/* Получите массив букв этой строки.*/

{
  const getArray = (str) => {
    // console.log(str.split(''));
    console.log([...str]);
  };
  getArray("abcde");
}

/* Получите массив цифр этого числа.*/

{
  const getArray = (num) => {
    console.log([...String(num)].map(Number));
  };
  getArray(12345);
}

/* Дано некоторое число.Переверните его: */

{
  const reversedNum = (num) => {
    const reversed = [...String(num)].reverse().join("");
    console.log(Number(reversed));
  };
  reversedNum(12345);
}

/* Найдите сумму цифр этого числа.*/

{
  const sumOfNums = (num) => {
    const numbers = [...String(num)].map(Number);
    const sum = numbers.reduce((acc, value) => acc + value, 0);
    console.log(sum);
  };
  sumOfNums(12345);
}

/* Заполните массив целыми числами от 1 до 10.*/

{
  const fillArray = () => {
    const array = Array.from({ length: 10 }, (_, i) => i + 1);
    console.log(array);
  };
  fillArray();
}

/* Заполните массив четными числами из промежутка от 1 до 100.*/

{
  const fillEvenArray = () => {
    const array = Array.from({ length: 50 }, (_, i) => (i + 1) * 2);
    console.log(array);

    fillEvenArray();
  };
}

/* Округлите эти дроби до одного знака в дробной части.*/

{
  const round = (numbers) => {
    console.log(numbers.map((num) => Math.round(num * 10) / 10));
  };
  round([1.456, 2.34]);
}

/* Дан массив со строками. 
   Оставьте в этом массиве только те строки, которые начинаются на http:// */

{
  const startWith = (strs) => {
    const array = strs.filter((el) => el.startsWith("http://."));
    console.log(array);
  };
  startWith(["http://.google.com", "lol", "http://.stand.with.ukraine.com"]);
}
/* Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html. */
{
  const endWith = (strs) => {
    const array = strs.filter((el) => el.endsWith("html"));
    console.log(array);
  };
  endWith(["http://.google.thml", "lol", "http://.stand.with.ukraine.html"]);
}

/* Дан массив с числами. Увеличьте каждое число из массива на 10 процентов. */

{
  const tenPerscent = (numbers) => {
    const array = numbers.map((el) => (el * 0.1).toFixed(1));
    console.log(array);
  };
  tenPerscent([12, 32, 32]);
}

/* Заполните массив случайными числами из промежутка от 1 до 100.*/

{
  const randomNumbers = () => {
    const array = [];
    for (let i = 0; i < 5; i++) {
      array.push(Math.floor(Math.random() * 101));
    }
    console.log(array);
  };
  randomNumbers();
}

/* Заполните массив случайными числами из промежутка от 1 до 100.*/

{
  const randomNumbers = (lenght = 5, max = 100) => {
    const array = [];
    for (let i = 0; i < lenght; i++) {
      array.push(Math.floor(Math.random() * max));
    }
    console.log(array);
  };
  randomNumbers(6, 50);
}

/* Дано некоторое число. Выведите в консоль все его символы с конца. */

{
  const reversedSymbols = (number) => {
    const array = [...String(number)].reverse();
    for (let symbol of array) {
      console.log(Number(symbol));
    }
  };
  reversedSymbols(12345);
}

/* Дан некоторый массив, например, вот такой:
   По очереди выведите в консоль подмассивы из двух элементов нашего массива: */

{
  const subArray = (numbers, length = 2) => {
    for (let i = 0; i < numbers.length; i += length) {
      const newArray = numbers.slice(i, i + length);
      console.log(newArray);
    }
  };

  subArray([1, 2, 3, 4, 5, 6], 2);
}

/* Даны два массива. Слейте эти массивы в новый массив:*/

{
  const mergedArray = (arr1, arr2) => {
    console.log([...arr1, ...arr2]);
  };
  mergedArray([1, 2, 3], [4, 5, 6]);
}
