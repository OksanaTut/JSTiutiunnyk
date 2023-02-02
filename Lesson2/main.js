// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let mas=[12,5,38,41,'Kostia','Vlad','Oksana','Slava','female','male']
// console.log(mas[4]);
// console.log(mas[0]);
// console.log(mas[5]);
// console.log(mas[1]);
// console.log(mas[7]);
// console.log(mas[3]);
// console.log(mas[9]);
// console.log(mas[6]);
// console.log(mas[2]);
// console.log(mas[8]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1={title:'Kotygoroshko', pageCount:53, genre:'fairytale'}
// let book2={title:'Garry Potter', pageCount: 398, genre: 'fantazy'}
// let book3={title:'It', pageCount:675, genre:'horror'}
// console.log(book1);
// console.log(book3);
// console.log(book2);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.
// let kn1={title:'Kotygoroshko', pageCount:53, genre:'fairytale', authors:['folk',1000]}
// let kn2={title:'Garry Potter', pageCount: 398, genre: 'fantazy', authors:['Joanne Rowling', 57]}
// let kn3={title:'It', pageCount:675, genre:'horror', authors:['Stephen King', 76]}
// console.log(kn1, kn2, kn3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача
// let user=[
// 	{name:'Vlad', userName:'spiderman', password:'spm1'},
// 	{name: 'Kostia', userName: 'Kot', password: 'guyg86'},
// 	{name: 'Oksana', userName: 'TOk', password: '322223322a'},
// 	{name: 'Slava', userName: 'VVT', password: '389ryheukfhb'},
// 	{name: 'Vasya', userName: 'VasVas', password: 'djfhoiew478923'},
// 	{name: 'Milana', userName: 'Mila', password: 'kjdshf7ae7'},
// 	{name: 'Uliana', userName: 'Ula', password: '7843ryiufsdhc'},
// 	{name: 'Maria', userName: 'Mary', password: '873yriedh'},
// 	{name: 'Kateryna', userName: 'Kat', password: 'kdjfuo'}
// ]
// console.log(user[0].password);
// console.log(user[1].password);
// console.log(user[2].password);
// console.log(user[3].password);
// console.log(user[4].password);
// console.log(user[5].password);
// console.log(user[6].password);
// console.log(user[7].password);
// console.log(user[8].password);
// console.log(user[9].password);

//
// Логічні розгалуження:
// 	- Є змінна х, якій ви надаєте довільне числове значення.
// 	Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// 	Перевірте  скрипт при a, що дорівнює 1, 0, -3
// 	let x=-3
// 	if (x===0) {console.log('false');} else console.log('true');


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).
// let time=prompt('input time');
// if (0<=time && time<=15) {
// 	console.log('1st quarter');} else if (time>15 && time<= 30) {
// 	console.log('2d quarter');} else if (time>30 && time<=45) {
// 	console.log('3d quarter');} else console.log('4th quarter');

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
// let day=prompt('input date');
// if (0<day && day<=10) {
// 	console.log('1st part');} else if (day>10 && day<= 20) {
// 	console.log('2d part');} else console.log('3d part');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let sch=prompt('input day #');
// switch (sch) {
// 	case '1':
// 		console.log('Moday schedule'); break;
// 	case '2':
// 		console.log('Tuesday schedule'); break;
// 	case '3':
// 		console.log('Wednesday schedule'); break;
// 	case '4':
// 		console.log('Thursday schedule'); break;
// 	case '5':
// 		console.log('Friday schedule'); break;
// 	case '6':
// 	case '7':
// 		console.log('weekend'); break;
// }

// 	- Користувач вводить або має два числа.
// 		Потрібно знайти та вивести максимальне число з тих двох .
// 		Також потрібно врахувати коли введені рівні числа.
// let x1=+prompt('input 1st number');
// let x2=+prompt('input 2d number');
// if (x1>x2) {
// 	console.log(x1);} else if (x1<x2) {
// 	console.log(x2);} else console.log('they are equal');

// 	- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// 		за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// 		(хибноподібні, тобто приводиться до false)
// let x=0;
// if (x===0||x ===''||x===undefined||x ===null) {x = 'default'; console.log(x);} else console.log(x);

// 	- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
// 	кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
	{title: 'JavaScript Complex', monthDuration: 5},
	{title: 'Java Complex', monthDuration: 6},
	{title: 'Python Complex', monthDuration: 6},
	{title: 'QA Complex', monthDuration: 4},
	{title: 'FullStack', monthDuration: 7},
	{title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5) {
	console.log(coursesAndDurationArray[1].title, '-Супер!');}
if (coursesAndDurationArray[1].monthDuration>5) {
	console.log(coursesAndDurationArray[2].title, '-Супер!');}
if (coursesAndDurationArray[2].monthDuration>5) {
	console.log(coursesAndDurationArray[1].title, '-Супер!');}
if (coursesAndDurationArray[3].monthDuration>5) {
	console.log(coursesAndDurationArray[3].title, '-Супер!');}
if (coursesAndDurationArray[4].monthDuration>5) {
	console.log(coursesAndDurationArray[4].title, '-Супер!');}
if (coursesAndDurationArray[5].monthDuration>5) {
	console.log(coursesAndDurationArray[5].title, '-Супер!');}
