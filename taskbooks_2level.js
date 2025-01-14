//Level 2

/* Дана некоторая строка. Найдите позицию первого нуля в строке.*/

{
  const findZero = (str) => {
    console.log([...str].indexOf("0"));
  };
  findZero("a0kajs0la");
}

/* Выведите в консоль все числа в промежутке от 1 до 1000, 
   сумма первой и второй цифры которых равна пяти. */

{
  const sumOfNumbers = (min, max) => {
    for (let i = min; i <= max; i++) {
      const digits = [...String(i)].map(Number);
      if (digits.length > 1 && digits[0] + digits[1] === 5) {
        console.log(i);
      }
    }
  };
  sumOfNumbers(1, 1000);
}

/* Дан массив. Удалите из него элементы с заданным значением. */

{
  const deleteValue = (numbers, value) => {
    if (!numbers.includes(value)) {
      console.log("no value");
    } else {
      console.log(numbers.filter((el) => el != value));
    }
  };
  deleteValue([1, 2, 3, 4], 5);
}

/* Найдите сумму первой половины элементов этого массива. */

{
  const sumOfHalf = (numbers) => {
    const halfNumbers = numbers.slice(0, numbers.length / 2);
    const sum = halfNumbers.reduce((acc, value) => acc + value, 0);
    console.log(sum);
  };

  sumOfHalf([1, 2, 3, 4, 5, 6, 7]);
}

/* Дан массив с числами. 
   Подсчитайте количество отрицательных чисел в этом массиве. */

{
  const negativeCount = (numbers) => {
    const negative = numbers.reduce((acc, num) => acc + (num > 0 ? 1 : 0), 0);
    console.log(negative);
  };
  negativeCount([-1, 2, -3, 4]);
}

/* Дан массив с числами. Оставьте в нем только положительные числа.*/
{
  const onlyPositive = (numbers) => {
    const positive = numbers.filter((num) => num > 0);
    console.log(positive);
  };
  onlyPositive([1, 2, -3, -5]);
}

/* Дана строка. Удалите предпоследний символ из этой строки.*/

{
  const delete2ndToEnd = (str) => {
    const newStr = str.slice(0, -2) + str.slice(-1);
    console.log(newStr);
  };
  delete2ndToEnd("abcde");
}

/* Поделите сумму первой половины элементов этого массива 
   на сумму второй половины элементов. */

{
  const divideSumOfHalves = (numbers) => {
    const firstPart = numbers.slice(0, numbers.length / 2);
    const secondPart = numbers.slice(numbers.length / 2);

    const sumOf1part = firstPart.reduce((acc, val) => acc + val, 0);
    const sumOf2part = secondPart.reduce((acc, val) => acc + val, 0);

    console.log(sumOf1part / sumOf2part);
  };
  divideSumOfHalves([1, 2, 3, 4, 5, 6]);
}

/* Даны два слова. Проверьте, что последняя буква 
   первого слова совпадает с первой буквой второго слова. */

{
  const compare = (word1, word2) => {
    const firstLetter = word1.at(-1).toLowerCase();
    const lastLetter = word2.at(0).toLowerCase();
    console.log(firstLetter === lastLetter);
  };
  compare("lol", "Lek");
}

/* Дана некоторая строка. Найдите позицию третьего нуля в строке.*/

{
  const find3rdZero = (str) => {
    let zeroCount = 0;
    for (const [index, char] of [...str].entries()) {
      if (char === "0" && ++zeroCount === 3) {
        console.log(index);
        return;
      }
    }
  };
  find3rdZero("qwe0dsd0a0s");
}

/* Даны числа, разделенные запятыми:
   Найдите сумму этих чисел*/

{
  const sumOfNumbers = (str) => {
    const array = str.split(",").map((el) => Number(el));
    const sum = array.reduce((acc, val) => acc + val, 0);
    console.log(sum);
  };
  sumOfNumbers("12,34,56");
}

/* Дана дата в следующем формате:
   Преобразуйте эту дату в следующий объект*/
{
  const formatObject = (str) => {
    // const array = str.split('-').map((el)=>Number(el));
    // const date = {year:array[0], month:array[1],day:array[2]};
    const [year, month, day] = str.split("-").map(Number);

    console.log({ year, month, day });
  };
  formatObject("2025-12-31");
}

/* Дана некоторая строка с буквами и цифрами. 
   Получите позицию первой цифры в этой строке. */

