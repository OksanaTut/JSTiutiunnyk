// // // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
//
// let user1=new User(111, 'ivan', 'ivanov', 'jfhf', '574765678');
// let user2=new User(112, 'kolia', 'baranov', 'jlhgl', '65969');
// let user3=new User(113, 'petia', 'tkachuk', 'kjyt6', '867958654');
// let user4=new User(114, 'vasia', 'papanov', 'g87', '32565');
// let user5=new User(115, 'ulia', 'zudenko','' , '087658674');
// let user6=new User(116, 'fedia', 'kuganov', 'liugl', 'o8765476534');
// let user7=new User(117, 'lusia', 'karpachov', '897t9gyu', '7865679');
// let user8=new User(118, 'ilia', 'serdiuk', '80yg9yu', '86976');
// let user9=new User(119, 'igor', 'timchuk', 'khgfk', '432475');
// let user10=new User(120, 'vovchik', 'vozniuk', 'jf98oiuhf', '98070987');
// let users=[user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// console.log(users);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let evenUsers=users.filter(user =>user.id%2==0)
// console.log(evenUsers);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort) // в масиві вони
// // і так по зростанню, тому роблю по зменьшенню//
// let sortedUsers=users.sort((u1, u2)=>u2.id-u1.id);
// console.log(sortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
let clients=[];
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }
}

clients.push(new Client(115, 'ulia', 'zudenko','' , '087658674',['tom', 'pot', 'cuc']));
clients.push(new Client(111, 'ivan', 'ivanov', 'jfhf', '574765678',['tom', 'pot', 'cuc', 'app']));
clients.push(new Client(117, 'lusia', 'karpachov', '897t9gyu', '7865679',['tom', 'pot']));
clients.push(new Client(112, 'kolia', 'baranov', 'jlhgl', '65969',['tom', 'pot']));
clients.push(new Client(118, 'ilia', 'serdiuk', '80yg9yu', '86976',['tom', 'pot']));
clients.push(new Client(116, 'fedia', 'kuganov', 'liugl', 'o8765476534',['tom']));
clients.push(new Client(113, 'petia', 'tkachuk', 'kjyt6', '867958654',['tom', 'app', 'pean','pot']));
clients.push(new Client(119, 'igor', 'timchuk', 'khgfk', '432475',['tom', 'corn','grape','pot']));
clients.push(new Client(120, 'vovchik', 'vozniuk', 'jf98oiuhf',['tom', 'cuc', 'grape','pot']));
clients.push(new Client(114, 'vasia', 'papanov', 'g87', '32565',['tom', 'pot']));
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по
// зростанню. (sort)
// console.log(clients[5].order.length);
// console.log(clients[3].order);
// console.log(clients[5].order.length>clients[7].order.length);
// let sortedClients = clients.sort((c1, c2) => {
//         return c1.order.length - c2.order.length
//     });
//
// console.log(sortedClients);

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, manufacturer, year, maxSpeed, engineV){
//     this.model=model;
//     this.manufacturer=manufacturer;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
//     this.engineV=engineV;
//     this.drive=function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
//     }
//     this.info=function (car){
//         console.log(
//     `модель - ${this.model},
//      виробник - ${this.manufacturer},
//      рік випуску - ${this.year},
//      максимальна швидкість - ${this.maxSpeed},
//      об'єм двигуна - ${this.engineV}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         return this.maxSpeed=maxSpeed+newSpeed}
//     this.changeYear = function (newValue){
//         return this.year=newValue
//     }
//     driver =function (car, driver){
//        return car.driver=driver
//     }
// }
// car1=new Car('forza', 'zaz', 2013, 160, 1.3);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// console.log(car1.maxSpeed);
// car1.changeYear(2017);
// console.log(car1.year);
// let driver1 = {name: 'vasya', age:40, category:'a,b,c', expiriense:15}
// console.log(driver(car1, driver1));
// console.log(car1);

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car{
//     constructor(model, manufacturer, year, maxSpeed, engineV){
//     this.model=model;
//     this.manufacturer=manufacturer;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
//     this.engineV=engineV;}
//     drive=function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
//     }
//     info=function (car){
//         console.log(
//             `модель - ${this.model},
//      виробник - ${this.manufacturer},
//      рік випуску - ${this.year},
//      максимальна швидкість - ${this.maxSpeed},
//      об'єм двигуна - ${this.engineV}`);
//     }
//     increaseMaxSpeed = function (newSpeed){
//         return this.maxSpeed=this.maxSpeed+newSpeed}
//     changeYear = function (newValue){
//         return this.year=newValue
//     }
//     driver(driver) {
//         return this.driver=driver;
//     }
// }
// car1=new Car('forza', 'zaz', 2013, 160, 1.3);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);;
// console.log(car1.maxSpeed);
// car1.changeYear(2017);
// console.log(car1.year);
// let driver1 = {name: 'vasya', age:40, category:'a,b,c', expiriense:15}
// car1.driver(driver1);
// console.log(car1.driver);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
