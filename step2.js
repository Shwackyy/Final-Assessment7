//sum zero
function sumZero(param) {
    for (let a = 0; a < param.length; a++) {
      for (let b = 0; b < param.length; b++) {
        if (param[a] + param[b] === 0) {
          return true;
        }
      }
    }
    return false;
  }
  console.log(sumZero([1, 12, 3, -12]));
  //time complexity: O(n^2)
  //space complexity: O(n)
  
  //unique characters
  function uniqueCharacters(param) {
    for (let a = 0; a < param.length; a++) {
      for (let b = 0; b < param.length; b++) {
        if (a !== b && param[a] === param[b]) {
          return false;
        }
      }
    }
    return true;
  }
  console.log(uniqueCharacters("moonday"));
  //time complexity: O(n^2)
  //space complexity: O(n)
  
  //pangram sentence
  function pangramSentence(param) {
    let alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
    for (let variable of param.toLowerCase()) {
      alphabet.delete(variable);
      if (alphabet.size == 0) {
        return true;
      }
    }
    return false;
  }
  console.log(pangramSentence("The quick brown fox jumps over the lazy dog"));
  //time complexity: O(1) because alphabet cannot be over 26 letters, otherwise O(n)
  //space complexity: O(n)
  
  //longest word
  function longestWord(param) {
    let zero = 0;
    param.forEach((word) => {
      if (word.length > zero) {
        zero = word.length;
      }
    });
    return zero;
  }
  console.log(longestWord(["hi", "hello"]));
  //time complexity: O(n)
  //space complexity: O(n)