// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let area = (a, b) => a*b;
// console.log(area(5, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let areaC = (r) => 3.14*r*r;
// console.log(areaC(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let areaCyl = (r,h) => 2*3.14*r*(r+h);
// console.log(areaCyl(10, 15))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = (array) => {
//     for (const item of array) {
//         console.log(item)
//     }
// }
//
// arr ([2,4,6,8,10,12]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let par =(text)=>document.write(`<p>${text}</p>`)
//
// par('Грамоти вчиться — завжди пригодиться.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list=(text)=>{
//     document.write(`<ul>`);
//     for (let x = 0; x<3; x++){
//         document.write(`<li>${text}</li>`)};
//     document.write(`</ul>`);
// };
// list('Вийшло!!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list=(n, text)=>{
//     document.write(`<ul>`);
//     for (let x = 0; x<n; x++){
//         document.write(`<li>${text}</li>`)};
//     document.write(`</ul>`);
// };
// list(5, 'Вийшло!!')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list=(array)=>{
//     document.write(`<ul>`);
//     for (let element of array){
//         document.write(`<li>${element}</li>`)
//         };
//     document.write(`</ul>`);
// };
// list([1,3,5, 'Masha', true,5, false, -567])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для
// кожного об'єкту окремий блок.
// let users = [
//     {id:123, name: 'vasya', age: 31},
//     {id:8763, name: 'petya', age: 30},
//     {id:9864, name: 'kolya', age: 29},
//     {id:98, name: 'olya', age: 28},
//     {id:48743, name: 'max', age: 30},
//     {id:874365, name: 'anya', age: 31},
//     {id:18736, name: 'oleg', age: 28},
// ];
// let writer= (arr)=>{
//     for (let n of arr) {
//         document.write(`<ul>`);
//         for (let field in n) {
//             document.write(`<li> ${field} - ${n[field]} </li>`) }
//         document.write(`</ul>`);
//     }
//     };
// writer(users)

// - створити функцію яка повертає найменьше число з масиву
// let min=(array)=>{
//     let min=array[0]
//     for (let el of array) {
//         if (el<min) {
//             min = el;
//         }
//     }return min
// }
//
// console.log (min([100000,-110,30,-5,8]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// let sum=(array)=>{
//     let res=0;
//     for (let el of array) {
//         res = res+el;
//     }
//     return res;
// }
// console.log (sum([5,0,3,-10,8,6,8]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap=  (arr, a, b)=>{
//     let x= arr[a];
//     arr [a]=arr[b];
//     arr[b]=x;
//     return arr;
// }
// console.log (swap([5,0,6,7,3,-10,8], 0,5))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
//     for (let i=0;i<currencyValues.length; i++) {
//         if (exchangeCurrency === currencyValues[i].currency){
//             return res = sumUAH/currencyValues[i].value;
//         }
//     }
// }
// let CV=[
//     {currency:'USD',value:40},
//     {currency:'EUR',value:42}];
// console.log (exchange(168000,CV, 'EUR'))