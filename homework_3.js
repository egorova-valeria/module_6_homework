// // Задание 3
// Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.

function getCount(num1) {
    return function getSum(num2) {
      return num1 + num2;
    }
  }
  
  const totalSum = getCount(5);
  console.log(totalSum(3))
