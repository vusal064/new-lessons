// // let input = prompt("Eded daxil edin:")

// // function isOdd(num){
// //     if(Number(num)%2==0){
// //         console.log("even")
// //     } else if(Number(num)%2==1) {
// //         console.log("odd")
// //     }
// // }

// // isOdd(input)

// // 1-----------------------------
// function getWordLength(word=""){
//     return word.length
// }

// console.log(getWordLength("cut"))

// // 2-------------------------------

// function getWordUpper(word="") {
//   return word.toUpperCase()
// }

// console.log(getWordUpper("salam"))

// // 3--------------------------------

// function getWordLower(word="") {
//   return word.toLowerCase()
// }

// console.log(getWordLower("SALAM"))

// // 4---------------------------------

// function frstWordCapitalize(word="") {
//     return word.charAt(0).toUpperCase() + word.slice(1)
// }

// console.log (frstWordCapitalize("salam"))

// // 6------------------------------------
// function firstIndexOf(word, index) {
//   return word.indexOf(index)
// }

// console.log(firstIndexOf("salam", "m"))

// // 7-------------------------------------
// function replace(word="") {
//   return word.replaceAll(" ", "-")
// }

// console.log(replace("salam hamiya"))

// // 9--------------------------------------
// function lastTwoLetter(letter) {
//   return letter.slice(-2)
// }

// console.log(lastTwoLetter("vusal"))

// // 10-------------------------------------

// function startWith(word="") {
//   return word.startsWith("salam hamiya")
// }

// console.log(startWith("salam hamiya"))

// // 11-------------------------------------

// function includeJS(word="") {
//   return word.includes("js");
// }

// console.log(includeJS("i love js"))

// // 12-------------------------------------

// function FourLetter(word="") {
//   return word.slice(0, 4);
// }

// console.log(FourLetter("Salam"))

// // 13---------------------------------------
// // function combineStrings(word1, word2) {
// //   return word1.concat ("", word2);
// // }

// // console.log(combineStrings("salam", "hamiya"))

// // 5-----------------------------------------

// // 8-----------------------------------------

// // 14----------------------------------------

// // 15----------------------------------------

// // function newUser( fullName, age, status) {
// //   return {
// //     fullName:fullName,
// //     age: age,
// //     status: status == "employed" ? "isi var" : "isi yoxdur"
// //   }
// // }

// // let user = newUser("Vüsal Abbasov", 21, "unemployed")
// // console.log(user)

// function sumNumbers(number) {
//   let sum = 0;
//   number.map((num) => {
//     sum += num;
//   });
//   return sum;
// }

// console.log(sumNumbers([1, 2, 3, 4, 5, 6]));

//1---------------------

// function numberX2(number) {
//   return number.map((num) => num * 2);
// }
// console.log(numberX2([1, 2, 3, 4]));

// //2---------------------

// function evenNumbers(even) {
//   return even.filter((num) => num % 2 === 0);
// }
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// //3----------------------

// function negativeNumber(number) {
//   return number.some((num) => num < 0);
// }
// console.log(negativeNumber([1, 3, -2, 5]));
// //4----------------------
// function positiveNumber(number) {
//   return number.every((num) => num > 0);
// }
// console.log(positiveNumber([2, 4, 6, 8]));
// //5----------------------
// function frstNumber(number) {
//   return number.find((num) => num > 10);
// }
// console.log(frstNumber([1, 4, 21, 80]));

// //6----------------------
// function Word(Words, word) {
//   return Words.includes(word);
// }
// console.log(Word(["js", "html", "css"], "html"));
// //7-----------------------
// function reverseArray(word) {
//   return word.reverse();
// }
// console.log(reverseArray([1, 2, 3, 4]));
// //8-----------------------
// function rowNumber(number) {
//   return number.sort((a, b) => a - b);
// }
// console.log(rowNumber([5, 1, 8, 3]));

// //9-------------------------
// const myNewArr = ["salam", "sagol", 7];

// function changeWordToUpperCase(arr) {
//   return arr.map((item) =>
//     typeof item === "string" ? item.toUpperCase() : item
//   );
// }

// const result = changeWordToUpperCase(myNewArr);

// console.log(result);

// //10----------------------
// function longWords(word) {
//   return word.filter((word) => word.length > 5);
// }
// console.log(longWords(["agac", "masin", "Azerbaycan"]));

