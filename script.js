function capitilize(word) {
  const myArray = Array.from(word);
  const firstLetter = myArray.shift([0]);
  firstLetter.toString();
  const firstLUppercase = firstLetter.toUpperCase();
  myArray.unshift(firstLUppercase);
  return myArray.join("");
}

module.exports = capitilize;