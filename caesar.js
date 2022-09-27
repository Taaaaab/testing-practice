function caesarCipher(string) {
    let arr = Array.from(string);
    const copy = [];
    
    arr.forEach(function (str) {
    copy.push(String.fromCharCode(str.charCodeAt(str.length - 1) + 1))
    });
    return copy.join('');
};

module.exports = caesarCipher;
