// // - створити блок,
// // - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
// let block=document.createElement('div');
// block.innerText='Happy New Year';
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// block.style.width='300px';
// block.style.textAlign='center';
// block.style.fontSize ='24px';
// block.style.background='darkgreen';
// block.style.color='red';
// document.body.appendChild(block);

// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let array1=['Main','Products','About us','Contacts'];
// let Ul=document.createElement('ul');
// document.body.appendChild(Ul);
//     for (let element of array1) {
//         let li=document.createElement('li');
//         li.innerText=element;
//         Ul.appendChild(li);
// }

// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (let elements of coursesAndDurationArray) {
//     let div= document.createElement('div');
//     div.style.width='300px';
//     div.style.height = '50px';
//     div.innerText=elements.title+' - '+elements.monthDuration+' month';
//     document.body.appendChild(div);
// }

// //     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// // з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// for (let elements of coursesAndDurationArray) {
//     let div= document.createElement('div');
//     div.classList.add('item');
//     let h1= document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText=elements.title;
//     let p=document.createElement('p');
//    p.classList.add('description');
//    p.innerText=elements.monthDuration;
//    div.append(h1, p);
//     document.body.appendChild(div);
// }

// // - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// //     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// for (let person of simpsons) {
//     let member=document.createElement('div');
//     member.classList.add('member');
//     member.style.width='300px';
//     let h2=document.createElement('h2');
//     h2.innerText=person.name+' '+person.surname+', '+person.age+' years';
//     let p=document.createElement('p');
//     p.innerText=person.info;
//     let img=document.createElement('img');
//     img.setAttribute('src', person.photo);
//     member.append(h2, p, img);
//     document.body.appendChild(member);
// }

// //     Цикл в циклі
// // - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// // властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// for (let course of coursesArray){
//     let block=document.createElement('div');
//     block.style.width='50%';
//         let h1=document.createElement('h1');
//             h1.classList.add('box');
//             h1.innerText=course.title;
//             h1.style.textAlign='center';
//             h1.style.borderColor='darkgray';
//         let blockBox=document.createElement('div');
//             blockBox.classList.add('box');
//             blockBox.style.display='flex';
//             blockBox.style.justifyContent='space-between';
//             let box1=document.createElement('div');
//                 box1.innerText='lasts '+course.monthDuration+' month';
//                 box1.style.width='30%';
//                 box1.style.textAlign='center';
//                 box1.style.background='gray';
//             let box2=document.createElement('div');
//                 box2.innerText=course.hourDuration+' hours';
//                 box2.style.width='60%';
//                 box2.style.background='gray';
//                 box2.style.textAlign='center';
//             blockBox.append(box1, box2);
//         let blockModules=document.createElement('ul');
//             blockModules.innerText='Modules:';
//             blockModules.classList.add('box');
//             blockModules.style.border='gray';
//             blockModules.style.display='block';
//             for (let each of course.modules){
//                 let module=document.createElement('li');
//                 module.innerText=each;
//                 blockModules.appendChild(module);
//             }
//     block.append(h1, blockBox, blockModules);
//    document.body.appendChild(block);
//
// }

// //- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
// // на кнопку зникав елемент з id="text".
//     let button = document.getElementById('del');
//     button.onclick=function (){
//         document.getElementById('text').remove()
//     }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let button=document.getElementById('check');
console.log(button);
let i1=document.getElementById('in');

button.onclick=function () {
        if (i1.value < 18){
        document.write ('Продаж алкоголю неповнолітнім заборонено');
    } else {document.write('Welcome')}};

