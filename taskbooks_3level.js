//Level 3

/* Дано некоторое число. 
Проверьте, что цифры этого числа расположены по возрастанию. */

{
  const checkNumbers = (number) => {
    const numbers = [...String(number)];
    for (let i = 0; i < numbers.length - 1; i++) {
      if (Number(numbers[i]) > Number(numbers[i + 1])) {
        console.log(false);
        return;
      }
    }
    console.log(true);
  };
  checkNumbers(12545);
}

/* Дан массив.Удалите из массива все пустые строки.*/

{
  const deletSpaces = (arr) => {
    const result = arr.filter((v) => v !== "");
    console.log(result);
  };
  deletSpaces([1, "", 2, 3, "", 5]);
}

/* Дан массив.Отсортируйте элементы в каждом подмассиве. */
{
  const sortSubArrays = (arr) => {
    const result = arr.map((subArr) => subArr.sort((a, b) => a - b));
    console.log(`Sorted:`, result);
  };

  sortSubArrays([
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
  ]);
}

/*  Даны два массива.
    Удалите из большего массива лишние элементы с конца так, 
    чтобы длины массивов стали одинаковыми.*/
{
  const ArraysToEqualLength = (arr1, arr2) => {
    const result =
      arr1.length < arr2.length
        ? arr2.slice(0, arr1.length)
        : arr1.slice(0, arr2.length);

    console.log(result);
  };
  ArraysToEqualLength([1, 2, 3], [1, 2, 3, 4, 5]);
}

/* Выведите в консоль все числа в промежутке от 10 до 1000, 
   у которых предпоследняя цифра четная. */

{
  const onlyEvenNumbers = (from, to) => {
    for (let i = from; i < to; i++) {
      if (i >= 10) {
        const secondToLast = Math.floor(i / 10) % 10;
        if (secondToLast % 2 === 0) {
          console.log(i);
        }
      }
    }
  };

  onlyEvenNumbers(1, 100);
}

/* Дан массив. Удалите из него каждый пятый элемент. */
{
  const delete5thElement = (arr) => {
    const result = arr.filter((_, index) => (index + 1) % 5 !== 0);
    console.log(result);
  };
  delete5thElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
}

/* Дана некоторая переменная с числом.
   Сделайте строку, содержащую столько нулей, сколько указано в переменной */
{
  const zeroString = (number) => {
    // const str = Array.from({ length: number }, () => "0").join("");
    const str = "0".repeat(number);
    console.log(str);
  };
  zeroString(5);
}

/*Дана некоторая строка со словами. Удалите из этой строки 
  каждое второе слово.*/
{
  const delete2ndWord = (words) => {
    const result = words
      .split(" ")
      .filter((word, index) => index % 2 === 0)
      .join(" ");
    console.log(result);
  };

  delete2ndWord("aaa bbb ccc eee fff");
}

/*Дан массив. Найдите сумму элементов этого массива.*/