{
  const fisrstDigit = (str) => {
    const position = str.match(/[0-9]/);
    console.log(str.search(position));
  };
  fisrstDigit("qw0dsds");
}

/* Дан объект с ключами и значениями. 
   Запишите в первый массив ключи объекта, а во второй - значения. */
{
  const keysNvalues = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    console.log(values, keys);
  };
  keysNvalues({ firstName: "John", lastName: "Doe" });
}

/* Дано число. Выведите в консоль количество четных цифр в этом числе. */

{
  const evenCountNumbers = (number) => {
    const count = [...String(number)]
      .map(Number)
      .filter((i) => i % 2 === 0).length;

    console.log(count);
  };
  evenCountNumbers(234234);
}

/* Переведите в верхний регистр все нечетные буквы этой строки. */

{
  const upperCase = (str) => {
    let newStr = "";
    for (i in str) {
      if (i % 2 == 0) {
        newStr += str[i].toUpperCase();
      } else {
        newStr += str[i];
      }
    }
    console.log(newStr);
  };
  upperCase("abcde");
}

/* Сделайте заглавным первый символ каждого слова в этой строке */

{
  const capitalizeWord = (words) => {
    const newWords = words
      .split(" ")
      .map((el) => el[0].toUpperCase() + el.slice(1))
      .join(" ");

    console.log(newWords);
  };
  capitalizeWord("aaa bbb ccc");
}

/* Получите массив позиций всех нулей в этой в строке.*/

{
  /* const allZero = (str) => {
      const countZ = [...str]
      .map((el, index)=> el==="0"? index : -1 )
      .filter(index=>index!==-1)
      console.log(countZ);
    }; */

  const allZero = (str) => {
    const positions = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0") {
        positions.push(i);
      }
    }
    console.log(positions);
  };

  allZero("023m0df0dfg0");
}

/* Удалите из этой строки каждый третий символ. */

{
  const delete3rd = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if ((i + 1) % 3 != 0) {
        newStr += str[i];
      }
    }
    console.log(newStr);
  };
  delete3rd("abcdef");
}

/* Поделите сумму элементов, стоящих на четных позициях, 
   на сумму элементов, стоящих на нечетных позициях. */
{
  const devisionHalves = (numbers) => {
    const even = numbers
      .filter((_, index) => index % 2 === 0)
      .reduce((acc, el) => acc + el, 0);
    const odd = numbers
      .filter((_, index) => index % 2 !== 0)
      .reduce((acc, el) => acc + el, 0);
    const devision = even / odd;
    console.log(devision);
  };
  devisionHalves([1, 2, 3, 4, 5, 6]);
}

/* Дана некоторая строка с буквами и цифрами.
   Получите массив позиций всех цифр из этой строки. */

{
  getNumberIndex = (str) => {
    let getIndex = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "0" && str[i] <= "9") {
        getIndex.push(i);
      }
    }

    console.log(getIndex);
  };
  getNumberIndex("sd3adj2k31");
}

/* Дан массив с некоторыми числами. 
   Напишите код, который перевернет числа в этом массиве*/

{
  const reversedArrays = (array) => {
    const reversed = array.map((el) =>
      Number([...String(el)].reverse().join(""))
    );
    console.log(reversed);
  };
  reversedArrays([123, 456, 789]);
}

/* Отделите тройки цифр пробелами, начиная с конца числа */

{
  const separatetNumbers = () => {};
}

/* Смените регистр букв этой строки на противоположный. 
   В нашем случае должно получится следующее:*/

{
  const changeCase = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        newStr += str[i].toLowerCase();
      } else {
        newStr += str[i].toUpperCase();
      }
    }

    console.log(newStr);
  };
  changeCase("aBcDe");
}
/* Дан некоторый массив с числами
   Слейте пары элементов вместе: */

{
  const mergedArray = (numbers) => {
    const merged = numbers.reduce((acc, _, i, arr) => {
      if (i % 2 === 0) {
        acc.push(arr[i + 1] !== undefined ? arr[i] * 10 + arr[i + 1] : arr[i]);
      }
      return acc;
    }, []);
    console.log(merged);
  };
  mergedArray([1, 2, 3, 4, 5, 6]);
}
/* Дана некоторая строка со словами
   Сделайте заглавным первый символ каждого второго слова в этой строке.  */
{
  const string = (str) => {
    const newString = str
      .split(" ")
      .map((word, index) =>
        index % 2 !== 0 ? word[0].toUpperCase() + word.slice(1) : word
      )
      .join(" ");

    console.log(newString);
  };
  string("aaa bbb ccc eee fff");
}

