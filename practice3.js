// Given a roman numeral, convert it to an integer.

// function convertToInteger(str) {
//     var roman = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     };
//     var total = 0;
//     var prev = 0;
//     for (var i = str.length - 1; i >= 0; i--) {
//         var current = roman[str[i]];
//         total += current;
//         if (current < prev) {
//             total -= 2 * current;
//         }
//         prev = current;
//     }
//     return total;
// }

// function abc(number) {
//     var sum = 0;
//     for (var i = 0; i <= number; i++) {
//         sum += i;
//     }
//     console.log(sum);
//     return sum + 10;
// }

// output = abc(2) + abc(3);
// console.log(output);

function looping(x, y) {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            console.log(i * j);
        }
    }
    return x * y;
}
z = looping(2, 3);
console.log(z);

// Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.

function array255() {
    var array = [];
    for (var i = 0; i < 256; i++) {
        array.push(i);
    }
    return array;
}

// Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
function sumEven() {
    var sum = 0;
    for (var i = 0; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}