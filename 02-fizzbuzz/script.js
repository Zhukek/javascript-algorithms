/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    if (typeof num !== "number") {
        return 'Введите число';
    }
    for (i=1;i<=num;i++) {
        switch(0) {
            case i % 15:
                console.log('fizzbuzz');
                break;
            case i % 5:
                console.log('buzz');
                break;
            case i % 3:
                console.log('fizz');
                break
            default:
                console.log(i);
        };
    };
};

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));