/* Дана некоторая строка
   Переведите в верхний регистр все подстроки, в которых 
   количество букв меньше или равно трем.*/

{
  const upperCase = (str) => {
    const result = str
      .split(" ")
      .map((el) => (el.length <= 3 ? el.toUpperCase() : el))
      .join(" ");
    console.log(result);
  };
  upperCase("a bc def ghij");
}

/* Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем. */

{
  const isUpper = (sym) => {
    console.log(sym === sym.toUpperCase() ? "Upper" : "Lower");
  };
  isUpper("W");
}
/* Дано некоторое число
   Удалите из этого числа все нечетные цифры.*/

{
  const onlyPositiveNumbers = (number) => {
    const result = [...String(number)].filter((el) => el % 2 === 0).join("");
    console.log(result);
  };
  onlyPositiveNumbers(123789);
}

/* Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.*/

{
  const upperCaseCheck = (str) => {
    const limit = 2;
    const result = [...str].reduce(
      (acc, v) => acc + (v === v.toUpperCase() ? 1 : 0),
      0
    );
    console.log(result <= limit);
  };

  upperCaseCheck("nbmMsDasМs"); // false
  upperCaseCheck("nbmMsass"); // true
}

/* Дана некоторая строка.
   Удалите из этой строки все подстроки, в которых количество символов больше трех. */

{
  const deleteLongWords = (str) => {
    const result = str
      .split(" ")
      .filter((w) => w.length <= 3)
      .join(" ");
    console.log(result);
  };
  deleteLongWords("1 22 333 4444 22 5555 1");
}

/* Даны два массива. Слейте эти массивы в новый массив следующим образом:*/

{
  const mergeArrays = (arr1, arr2) => {
    const result = arr1.slice(0, 2).concat(arr2).concat(arr1.slice(2));
    console.log(result);
  };
  mergeArrays([1, 2, 3], ["a", "b", "c"]);
}

/* Дано некоторое число.Найдите сумму пар цифр этого числа.*/

{
  const sumOfpairs = (number) => {
    const merged = [...String(number)]
      .map(Number)
      .reduce((acc, _, i, arr) => {
        if (i % 2 === 0) {
          acc.push(
            arr[i + 1] !== undefined ? arr[i] * 10 + arr[i + 1] : arr[i]
          );
        }
        return acc;
      }, [])
      .reduce((acc, v) => acc + v, 0);
    console.log(merged);
  };
  sumOfpairs(123456);
}


/* Дан массив с числами. Выведите в консоль элементы этого массива в обратном порядке.*/

{
  const reversedArray = (arr) => {
    const reversed = arr.reverse();
    for (let i of reversed) {
      console.log(i);
    }
  };
  reversedArray([1, 2, 3, 4, 5]);
}


/* Дана строка с буквами и цифрами.
   Проверьте, что в этой строке не более трех букв. */

{
  const stringCheck = (str) => {
    const match = /[a-z]/i;
    const result = [...str].filter((el) => match.test(el)).length;
    console.log(result > 3 ? `More then 3 letters` : `3 letters or less`);
  };
  stringCheck(" 34 ewfW a4");
}

/* Дано число. Получите первую четную цифру с конца этого числа.*/

{
  const getEvenNumber = (number) => {
    const result = [...String(number)].filter((v) => v % 2 === 0).at(-1);
    console.log(result);
  };
  getEvenNumber(87219);
}

/* Дана некоторая строка
  Замените в ней первый символ каждого слова на '!'*/

{
  const changeString = (str, sym) => {
    const result = str
      .split(" ")
      .map((word) => sym.concat(word.slice(1)))
      .join(" ");
    console.log(result);
  };
  changeString("abcde abcde abcde", "!");
}


/* Дан массив с числами.
   Проверьте, что в этом массиве есть два одинаковых элемента подряд.*/

{
  const checkForDoubles = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        console.log(true, `Dounbles found at: ${i} and ${i + 1}`);
        return;
      }
    }
    console.log(false, `No Doubles`);
  };
  checkForDoubles([1, 2, 3, 4, 5]);
}