// //11----------------------
// function fondWord(word) {
//   return word.includes("Azerbaycan");
// }
// console.log(fondWord(["Turkiye", "Azerbaycan", "Gurcustan"]));

// //12--------------------------
// function Strings(word) {
//   return word.every((word) => typeof word === "string");
// }
// console.log(Strings(["masin", "avtobus", "moto"]));

// //13----------------------
// function firstOdd(number) {
//   return number.find((num) => num % 2 !== 0);
// }
// console.log(firstOdd([2, 4, 7, 8]));

// //14-----------------------
// function numbersToStrings(number) {
//   return number.map((num) => num.toString());
// }
// console.log(numbersToStrings([1, 2, 3]));

// //15------------------------
// function remove(word) {
//   return word.filter((item) => item !== null && item !== undefined);
// }
// console.log(remove([1, null, 2, undefined, 3]))

// //16------------------------
// function NamesAndAges(persons) {
//   return persons.filter((people) => people.age > 18).map((people) => people.name)
// }
// console.log(
//   NamesAndAges([
//     { name: "Tural", age: 17 },
//     { name: "Vusal", age: 20 },
//     { name: "Elsen", age: 25 },
//   ])
// )

// //17------------------------
// function hugeThree(number) {
//   return number.sort((a, b) => b - a).slice(0, 3)
// }
// console.log(hugeThree([10, 3, 45, 6, 22, 100]))

// //18-------------------------
// function upperLongWord(longWord) {
//   return longWord
//     .map((word) => word.toUpperCase())
//     .filter((word) => word.length > 5);
// }
// console.log(upperLongWord(["televizor", "utu", "avtobus"]))
// //19-------------------------
// function evenNumbers(number) {
//   return number.sort((a, b) => a - b).filter((num) => num % 2 === 0)
// }
// console.log(evenNumbers([9, 2, 3, 6, 10]))

// //20--------------------------
// function activeUsers(users) {
//   return users.filter((item) => item.active).map((item) => item.name)
// }
// console.log(
//   activeUsers([
//     { name: "Tural", active:true },
//     { name: "Vusal", active:false },
//     { name: "Elsen", active:true },
//   ])
// )

//16-------------------------- filter 18> and map (item.name)
//20-------------------------- filter item.active and map (item.name)

// ----------- TASK ----------------

// //1-----------------------------
// function returnIndex(arr,index){
//   return arr[index];
// }
// console.log (returnIndex([1,2,3,4,5],3));

// //2------------------------------
// function sliceElement(number){
//   return number.slice(3)
// }

// console.log(sliceElement([1,2,3,4,5,6]))

// //3--------------------------------
// function removeItem(arr, b){
//   return arr.filter(item => item !==b)
// }

// console.log (removeItem([1,2,3,4,5],3));

// //4---------------------------------
// function getEvenNumber(arr){
//   return arr.filter(item => item < 0)
// }

// console.log (getEvenNumber([1,-2,3,-4,5]));
// //5---------------------------------
// function avarageNumber(num){
//   const total = num.reduce((acc, val) => {
//     return acc + val
//   }, 0)
//   return total / num.length
// }

// console.log(avarageNumber([10,100,40]))

// //6---------------------------------
// let numString = "42"
// let num  = Number(numString)
// console.log(num)

// let boolString = "true"
// let booleanValue = (boolString === "true")
// console.log(boolString)

// let mixedArray = ["123", "456", "789"]
// let numberArray = mixedArray.map(Number)
// console.log(numberArray)

// let nullValue = null;
// let BooleanValue = Boolean(nullValue)
// console.log(BooleanValue)

//7---------------------------------------
//TYPEOF
// let sample1 = NaN
// console.log(typeof sample1)

// let sample2 = [1, 2, 3]
// console.log(typeof sample2)

// let sample3 = "";
// console.log(typeof sample3)

// let sample4 = 0;
// console.log(typeof sample4)

// let sample5 = {name: "John"};
// console.log(typeof sample5)

//instanceof

// let inputs = document.querySelectorAll(".enterNumber");
// let button = document.querySelector(".sumClick");
// let sumBox = document.querySelector(".sum");

// button.addEventListener("click", () => {

// });

let input = document.querySelector(".inpt");
let result = document.querySelector(".text");

input.addEventListener("keyup", () => {
  result.textContent = "netice: " + input.value;
});
