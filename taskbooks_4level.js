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

var zodiacDates = {
  Овен: { start: "21 марта", end: "19 апреля" },
  Телец: { start: "20 апреля", end: "20 мая" },
  Близнецы: { start: "21 мая", end: "20 июня" },
  Рак: { start: "21 июня", end: "22 июля" },
  Лев: { start: "23 июля", end: "22 августа" },
  Дева: { start: "23 августа", end: "22 сентября" },
  Весы: { start: "23 сентября", end: "22 октября" },
  Скорпион: { start: "23 октября", end: "21 ноября" },
  Стрелец: { start: "22 ноября", end: "21 декабря" },
  Козерог: { start: "22 декабря", end: "19 января" },
  Водолей: { start: "20 января", end: "18 февраля" },
  Рыбы: { start: "19 февраля", end: "20 марта" },
};

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
    const day = new Date(date.split(".").concat("0000").reverse().join("-"));
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
    const result = [...String(num)].filter(v=>v!='0').join('')
    return Number(result)
  };
  console.log(deleteZeros(2005));
  
}
