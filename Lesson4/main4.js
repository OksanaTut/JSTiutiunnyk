// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area (a, b){
//     let s=a*b;
//     return  s;
// }
// let res= area(10, 14)
// console.log(res)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function ar (r){
//     let s=3.14*r*r;
//     return  s;
// }
// let res= ar(10)
// console.log(res)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cil (h, r){
//     let s=2*3.14*r*(r+h);
//     return  s;
// }
// let res= cil(10,5)
// console.log(res)

// - створити функцію яка приймає масив та виводить кожен його елемент
// function arr (a){
//     for (const aElement of a) {
//         console.log (aElement)
//     }
// }
// let a= [2,4,6,8,10,12];
// arr (a);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function par (text){
//     document.write(`<p>${text}</p>`)
// }
//
// par('Грамоти вчиться — завжди пригодиться.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(text){
//     document.write(`<ul>`);
//     for (let x = 0; x<3; x++){
//         document.write(`<li>${text}</li>`)};
//     document.write(`</ul>`);
// };
// list('Вийшло!!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list(n, text){
//     document.write(`<ul>`);
//     for (let x = 0; x<n; x++){
//         document.write(`<li>${text}</li>`)};
//     document.write(`</ul>`);
// };
// list(3, 'Вийшло!!')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function list(arr){
//     document.write(`<ul>`);
//     for (let element of arr){
//         document.write(`<li>${element}</li>`)
//         };
//     document.write(`</ul>`);
// };
// list([1,3,5, 'Masha', true,5])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//Для кожного об'єкту окремий блок.
// let users = [
//     {id:123, name: 'vasya', age: 31},
//     {id:8763, name: 'petya', age: 30},
//     {id:9864, name: 'kolya', age: 29},
//     {id:98, name: 'olya', age: 28},
//     {id:48743, name: 'max', age: 30},
//     {id:874365, name: 'anya', age: 31},
//     {id:18736, name: 'oleg', age: 28},
// ];
// function writer (arr){
//     for (let n of arr) {
//         document.write(`<ul class="block">`);
//
//         for (let field in n) {
//             document.write(`<li> ${field} - ${n[field]} </li>`) }
//         document.write(`</ul>`);
//     }
//     };
// writer(users)

// - створити функцію яка повертає найменьше число з масиву
// function min(arr){
//     for (let el=0; el<arr.length; el++) {
//         for (let i=0; i<arr.length; i++)
//         if (arr[el]<=arr[i]){
//             m =arr[el]} else break;
//     }
// return m
// }
//
// let arr=[1,0,3,-5,8]
// console.log (min(arr))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr){
//     let res=0;
//     for (let el=0; el<arr.length; el++) {
//         res = res+arr[el];
//     }
//     return res;
// }
//
// let arr=[5,0,3,-10,8]
// console.log (sum(arr))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap  (arr, a, b){
//     let ch1= arr[a];
//     let ch2= arr[b];
//     arr [a]=ch2;
//     arr[b]=ch1;
//     return arr;
// }
// let arr1=swap([5,0,6,7,3,-10,8], 0,5)
// console.log (arr1)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
function exchange(sumUAH, currencyValues, valuta){
    for (let i of currencyValues) {
         if (valuta === currencyValues[i].currency) {
                a = (sumUAH / currencyValues[i].value);}
    }
    return a;
}

let CV=[{currency:'USD', value:40}, {currency:'EUR', value:42}];


// let x=exchange(50000, CV, 'USD')


// let exchangeCurrency='EUR'
// console.log('EUR' === CV[1].currency)