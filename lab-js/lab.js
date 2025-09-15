// 1-----------------------------
function getWordLength(word=""){
    return word.length
}

console.log(getWordLength("cut"))

// 2-------------------------------

function getWordUpper(word="") {
  return word.toUpperCase()
}


console.log(getWordUpper("salam"))

// 3--------------------------------

function getWordLower(word="") {
  return word.toLowerCase()
}


console.log(getWordLower("SALAM"))  

// 4---------------------------------


function frstWordCapitalize(word="") {
    return word.charAt(0).toUpperCase() + word.slice(1)
}


console.log (frstWordCapitalize("salam"))

// 6------------------------------------
function firstIndexOf(word, index) {
  return word.indexOf(index)
}

console.log(firstIndexOf("salam", "m"))

// 7-------------------------------------
function replace(word="") {
  return word.replaceAll(" ", "-")
}

console.log(replace("salam hamiya"))

//8---------------------------------------
function getWord (word) {
for(let i=0; i<=word.length-1; i++){
  console.log(word[word.length-1])
}
}



getWord("Salam")

// 9--------------------------------------
function lastTwoLetter(letter) {
  return letter.slice(-2)
}

console.log(lastTwoLetter("vusal"))

// 10-------------------------------------

function startWith(word="") {
  return word.startsWith("salam hamiya")
}

console.log(startWith("salam hamiya"))

// 11-------------------------------------

function includeJS(word="") {
  return word.includes("js");
}

console.log(includeJS("i love js"))

// 12-------------------------------------

function FourLetter(word="") {
  return word.slice(0, 4);
}

console.log(FourLetter("Salam"))

// 13---------------------------------------
function combineStrings(word1, word2) {
  return word1.concat ("", word2);
}

console.log(combineStrings("salam", "hamiya"))

//14----------------------------------------

function getWord (word) {
  let reversed = ""

  for(let i = word.length-1; i>=0; i--){
    reversed=reversed+word[i]
  }
  return reversed
}

const reversedWord= getWord("Salam");
console.log(reversedWord)