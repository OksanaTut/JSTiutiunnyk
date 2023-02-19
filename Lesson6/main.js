// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let w1='hello world';
// let w2='lorem ipsum';
// let w3='javascript is cool';
// console.log(w1.length, w2.length, w3.length);
// // або
// console.log('hello world'.length);

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let w1='hello world';
// let w2='lorem ipsum';
// let w3='javascript is cool';
// console.log(w1.toUpperCase());
// console.log(w2.toUpperCase());
// console.log(w3.toUpperCase());

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let w1='HELLO WORLD';
// let w2='LOREM IPSUM';
// let w3='JAVASCRIPT IS COOL';
// console.log(w1.toLowerCase());
// console.log(w2.toLowerCase());
// console.log(w3.toLowerCase());

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.replaceAll(' ', ''));

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));
// // або
// function stringToarray(text){
//     console.log(text.split(' '));
// }
// stringToarray(str)

// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr=[10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr);
// console.log(arr.map(function (element) {
//     return element.toString();
// }));

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// // в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// // :
// let nums = [11,21,3];
// function sortNums (arr, direction){
//     if (direction==='ascending'){
//         let sort=arr.sort((a,b)=> {
//             return a - b;}
//         ); console.log(sort)
//     }
//     if (direction==='descending'){
//         let sort=arr.sort((a,b)=> {
//             return b - a;
//         });console.log(sort)
//     }
// }
// sortNums(nums, 'ascending')

// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// let md=coursesAndDurationArray.sort((a,b)=>{
//     return  b.monthDuration-a.monthDuration
// })
// console.log(md);
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let mf=coursesAndDurationArray.filter((element)=>element.monthDuration>5);
// console.log(mf);
// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let coursesNew=coursesAndDurationArray.map(function (element, index){
//     let newElement={id:index+1, title:element.title, monthDuration:element.monthDuration}; return newElement
// })
// console.log(coursesNew);

// //     описати колоду карт (від 6 до туза без джокерів)
// let cards=[
//     {cardSuit:'spades', value:'6', color:'black'},
//     {cardSuit:'spades', value:'7', color:'black'},
//     {cardSuit:'spades', value:'8', color:'black'},
//     {cardSuit:'spades', value:'9', color:'black'},
//     {cardSuit:'spades', value:'10', color:'black'},
//     {cardSuit:'spades', value:'jack', color:'black'},
//     {cardSuit:'spades', value:'queen', color:'black'},
//     {cardSuit:'spades', value:'king', color:'black'},
//     {cardSuit:'spades', value:'ace', color:'black'},
//     {cardSuit:'clubs', value:'6', color:'black'},
//     {cardSuit:'clubs', value:'7', color:'black'},
//     {cardSuit:'clubs', value:'8', color:'black'},
//     {cardSuit:'clubs', value:'9', color:'black'},
//     {cardSuit:'clubs', value:'10', color:'black'},
//     {cardSuit:'clubs', value:'jack', color:'black'},
//     {cardSuit:'clubs', value:'queen', color:'black'},
//     {cardSuit:'clubs', value:'king', color:'black'},
//     {cardSuit:'clubs', value:'ace', color:'black'},
//     {cardSuit:'heart', value:'6', color:'red'},
//     {cardSuit:'heart', value:'7', color:'red'},
//     {cardSuit:'heart', value:'8', color:'red'},
//     {cardSuit:'heart', value:'9', color:'red'},
//     {cardSuit:'heart', value:'10', color:'red'},
//     {cardSuit:'heart', value:'jack', color:'red'},
//     {cardSuit:'heart', value:'queen', color:'red'},
//     {cardSuit:'heart', value:'king', color:'red'},
//     {cardSuit:'heart', value:'ace', color:'red'},
//     {cardSuit:'diamond', value:'6', color:'red'},
//     {cardSuit:'diamond', value:'7', color:'red'},
//     {cardSuit:'diamond', value:'8', color:'red'},
//     {cardSuit:'diamond', value:'9', color:'red'},
//     {cardSuit:'diamond', value:'10', color:'red'},
//     {cardSuit:'diamond', value:'jack', color:'red'},
//     {cardSuit:'diamond', value:'queen', color:'red'},
//     {cardSuit:'diamond', value:'king', color:'red'},
//     {cardSuit:'diamond', value:'ace', color:'red'},
// ]
// // - знайти піковий туз
// console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spades'));
// // - всі шістки
// console.log(cards.filter(card => card.value === '6'));
// // - всі червоні карти
// console.log(cards.filter(card => card.color === 'red'));
// // - всі буби
// console.log(cards.filter(card => card.cardSuit === 'diamond'));
// // - всі трефи від 9 та більше
// console.log(cards.filter(card => card.cardSuit=== 'clubs'&&card.value>=9));
// //Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// let sortedCards=cards.reduce((accum,card)=>{
//     if (card.cardSuit==='diamond'){
//         accum.diamond.push(card)
//     }
//     if (card.cardSuit==='spades'){
//         accum.spades.push(card)
//     }
//     if (card.cardSuit==='clubs'){
//         accum.clubs.push(card)
//     }
//     if (card.cardSuit==='heart'){
//         accum.heart.push(card)
//     }
//     return accum;
// }, {clubs:[],diamond:[],heart:[],spades:[]});
// console.log(sortedCards);

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

// --написати пошук всіх об'єктів, в який в modules є docker