{
  const sumOfArraysEl = (arr) => {
    const result = arr.flat().reduce((acc, value) => acc + value, 0);
    console.log(result);
  };

  sumOfArraysEl([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
}

/* Дан массив со словами. 
Удалите из него слова, состоящие более чем из трех символов. */

{
  const deleteWords = (words) => {
    const result = words.filter((words) => words.length <= 3);
    console.log(result);
  };
  deleteWords(["three", "little", "words", "as"]);
}

/* Дано некоторое число.
   Проверьте, что все цифры этого числа являются нечетными.*/

{
  const isOddNumbers = (number) => {
    const result = [...String(number)].every((digit) => digit % 2 !== 0);
    console.log(result);
  };
  isOddNumbers(1357);
}

/* Дано некоторое слово:'abcba'
Проверьте, что это слово читается одинаково с любой стороны. */

{
  const palindrome = (word) => {
    const reveresed = [...word].reverse().join("");
    console.log(word === reveresed ? "Palindrome" : "Not a palindrome");
  };
  palindrome("abcba");
}

/*Дан массив:
  Найдите сумму элементов этого массива.  */

{
  const sumOfSubArrays = (arr) => {
    const sum = arr.flat(2).reduce((acc, value) => acc + value, 0);
    console.log(sum);
  };
  sumOfSubArrays([
    [
      [11, 12, 13],
      [14, 15, 16],
      [17, 17, 19],
    ],
    [
      [21, 22, 23],
      [24, 25, 26],
      [27, 27, 29],
    ],
    [
      [31, 32, 33],
      [34, 35, 36],
      [37, 37, 39],
    ],
  ]);
}

/*Выведите в консоль все числа в промежутке от 10 до 1000, 
  у которых первая цифра четная. */

{
  const firstDigitEven = (from, to) => {
    for (let i = from; i < to; i++) {
      const firstDigit = Number([...String(i)][0]);
      if (firstDigit % 2 === 0) {
        console.log(i);
      }
    }
  };
  firstDigitEven(10, 100);
}

/* Дан некоторый массив [1, 2, 3, 4, 5, 6]
Поменяйте местами пары элементов этого массива: */

{
  const swapPairs = (numbers) => {
    for (let i = 0; i < numbers.length; i += 2) {
      [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
    }
    console.log(numbers);
  };

  swapPairs([1, 2, 3, 4, 5, 6]);
}

/* Дан следующий объект.Найдите сумму элементов этого объекта. */

{
  const sumOfValues = (obj) => {
    const sum = Object.values(obj)
      .flatMap(Object.values)
      .reduce((acc, value) => acc + value, 0);

    console.log(sum);
  };
  let obj = {
    1: {
      1: 11,
      2: 12,
      3: 13,
    },
    2: {
      1: 21,
      2: 22,
      3: 23,
    },
    3: {
      1: 24,
      2: 25,
      3: 26,
    },
  };
  sumOfValues(obj);
}

/* Дан текст со словами. 
Запишите в массив все слова, начинающиеся на букву 'a'. */

{
  const wordsWithA = (arr, letter) => {
    const result = arr.filter((word) => word.startsWith(letter.toLowerCase()));
    console.log(result);
  };
  wordsWithA(["apple", "books", "alphabet"], "a");
}

/* Дан массив с числами. 
Оставьте в нем только те числа, которые делятся на 5. */

{
  const divisibleBy5 = (arr) => {
    const result = arr.filter((number) => number % 5 === 0);
    console.log(result);
  };
  divisibleBy5([1, 3, 15, 25]);
}

/* Дан массив с числами. 
Оставьте в нем только те числа, которые содержат цифру ноль. */

{
  const hasZero = (arr) => {
    const result = arr.filter((number) => String(number).includes("0"));
    console.log(result);
  };
  hasZero([10, 102, 12, 111, 3]);
}

/* Дан массив со числами. 
Проверьте, что в нем есть число, содержащее в себе цифру 3. */

{
  const hasDigit = (arr, digit) => {
    const result = arr.some((number) => String(number).includes(String(digit)));
    console.log(result === true ? `has ${digit}` : `has NOT ${digit}`);
  };
  hasDigit([10, 102, 12, 131, 1, 2], 3);
}

/* Дано некоторое число:35142
Отсортируйте цифры этого числа. */

{
  const sortNumber = (number) => {
    const result = Number([...String(number)].sort().join(""));
    console.log(result);
  };
  sortNumber(35142);
}

/* Напишите программу, которая сформирует следующую строку:
'-1-2-3-4-5-' */

{
  const dashString = () => {
    const result =
      "-" + Array.from({ length: 5 }, (_, index) => index + 1).join("-") + "-";
    console.log(result);
  };
  dashString();
}

/* Найдите сумму элементов этого объекта. */

{
  const sumOfObjectEl = (obj) => {
    let sum = 0;

    const calculate = (o) => {
      for (let key in o) {
        if (typeof o[key] === "object") {
          calculate(o[key]);
        } else if (typeof o[key] === "number") {
          sum += o[key];
        }
      }
    };
    calculate(obj);
    console.log(sum);
  };
  let obj = {
    1: {
      1: {
        1: 111,
        2: 112,
        3: 113,
      },
      2: {
        1: 121,
        2: 122,
        3: 123,
      },
    },
    2: {
      1: {
        1: 211,
        2: 212,
        3: 213,
      },
      2: {
        1: 221,
        2: 222,
        3: 223,
      },
    },
    3: {
      1: {
        1: 311,
        2: 312,
        3: 313,
      },
      2: {
        1: 321,
        2: 322,
        3: 323,
      },
    },
  };
  sumOfObjectEl(obj);
}

/* Дан массив со числами. 
Удалите из него числа, состоящие более чем из трех цифр.*/

{
  const delete4DigitNumber = (arr) => {
    const result = arr.filter((num) => Math.abs(num) < 1000);
    console.log(result);
  };
  delete4DigitNumber([11, 232, 33, 441, 2.33]);
}

/* Дано число, например, вот такое: let num = 12345;
Проверьте, что все цифры этого числа больше нуля. */

{
  const checkNumber = (num) => {
    const result = String(num)
      .split("")
      .every((digit) => Number(digit) > 0);
    console.log(result);
  };
  checkNumber(123345);
}

/* Дан некоторый массив, например, вот такой:[123, 456, 789]
Слейте все элементы этого массива в один массив, разбив их посимвольно */

{
  const mergeElemets = (arr) => {
    const result = arr
      .map((num) => String(num).split(""))
      .flat()
      .map((el) => Number(el));

    console.log(result);
  };
  mergeElemets([123, 456, 789]);
}

/* Дан следующая структура:
Найдите сумму элементов этой структуры. */
{
  let data = [
    {
      1: 11,
      2: 12,
      3: 13,
    },
    {
      1: 21,
      2: 22,
      3: 23,
    },
    {
      1: 24,
      2: 25,
      3: 26,
    },
  ];

  const sumOfData = (data) => {
    let sum = data
      .flatMap(Object.values)
      .reduce((acc, value) => acc + value, 0);

    console.log(sum);
  };
  sumOfData(data);
}
/* Дана строка со словами. Отсортируйте слова в алфавитном порядке. */

{
  const sortWords = (words) => {
    const sortedWords = words
      .split(" ")
      .sort((a, b) => a.localeCompare(b))
      .join(" ");
    console.log(sortedWords);
  };
  sortWords("oranges and apple are very tasty");
}

/*  Дано число. Получите массив делителей этого числа.*/
{
  const allDivisors = (number) => {
    const result = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        result.push(i);
      }
    }
    console.log(result);
  };
  allDivisors(36);
}
/* Даны два числа. Получите массив общих делителей этих чисел.*/
{
  const commonDivisors = (num1, num2) => {
    const result = [];
    const limit = Math.min(num1, num2);

    for (let i = 1; i <= limit; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        result.push(i);
      }
    }

    return result;
  };

  console.log(commonDivisors(12, 18));
}
/* Дано число. Проверьте, что у этого числа есть 
только один делитель, кроме него самого и единицы. */

