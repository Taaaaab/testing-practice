function capitilize(word) {
    const myArray = Array.from(word);
    const lower = myArray.shift([0]);
    lower.toString();
    const upper = lower.toUpperCase();
    myArray.unshift(upper);
    return myArray.join('');
  }

  module.exports = capitilize;