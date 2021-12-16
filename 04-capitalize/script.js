/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    return str.split(' ').map(function(word) {
        if (typeof word === 'string' && word !== '') {
            return word[0].toUpperCase() + word.substring(1);
        } else {return word}
 }).join(' ');
 }

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"