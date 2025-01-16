//Level 4

var daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

/* Сделайте функцию, которая вернет текущий день недели словом. */
{
  const getDay = () => {
    const today = new Date().getDay();
    return daysOfWeek[today];
  };
  console.log(getDay());
}

/* Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате. */

{
  const getDayof = (date) => {
    const day = new Date(date.split("-").reverse().join("-")).getDay();
    return daysOfWeek[day];
  };
  console.log(getDayof("14-08-2025"));
}

/* Сделайте функцию, которая параметром будет принимать секунды, 
а возвращать количество суток, соответствующих этим секундам. */

{
  const countDays = (seconds) => {
    const days = seconds / 3600 / 24;
    return days;
  };
  console.log(countDays(100000));
}

/* Сделайте функцию, которая параметром будет принимать 
число и строку и обрезать эту строку до длины, заданной первым параметром. */

{
  const cutString = (num, str) => {
    return str.slice(0, num);
  };
  console.log(cutString(4, "Hello World"));
}

/* Сделайте функцию, которая параметром будет получать дату,
 а возвращать знак зодиака, соответствующий этой дате. */
{
  const getZodiacSign = (date) => {
    return "-------";
  };
  console.log(getZodiacSign("12.02"));
}

/* Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей. */
{
  const sumOfDivisors = (num) => {
    let sum = 0;
    for (let i = 1; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) {
          sum += num / i;
        }
      }
    }
    return sum;
  };
  console.log(sumOfDivisors(15));
}

/* Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр. */
{
  const sumOfDigits = (num) => {
    const result = [...String(num)].reduce((acc, v) => acc + Number(v), 0);
    return result;
  };
  console.log(sumOfDigits(124));
}
/* Сделайте функцию, которая параметром будет принимать число и удалять из него нули. */

{
  const deleteZeros = (num) => {
    const result = [...String(num)].filter((v) => v != "0").join("");
    return Number(result);
  };
  console.log(deleteZeros(2005));
}

/* Сделайте функцию, которая будет возвращать сколько дней прошло 
или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет. */

{
  const countDays = (date) => {
    const now = new Date();
    const [year, month, day] = date.split(".").reverse();
    const targetDate = new Date(year, month - 1, day);
    return (now - targetDate) / 1000 / 3600 / 24;
  };
  console.log(countDays("15.01.2025"));
}
/* Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет. */
{
  const isLeapYear = (year) => {
    const date = new Date(year, 2, 0);
    return date.getDate() === 29 ? "yes" : "no";
  };
  console.log(isLeapYear(2024));
}
/* Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет. */

{
  const allLeapYears = (years) => {
    let arr = [];
    const now = new Date().getFullYear();
    const range = now - years;
    for (let i = now; i > range; i--) {
      let date = new Date(i, 2, 0);
      if (date.getDate() === 29) {
        arr.push(i);
      }
    }
    return arr;
  };
  console.log(allLeapYears(100));
}
/* Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.*/
{
  const daysLetf = () => {
    const now = new Date();
    const [year, month, today] = [
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    ];
    const lastDay = new Date(year, month + 1, 0).getDate();
    return lastDay - today;
  };
  console.log(daysLetf());
}

/* Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
{
	next: 'пн',
	curr: 'вс',
	prev: 'сб',
} */

{
  const days = () => {
    const now = new Date();
    let obj = {};
    obj.next = daysOfWeek[(now.getDay() + 1) % 7];
    obj.curr = daysOfWeek[now.getDay()];
    obj.prev = daysOfWeek[(now.getDay() + 6) % 7];
    return obj;
  };
  console.log(days());
}

/* Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли. */

{
  const uniqueNumbers = (arr) => {
    const unique = [...new Set(arr)];
    return unique;
  };
  console.log(uniqueNumbers([1, 2, 2, 3, 3, 3, 3, 4]));
}
/* Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз*/
{
  const uniqueNumbers = (arr) => {
    const counts = arr.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
    return arr.filter((el) => counts[el] <= 3);
  };
  console.log(uniqueNumbers([1, 2, 2, 3, 3, 3, 3, 4, 2]));
}

/* Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы. */

{
  const deleteEl = (arr) => {
    let result = arr.filter((el, index) => el !== arr[index + 1]);
    return result;
  };
  console.log(deleteEl([1, 2, 3, 4, 4, 5, 5, 5]));
}

/* Сделайте функцию, которая параметром будет принимать массив с числами и
 возвращать максимальное и минимальное значение из этого массива в виде следующего объекта: */

{
  const min_max = (arr) => {
    const result = { min: Math.min(...arr), max: Math.max(...arr) };
    return result;
  };
  console.log(min_max([1, 2, 3, 4, 5]));
}
/* Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей. */
{
  const countDivisors = (num) => {
    let count = 0;

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        count++;
        if (i !== num / i) {
          count++ / i;
        }
      }
    }
    return count;
  };
  console.log(countDivisors(15));
}

/* Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей. */
{
  const arrOfDivisors = (num) => {
    let arr = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        arr.push(i);
        if (i !== num / i) {
          arr.push(num / i);
        }
      }
    }
    return arr.sort((a, b) => a - b);
  };
  console.log(arrOfDivisors(15));
}

/* Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры. */

{
  const onlyOdd = (num) => {
    const result = String(num)
      .split("")
      .filter((el) => el % 2 !== 0)
      .join("");
    return Number(result);
  };
  console.log(onlyOdd(1234));
}

/* №6

Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка. */

{
  const randomNum = (from, to) => {
    const N = [];
    for (i = from; i < to; i++) {
      N.push(Math.floor(Math.random() * (to - from + 1) + from));
    }
    return N;
  };
  console.log(randomNum(12, 18));
}
/* Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр. */
{
  const isAllDigits = (str) => {
    const result = [...str].every((char) => char >= "0" && char <= "9");
    return result;
  };
  console.log(isAllDigits("123d"));
}
/* Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число. */

{
  const secondToMin = (arr) => {
    const result = arr.sort((a, b) => a - b);
    return result[1];
  };
  console.log(secondToMin([3, 4, 2, 1, 5]));
}
/* Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив,
 заполненный целыми числами от минимального параметра до максимального. */
{
  const arrayFrom = (num1, num2) => {
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;
  };
  console.log(arrayFrom(6, 3));
}
/* Сделайте функцию, которая заполнит массив случайными латинскими буквами. */
{
  const arrayLetters = (length) => {
    return Array.from({ length }, () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    );
  };
  console.log(arrayLetters(5));
}
{
  console.log(String.fromCharCode(65, 66, 67));
  //https://commons.wikimedia.org/wiki/File:ASCII-Table-wide.svg

  const generateASCIITable = () => {
    const asciiTable = [];
    for (let i = 65; i <= 127; i++) {
      asciiTable.push({ code: i, char: String.fromCharCode(i) });
    }
    return asciiTable;
  };

  console.table(generateASCIITable());
}
/* Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи. */
{
  const fib = (N) => {
    if (N <= 0) return 0;
    if (N === 1) return 0;

    const result = [0, 1];
    for (let i = 2; i < N; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result.reduce((acc, v) => acc + v, 0);
  };
  console.log(fib(10));
}
/* Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день,
 и определять, существует ли такая дата или нет. */

{
  const isTrueDate = (date) => {
    const result = new Date(date);

    if (isNaN(result.getTime())) {
      return false;
    }

    const [year, month, day] = date.split("-").map(Number);
    return (
      result.getFullYear() === year &&
      result.getMonth() + 1 === month &&
      result.getDate() === day
    );
  };

  console.log(isTrueDate("2025-02-12")); // true
  console.log(isTrueDate("2025-02-30")); // false
}

/* Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами. */
{
  const randomString = (length) => {
    return Array.from({ length }, () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    ).join("");
  };
  console.log(randomString(5));
}

/* Сделайте функцию, которая параметром будет получать строку со словами, 
а возвращать строку в верхнем регистре, состоящую из первых букв слов. */

{
  const upperCaseString = (str) => {
    const result = str
      .split(" ")
      .map((el) => el[0].toUpperCase())
      .join("");
    return result;
  };
  console.log(upperCaseString("happy new year"));
}

/* Сделайте функцию, которая параметром будет принимать массив с числами
 и заменять каждое число на массив его делителей. */

{
  const arrOfDivisors = (num) => {
    let arr = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        arr.push(i);
        if (i !== num / i) {
          arr.push(num / i);
        }
      }
    }
    return arr.sort((a, b) => a - b);
  };

  const arrayOfDivisors = (arr) => {
    const result = arr.map((el) => arrOfDivisors(el));
    return result;
  };
  console.log(arrayOfDivisors([1, 4, 6, 15]));
}
/* Сделайте функцию, которая параметром будет принимать секунды, 
а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта: */
{
  const inSeconds = (sec) => {
    const result = {};
    result.d = Math.floor(sec / 86400);
    sec %= 86400;

    result.h = Math.floor(sec / 3600);
    sec %= 3600;

    result.m = Math.floor(sec / 60);
    sec %= 60;

    result.s = sec;
    return result;
  };
  console.log(inSeconds(10000));
}
/* Сделайте функцию, которая параметром будет принимать текст со словами, 
а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке. */
{
  const sortedString=(str)=>{
    const result = str.split(' ').sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase())).join(' ');
    return result
    }
    console.log(sortedString("Happy New Year and Merry Christmas"));
    
}
