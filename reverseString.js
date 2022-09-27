function reverseString(string) {
    let arr = Array.from(string);
    const n = arr.length;
    let result = [];
    for (let i = 0; i < n; i++) {
      let letter = arr.pop([]);
      result.push(letter);
    }
    return result.join("");
  }

  module.exports = reverseString;

