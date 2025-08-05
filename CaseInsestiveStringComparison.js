function areStringsEqual(str1, str2) {
  // Convert both strings to lowercase for case-insensitive comparison
  return str1.toLowerCase() === str2.toLowerCase();
}

// Function call
console.log(areStringsEqual("Hello", "hello"));   // true
console.log(areStringsEqual("WORLD", "World"));   // true
console.log(areStringsEqual("Test", "Taste"));    // false
