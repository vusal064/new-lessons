//1---------------------

function numberX2(number) {
  return number.map((num) => num * 2);
}
console.log(numberX2([1, 2, 3, 4]));

//2---------------------

function evenNumbers(even) {
  return even.filter((num) => num % 2 === 0);
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

//3----------------------

function negativeNumber(number) {
  return number.some((num) => num < 0);
}
console.log(negativeNumber([1, 3, -2, 5]));
//4----------------------
function positiveNumber(number) {
  return number.every((num) => num > 0);
}
console.log(positiveNumber([2, 4, 6, 8]));
//5----------------------
function frstNumber(number) {
  return number.find((num) => num > 10);
}
console.log(frstNumber([1, 4, 21, 80]));

//6----------------------
function Word(Words, word) {
  return Words.includes(word);
}
console.log(Word(["js", "html", "css"], "html"));
//7-----------------------
function reverseArray(word) {
  return word.reverse();
}
console.log(reverseArray([1, 2, 3, 4]));
//8-----------------------
function rowNumber(number) {
  return number.sort((a, b) => a - b);
}
console.log(rowNumber([5, 1, 8, 3]));

//9-------------------------
const myNewArr = ["salam", "sagol", 7];

function changeWordToUpperCase(arr) {
  return arr.map((item) =>
    typeof item === "string" ? item.toUpperCase() : item
  );
}

const result = changeWordToUpperCase(myNewArr);

console.log(result);

//10----------------------
function longWords(word) {
  return word.filter((word) => word.length > 5);
}
console.log(longWords(["agac", "masin", "Azerbaycan"]));

//11----------------------
function fondWord(word) {
  return word.includes("Azerbaycan");
}
console.log(fondWord(["Turkiye", "Azerbaycan", "Gurcustan"]));

//12--------------------------
function Strings(word) {
  return word.every((word) => typeof word === "string");
}
console.log(Strings(["masin", "avtobus", "moto"]));

//13----------------------
function firstOdd(number) {
  return number.find((num) => num % 2 !== 0);
}
console.log(firstOdd([2, 4, 7, 8]));

//14-----------------------
function numbersToStrings(number) {
  return number.map((num) => num.toString());
}
console.log(numbersToStrings([1, 2, 3]));

//15------------------------
function remove(word) {
  return word.filter((item) => item !== null && item !== undefined);
}
console.log(remove([1, null, 2, undefined, 3]))

//16------------------------
function NamesAndAges(persons) {
  return persons.filter((people) => people.age > 18).map((people) => people.name)
}
console.log(
  NamesAndAges([
    { name: "Tural", age: 17 },
    { name: "Vusal", age: 20 },
    { name: "Elsen", age: 25 },
  ])
)

//17------------------------
function hugeThree(number) {
  return number.sort((a, b) => b - a).slice(0, 3)
}
console.log(hugeThree([10, 3, 45, 6, 22, 100]))

//18-------------------------
function upperLongWord(longWord) {
  return longWord
    .map((word) => word.toUpperCase())
    .filter((word) => word.length > 5);
}
console.log(upperLongWord(["televizor", "utu", "avtobus"]))
//19-------------------------
function evenNumbers(number) {
  return number.sort((a, b) => a - b).filter((num) => num % 2 === 0)
}
console.log(evenNumbers([9, 2, 3, 6, 10]))

//20--------------------------
function activeUsers(users) {
  return users.filter((item) => item.active).map((item) => item.name)
}
console.log(
  activeUsers([
    { name: "Tural", active:true },
    { name: "Vusal", active:false },
    { name: "Elsen", active:true },
  ])
)
