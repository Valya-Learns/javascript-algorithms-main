/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const words = str.split(" ");
   for(let i = 0; i< words.length; i++)
{
   words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
let result = words.join(" ");
return result;
}




// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize(' ')); // "Молодость Всё Простит"