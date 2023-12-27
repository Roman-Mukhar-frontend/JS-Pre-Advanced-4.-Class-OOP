// Завдання 1.
// Реалізуйте клас Worker(Працівник), який буде мати такі властивості: firstName(ім'я), secondName (прізвище), rate(ставка за день роботи), days(кількість відпрацьованих днів). Також клас повинен мати метод getSalary(), який буде виводити зарплату працівника. Зарплата - це множення ставки rate на кількість відпрацьованих днів days.
// Ось так повинен працювати наш клас:
// const worker = new Worker('Ivan', 'Ivanov', 10, 31);
// console.log(worker.name); // виведе 'Ivan'
// console.log(worker.surname); //виведе 'Ivanov'
// console.log(worker.rate); //виведе 10
// console.log(worker.days); //виведе 31
// console.log(worker.getSalary()); //виведе 310 - тобто 10*31
// За допомогою нашого класу створіть двох робочих і знайдіть суму їх зарплат. Використовує cучасний class.

class Worker{
    constructor(firstName, secondName, rate, days){
        this.name = firstName;
        this.surname = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days
    }
}
let worker1 = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
console.log(`Зарплата працівника ${worker1.name} ${worker1.surname} = ${worker1.getSalary()}$`);

let worker2 = new Worker('Petro', 'Petriv', 9, 28);
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.rate);
console.log(worker2.days);
console.log(`Зарплата працівника ${worker2.name} ${worker2.surname} = ${worker2.getSalary()}$`);

// Завдання 2.
// Реалізуйте клас MyString, який матиме наступні методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(), який параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної та метод ucWords(), який приймає рядок і робить капіталізації першої літери кожного слова цього рядка. Використовує cучасний class.
// Наш клас повинен працювати так:
// const str = new MyString();
// console.log(str.reverse('IVAN')); //виведе 'NAVI'
// console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
// console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

class MyString{
    constructor(str){
        this.str = str;
    }
    reverse(str){
        return str.split("").reverse().join("");
    }
    ucFirst(str){
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str){
        return str.replace(/(^|\s)\S/g, function (firstLet) {
            return firstLet.toUpperCase();
          });
    }
}

let str = new MyString();
console.log(str.reverse('IVAN')); //виведе 'NAVI'
console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

// Завдання 3.
// Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off(). Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина, які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний. Використовує cучасний class.

class CoffeeMake{
    constructor(model, devicePower){
        this.model = model;
        this.devicePower = devicePower;
    }
    on(){
        return `CoffeeMake ${this.model} is on, power value = ${this.devicePower} Watt`
    }
    off(){
        return `CoffeeMake ${this.model} is off`
    }
}
// DripCoffeeMaker
class DripCoffeeMaker extends CoffeeMake{
    constructor(model, devicePower, sugar){
        super(model, devicePower);
        this.sugar = sugar;
    }
    addSugar(){
        return `You added ${this.sugar}g of sugar`
    }
}
// HornCoffeeMaker
class HornCoffeeMaker extends CoffeeMake{
    constructor(model, devicePower, milk){
        super(model, devicePower);
        this.milk = milk;
    }
    addMilk(){
        return `You added ${this.milk}g of milk`
    }
}
// CoffeeMachine
class CoffeeMachine extends CoffeeMake{
    constructor(model, devicePower, capacity){
        super(model, devicePower);
        this.capacity = capacity;
    }
    drinkSize(){
        return `You chose drink size: ${this.capacity}`
    }
}
let drip = new DripCoffeeMaker('Philips', 2000, 20);
console.log(drip);
console.log(drip.on());
console.log(drip.off());
console.log(drip.addSugar());


let horn = new HornCoffeeMaker('Samsung', 3000, 50);
console.log(horn);
console.log(horn.on());
console.log(horn.off());
console.log(horn.addMilk());


let cofMach = new CoffeeMachine('Delonghi', 1500, 'L');
console.log(cofMach);
console.log(cofMach.on());
console.log(cofMach.off());
console.log(cofMach.drinkSize());

