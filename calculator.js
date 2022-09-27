const calculator = {
    add: (a, b) => {
      if (typeof a !== "number" || typeof b !== "number") {
        return null;
      } else {
        return a + b;
      }
    },
    sub: (a, b) => {
      if (typeof a !== "number" || typeof b !== "number") {
        return null;
      } else {
        return a - b;
      }
    },
    mul: (a, b) => {
      if (typeof a !== "number" || typeof b !== "number") {
        return null;
      } else {
        return a * b;
      }
    },
    div: (a, b) => {
      if (typeof a !== "number" || typeof b !== "number") {
        return null;
      } else {
        return a / b;
      }
    }
};

module.exports = calculator;

    