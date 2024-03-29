var longestPalindrome = function (s) {
    let answer = ''; // create a variable to store the longest palindrome
    for (var i = 0; i < s.length; i++) { // iterate through the string
        for (var j = i + 1; j <= s.length; j++) { // iterate through the string again, starting at the next index of i
            if (isPalindrome(s.substring(i, j))) { // if the substring is a palindrome
                answer = Math.max(answer, s.substring(i, j)); // update the longest palindrome
            }
        }
    }
    return answer; // return the longest palindrome
}

// Write an algorithm that finds the nth root of a number without using an exponential/power built-in function

function nthRoot(n, x) {
    let answer = 0; // create a variable to store the nth root of x
    let low = 0; // create a variable to store the lower bound of the nth root of x
    let high = x; // create a variable to store the upper bound of the nth root of x
    while (low <= high) { // while the lower bound is less than or equal to the upper bound
        let mid = Math.floor((low + high) / 2); // calculate the middle of the lower and upper bounds
        if (Math.pow(mid, n) > x) { // if the middle of the lower and upper bounds is greater than x
            high = mid - 1; // update the upper bound to the middle of the lower and upper bounds minus one
        } else if (Math.pow(mid, n) < x) { // if the middle of the lower and upper bounds is less than x
            low = mid + 1; // update the lower bound to the middle of the lower and upper bounds plus one
        } else { // if the middle of the lower and upper bounds is equal to x
            answer = mid; // update the nth root of x to the middle of the lower and upper bounds
            break; // break out of the while loop
        }
    }
    return answer; // return the nth root of x
}
// write a palindrome function to determine if x is palindrome
function isPalindrome(x) {
    let answer = true; // create a variable to store the answer
    let i = 0; // create a variable to store the index of the first character of x
    let j = x.length - 1; // create a variable to store the index of the last character of x
    while (i < j) { // while the index of the first character of x is less than the index of the last character of x
        if (x[i] !== x[j]) { // if the first character of x is not equal to the last character of x
            answer = false; // update the answer to false
            break; // break out of the while loop
        }
        i++; // increment the index of the first character of x
        j--; // decrement the index of the last character of x
    }
    return answer; // return the answer
}

var isPalindrome = function (x) {
    let array = [];
    for (i in x) {
        array.push(x[i]);
    }
    for (let j = 0; j < array.length / 2; j++) {
        if (array[j] !== array[array.length - 1 - j]) {
            return false;
        }
    }
    return true;
}

// write a palindrome function to determine if x is palindrome without converting a string and negative numbers must be treated as palindromes
function isPalindrome(x) {
    let answer = true; // create a variable to store the answer
    let i = 0; // create a variable to store the index of the first character of x
    let j = x.length - 1; // create a variable to store the index of the last character of x
    while (i < j) { // while the index of the first character of x is less than the index of the last character of x
        if (x[i] !== x[j]) { // if the first character of x is not equal to the last character of x
            answer = false; // update the answer to false
            break; // break out of the while loop
        }
        i++; // increment the index of the first character of x
        j--; // decrement the index of the last character of x
    }
    return answer; // return the answer
}