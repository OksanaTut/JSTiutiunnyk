// // Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// // та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок
// // з вашим об'єктом
// const form = document.forms.creator;
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     let client=document.createElement('div');
//
//     let name = document.createElement('p');
//     let surname = document.createElement('p');
//     let age = document.createElement('p');
//
//     name.innerText = `Name: ${this.name.value}`;
//     surname.innerText = `Surname: ${this.surname.value}`;
//     age.innerText = `Age: ${this.age.value}`;
//
//     client.append(name, surname, age);
//     document.body.appendChild(client);
// });

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

let obj=document.getElementById('count');
console.log(obj);
let x=obj.childNodes;
console.log(x);


// number.onload=function (){
//     console.log(JSON.parse(this.value));
//
// }
// newNumber=number+1;
// let new=document.createElement('div');
// new.classList.add('count');
// new.innerText=newNumber;
// document.body.appendChild(new);


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)