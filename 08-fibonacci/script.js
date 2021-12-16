/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    const fibonacciVar = [0];
    for (i = 1; i < n; i++) {
        if (fibonacciVar.length === 1) {
            fibonacciVar.push(1);
        } else {
            fibonacciVar.push(fibonacciVar[fibonacciVar.length - 2] + fibonacciVar[fibonacciVar.length - 1]);
        }
    }
    return fibonacciVar[fibonacciVar.length - 1];
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)