{
  const isPrime = (number) => {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  console.log(isPrime(7));
  console.log(isPrime(10));
  console.log(isPrime(1));
}

/* Через запятую написаны числа. Получите максимальное из этих чисел.*/

{
  const maxOfnumbers = (str) => {
    const result = str.split(",").map(Number);
    return Math.max(...result);
  };
  console.log(maxOfnumbers("1,2,3,4,5"));
}

/* Дан массив с числами. После каждого однозначного числа 
вставьте еще такое же. */

{
  const numbersArray = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
      if (Math.abs(arr[i]) < 10) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  console.log(numbersArray([1, 2, 3, 11, 12, 13, -1, -11]));
}

/* Дана строка. Удалите из нее все гласные буквы.*/

{
  const deleteAllWowels = (str) => {
    const wowels = ["a", "e", "y", "u", "i", "o"];
    const result = str
      .split("")
      .filter((letter) => !wowels.includes(letter.toLowerCase()))
      .join("");
    return result;
  };
  console.log(deleteAllWowels("Hello my name is..."));
}

/* Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке. */

{
  const lastCapitalLetter = (str) => {
    const result = str
      .split(" ")
      .map((word) => word.slice(0, -1).concat(word.at(-1).toUpperCase()))
      .join(" ");
    return result;
  };
  console.log(lastCapitalLetter("Big Boy"));
}

/* Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3. */

{
  const has3InNumbers = (arr) => {
    const result = arr.every((num) => String(num).includes("3"));
    return result;
  };
  console.log(has3InNumbers([132, 13, 4344, 234, 3]));
}

/* Дана строка в формате:'kebab-case'
Преобразуйте ее в формат:'snake_case' */

{
  const formatSnakeString = (str) => {
    const result = str.split("-").join("_");
    return result;
  };
  console.log(formatSnakeString("kebab-case"));
}

/* Дана строка в формате:'snake_case'
Преобразуйте ее в формат:'camelCase' */

{
  const formatCamelString = (str) => {
    const result = str
      .split("_")
      .map((word, index) =>
        index === 1 ? word[0].toUpperCase() + word.slice(1) : word
      )
      .join("");
    return result;
  };
  console.log(formatCamelString("snake_case"));
}

/* Дана строка в формате: 'camelCase'
Преобразуйте ее в формат: 'snake_case' */

{
  const formatSnakelString = (str) => {
    const result = [...str]
      .map((char) =>
        char === char.toUpperCase() ? "_" + char.toLowerCase() : char
      )
      .join("");

    return result;
  };
  console.log(formatSnakelString("camelCase"));
}

/* Сформируйте с помощью циклов следующий массив:*/

{
  const subArrs = () => {
    let arr = [];
    for (let j = 1; j <= 4; j++) {
      let subArr = [];
      for (let i = 1; i < 4; i++) {
        subArr.push(i);
      }
      arr.push(subArr);
    }

    return arr;
  };
  console.log(subArrs());
}

/*  Дана строка. Проверьте, что эта строка состоит только из цифр.*/
{
  const isAllDigits = (str) => {
    const result = [...str].every((char) => char >= "0" && char <= "9");
    return result;
  };
  console.log(isAllDigits("123425"));
}

/* Дана строка. Проверьте, что эта строка состоит только из четных цифр.*/

{
  const isAllprime = (str) => {
    const result = [...str].every((char) => Number(char) % 2 == 0);
    return result;
  };
  console.log(isAllprime("222"));
}

/* Дан массив со числами. Удалите из него числа, имеющие два и более нуля. */

{
  const deleteZeros = (arr) => {
    const result = arr.filter((num) => {
      const zeroCount = String(num)
        .split("")
        .filter((digit) => digit === "0").length;
      return zeroCount < 2;
    });
    return result;
  };
  console.log(deleteZeros([1, 10, 100, 1001, 1005, 10030]));
}
{
  const deleteZeros = (arr) => {
    return arr.filter((num) => !/0.*0/.test(String(num)));
  };

  console.log(deleteZeros([1, 10, 100, 1001, 1005, 10030])); // [1, 10]
}

/* Найдите все числа от 1 до 1000, сумма цифр которых равна 13 */

{
  const findNumbers = (from, to) => {
    const result = [];
    for (let i = from; i < to + 1; i++) {
      if ([...String(i)].reduce((acc, v) => acc + Number(v), 0) === 13) {
        result.push(i);
      }
    }
    return result;
  };
  console.log(findNumbers(1, 1000));
}
{
  const findNumbers = (from, to) => {
    const result = [];
    for (let i = from; i <= to; i++) {
      let sum = 0;
      let num = i;

      // Арифметичний підрахунок суми цифр числа
      while (num > 0) {
        sum += num % 10; // Додаємо останню цифру
        num = Math.floor(num / 10); // Видаляємо останню цифру
      }

      if (sum === 13) {
        result.push(i);
      }
    }
    return result;
  };

  console.log(findNumbers(1, 1000)); // [49, 58, 67, ...]
}

/* Сформируйте с помощью циклов следующий массив: */

{
  const subArrays = () => {
    let result = [];
    let count = 1;

    for (let i = 1; i <= 3; i++) {
      let subArr = [];
      for (let j = 1; j <= 3; j++) {
        subArr.push(count);
        count++;
      }
      result.push(subArr);
    }
    return result;
  };
  console.log(subArrays());
}

/*  Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.*/

{
  const doublesInArr = (arr) => {
    // const result = [...arr].concat([...arr]);
    const result = arr.flatMap((item) => [item, item]);

    return result;
  };
  console.log(doublesInArr([1, 2, 3]));
}

/* Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа. */

{
  const devisors = (numbers, devisor) => {
    const result = numbers.filter((num) => num % devisor === 0);
    return result;
  };
  console.log(devisors([1, 2, 3, 4, 5], 5));
}

/* Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе */
{
  const getCommonDigits = (num1, num2) => {
    const digits2 = new Set([...String(num2)]);
    const result = new Set([...String(num1)].filter((el) => digits2.has(el)));
    return [...result];
  };
  console.log(getCommonDigits(180231, 28635));
}

/* Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней. */

{
  const getIndexesOf3 = (number) => {
    const result = String(number)
      .split("")
      .map((el, index) => (el === "3" ? index : -1))
      .filter((el) => el !== -1)
      .slice(1, -1);
    return result;
  };
  console.log(getIndexesOf3(23323223323));
}

/* Дан массив с числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите. */

{
  const uniqueDigitNumbers = (arr) => {
    return arr.filter((num) => {
      const digits = String(num).split("");
      const uniqueDigits = new Set(digits);
      return uniqueDigits.size === digits.length;
    });
  };
  console.log(uniqueDigitNumbers([1, 13, 22, 44, 67]));
}

/* Дан массив. Слейте элементы этого массива в один одномерный массив:*/
{
  const mergeArrays = (arr) => {
    return arr.flat(Infinity);
  };
  console.log(mergeArrays([[1, 2, 3], [4, 5, 6], [[[7], 8, 9]]]));
}
