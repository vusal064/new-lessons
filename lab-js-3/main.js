// 1. Ədədi array-in sonuna əlavə et (push)
function addEnd(array, num) {
  array.push(num);
  return array;
}

console.log(addEnd([1, 2, 3], 4));

// 2. Ədədi array-in əvvəlinə əlavə et (unshift)
function addStart(array, num) {
  array.unshift(num);
  return array;
}

console.log(addStart([2, 3], 1));

// 3. Sonuncu elementi sil (pop)
function removeElement(number) {
  number.pop();
  return number;
}

console.log(removeElement([1, 2, 3]));

// 4. İlk elementi sil (shift)
function removeFrstElement(number) {
  number.shift();
  return number;
}

console.log(removeFrstElement([1, 2, 3]));

// 5. Array-in müəyyən hissəsini kəs (slice)
function sliceElements(number) {
  return number.slice(1,4);
}

console.log(sliceElements([1, 2, 3, 4, 5]));

// 6. Verilən ədəd array-də varmı? (includes)
function containsNumber(array) {
  return array.includes(2);
}

console.log(containsNumber([1, 2, 3]));

// 7. Verilmiş ədədin index-i nədir? (indexOf)
function findIndex(array) {
  return array.indexOf(3);
}

console.log(findIndex([1, 2, 3]));

// 8-----------------------------

// 9. 2 array-i birləşdir (concat)
function concatArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(concatArrays([1, 2], [3, 4]));

// 10. String-ləri birləşdir (join) 
function joinWith(arr) {
  return arr.join("-");
}

console.log(joinWith(["a", "b", "c"]));

// 11. Elementləri tərsinə çevir (reverse)
function reverseArray(number) {
  return number.reverse();
}

console.log(reverseArray([1, 2, 3]));

// 12. Array-dəki ədədləri ikiqatla
function elementsX2(number) {
  return number.map((x) => x * 2);
}

console.log(elementsX2([1, 2, 3]));

// 13. Cüt ədədləri seç
function getEvenNumbers(number) {
  return number.filter((x) => x % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4]));

// 14----------------------------------

// 15----------------------------------
