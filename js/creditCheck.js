// exports.creditCheck = function(str) {
// }

// Take in str and split into individual numbers
// reverse the string
// double every other number
// if the doubled number is over 10,split and add them together
// add all digits
//if total moddulo 10 equals 0 then number is valid

const creditCheck = function (str) {
    const digits = str
        .split("")
        .reverse()
        .map(Number)
        .map((elem, ind) => {
            if (ind % 2 != 0) {
                return elem * 2;
            } else {
                return elem;
            }
        })
        .map((elem) => {
            if (elem >= 10) {
                return elem
                    .toString()
                    .split("")
                    .map(Number)
                    .reduce((a, b) => a + b);
            } else {
                return elem;
            }
        })
        .reduce((a, b) => a + b);
    if (digits % 10 == 0) {
        console.log("The number is valid!");
        return true;
    } else {
        console.log("The number is invalid!");
        return false;
    }
};

