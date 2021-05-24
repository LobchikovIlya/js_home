// Таски на условия
// 1) Делится ли число на 5, или на 3, или на 2 без остатка?
// const value = +prompt("Введите число ,больше нуля");
// if(value===0){
// alert('Введите  число больше нуля!!!')
// }
// if (value % 5 === 0) {
//     alert('Число ' + value + ' делится на  5 ');
// }

// if (value % 3 === 0) {
//     alert('Число ' + value + ' делится на  3 ');
// }

// if (value % 2 === 0) {
//     alert('Число ' + value + ' делится на  2 ');
// }

// *************************

// Таски на циклы (Only FOR)
// ) Вывести факториал запрошенного числа. (5!=1*2*3*4*5)

// let value = +prompt('Введите число');
// let fact = 1;
// for (let i = 1; i <= value; i++) {
//     fact *= i;

// }
// console.log(value + '!=' + fact);
// *******************************

// *вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь

// let n = +prompt('Введите число n');
// let sum = +0;
// for (i = 1; i <= n; i++) {
//     sum += 1 / i;
// }
// console.log(sum);

//*************************** */
// Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12).

// const lim1 = 4;
// const lim2 = 8;
// let mult = 1;
// for (i = 8; i >= 4; i--) {
//     mult *= i;
// }
// console.log(mult);

// Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
// const age = +prompt('Введите свой возраст ');
// isAdult(age);

// function isAdult(a) {
//     if (a < 18) {
//         return false;
//     } else return true;
}
// ***************************
//*Функция, которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)

// const value = +prompt('Введите число ');
// primeNum(value);
// let x = primeNum(value);
// mesage(x)

// function primeNum(x) {

//     for (let i = 2; i < value; i++) {
//         if (value % i === 0) return false;

//     }

//     return value > 1;
// }

// function mesage(x) {
//     if (x === true) {
//         alert('Число простое ');
//     } else alert('Не простое число')
}

// //****************************** */

// Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе:


// const num1 = +prompt('Введите первое число ');
// const num2 = +prompt('Введите второе число ');
// checkMultiplicity(num1, num2);
// let result = checkMultiplicity(num1, num2);
// getMessage(result);

// function checkMultiplicity(a, b) {
//     if (a % b === 0) {
//         return true;
//     } else return false;
// }

// function getMessage(a) {
//     if (result === true) {
//         alert('Первое число делится на второе');
//     } else alert('НЕ делится');
}



// *******************************
// Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет


// const a = +prompt('ВВедите длину стороны  А ');
// const b = +prompt('Введите длину стороны В ');
// const c = +prompt('Введите длину стороны С');
// existenceTriangles(a, b, c);

// function existenceTriangles(a, b, c) {
//   if (a + b > c && b + c > a && a + c > b) {
//   return true;
//   } else
//     return false;

// }

// *********************

//площадь трехугольника 




// const a = +prompt('ВВедите длину стороны  А ');
// const b = +prompt('Введите длину стороны В ');
// const c = +prompt('Введите длину стороны С');

// triangleArea(a, b, c);

// function triangleArea(a, b, c) {
//   const p = +0.5 * (a + b + c);
//    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   return  s;

// }


// ************
// площадь прямоугольника


// 


// *****************
// площадь паралелепипеда

// const a = +prompt('ВВедите длину стороны  А ');
// const b = +prompt('Введите длину стороны В ');
// const c = +prompt('Введите высоту стороны С');
// parallelepipedArea(a, b, c);
// let message = parallelepipedArea(a, b, c);
// getMessage(message);

// function parallelepipedArea(a, b, c) {
//   const s = 2 * ((a * b) + (b * c) + (a * c));
//   return s;

// }

// function getMessage(a) {
//   alert('Площадь равна = '+ message)
// }


// *****************************
// Таски на объекты
// 1. создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные, методы: вывод адреса, смена пола.


// const student = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   isMale: 'false',
//   adress: {
//     city: 'zaporozhie',
//     street: 'lenina',
//     home: '51',
//   },
//   tel: '0957845457',
//   outputAdress() {
//     console.log(student.adress);

//   },
//   genderReassignment() {
//     if(
//     this.isMale == 'true'){
//      this.isMale ='false'
//     }else this.isMale='true',



//   },


// }
// student.outputAdress();
// student.genderReassignment();
// // *********************************


// //  создать объект, который содержит свойства, о факультете и кафедре, методы: перевод на другой факультет.


// const university = 
// {
//   faculty: 'management',
//   chair: 'basic',
// // 

//   transferFaculty(newfaculty) {
//    return this.faculty = 'newfaculty';

//   },
// }
// university.transferFaculty();
// console.log(faculty);


// //****************************** */
// // Создать функции-конструкторы:
// // - Книга (автор, название, год издания, издательство)
// // - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)


//


// function Book(author, name, year, publishing) {
//     this.author = author;
//     this.name = name;
//     this.year = year;
//     this.publishing = publishing;
// }
// const book1 = new Book('David','javaScript','2021','Диалектика');g