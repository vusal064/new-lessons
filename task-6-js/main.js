// TAPSIRIQ 1.1
// 1----------------------------------
// let NumString='42';
// let NumberValue = Number(NumString);
// console.log(NumberValue);
// // 2----------------------------------
// let boolString = "true";
// let boolean=Boolean(boolString);
// console.log(boolean);
// // 3----------------------------------
// let mixedArray = ["123", "456", "789"];
// let ArrayNumber = mixedArray.map(Number);
// console.log(ArrayNumber);
// // 4----------------------------------
// let nullValue = null;
// let nullBoolean = Boolean(nullValue);
// console.log(nullBoolean);
// // TAPSIRIQ 1.2
// // 1---------------------------------
// let nan = NaN;
// let array = [1, 2, 3];
// let string = "";
// let number = 0;
// let name1 = {name: "John"};
// console.log(typeof nan);
// console.log(typeof array);
// console.log(typeof string);
// console.log(typeof number);
// console.log(typeof name1);
// console.log(array instanceof Array);
// console.log(string instanceof Object);
// console.log(number instanceof Array);
// console.log(name1 instanceof Object);
// console.log(Array.isArray(array));
// console.log(Array.isArray(number));
// // TAPSIRIQ 2.1
// // 1-----------------------------------
// // let text = "   JavaScript is awesome   ";
// // let trimmited=text.trim();
// // console.log(trimmited);

// // let text = "   JavaScript is awesome   ";
// // let upperText = text.toUpperCase();
// // console.log(upperText);

// // let text = "   JavaScript is awesome   ";
// // let replace = text.replace("is","was");
// // console.log(replace);

// // let text = "JavaScript is awesome";
// // let split = text.split(" ")
// // console.log(split);

// // let text = "   JavaScript is awesome   ";
// // let length = text.length;
// // console.log(length);

// // TAPSIRIQ 2.2
// // ?

// // TAPSIRIQ 3.1
// function ArrayNumbers(arr){
//     return arr.filter(item => item % 2 === 0);
// }
// console.log(ArrayNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function MathArray(arr){
//     return arr.map(item => item *3);
// }
// console.log(MathArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// // BURDA BASA DUSMEDIM KUBUN NECE TAPIRLAR
// function reduceArray(arr){
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(reduceArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// // QALAN 2 SIN BILMEDIM


// TAPSIRIQ 3.2
// let students = [
//     {id: 1, name: "Aygün", grades: [85, 90, 92]},
//     {id: 2, name: "Elçin", grades: [75, 85, 88]},
//     {id: 3, name: "Nigar", grades: [95, 88, 91]},
//     {id: 4, name: "Orxan", grades: [70, 65, 72]}
// ];
// function gradesArray(arr){
//     const sum = arr.reduce((sum, num) => sum + num, 0);
//     const total = sum/arr.length;
//     return total = students
// }
// console.log(gradesArray());

// TAPSIRIQ 4
// EDE BILMEDIM


// TAPSIRIQ 5
function tekVeyaCut(reqem) {
  if (reqem % 2 === 0) {
    return "Cüt rəqəmdir";
  } else {
    return "Tək rəqəmdir";
  }
}
console.log(tekVeyaCut(7)); 


function enBoyukEded(a, b, c) {
  return Math.max(a, b, c);
}
console.log(enBoyukEded(10, 25, 17));

function seasonn(ay) {
  if (ay >= 3 && ay <= 5) {
    return "yaz";
  } else if (ay >= 6 && ay <= 8) {
    return "yay";
  } else if (ay >= 9 && ay <= 11) {
    return "payiz";
  } else if (ay === 12 || ay === 1 || ay === 2) {
    return "qiş";
  } else {
    return "sehv ay";
  }
}
console.log(seasonn(10));