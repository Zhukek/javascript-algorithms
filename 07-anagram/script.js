/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    const strMassive1 = str1.toLowerCase().split('');
    const strMassive2 = str2.toLowerCase().split('');
    const booleMassive = []
        if (strMassive1.length === strMassive2.length && str1.toLowerCase() !== str2.toLowerCase()) {
        strMassive1.forEach(function (letter) {
           booleMassive.push(strMassive2.includes(letter));
        })
        return booleMassive.every(function(boole) {
            return boole === true;
        })   
    } else {
        return false;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('up', 'UP')); // false
console.log(anagram('hello', 'bye')); // false