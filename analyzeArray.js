const object = analyzeArray([1, 8, 3, 4, 2, 6]);

function analyzeArray(myArray) {
  const length = myArray.length;
  let result = [];
  function sum(myArray) {
    const initialValue = 0;
    const sumWithInitial = myArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    return sumWithInitial;
  }
  const average = sum(myArray) / length;

  function min(myArray) {
    let minArray = myArray.sort(function (a, b) {
      return a - b;
    });
    return minArray[0];
  }
  const minNum = min(myArray);

  function max(myArray) {
    let maxArray = myArray.sort(function (a, b) {
      return b - a;
    });
    return maxArray[0];
  }
  const maxNum = max(myArray);

  return {average: average,
    min: minNum,
    max: maxNum,
    length: length};
}

module.exports = analyzeArray;
