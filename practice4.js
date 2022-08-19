// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

var removeElement = function (nums, val) {
    var i = 0;
    while (i < nums.length) {
        if (nums[i] === val) { // if the current element is equal to the value we want to remove
            nums.splice(i, 1); // remove element at index i
        } else {
            i++;
        }
    }
    return nums.length; // return the length of the array
};

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function (haystack, needle) {
    if (needle.length === 0) { // if the needle is empty, return 0
        return 0;
    }
    for (var i = 0; i < haystack.length; i++) { // loop through the haystack
        if (haystack[i] === needle[0]) { // if the first element of the haystack is equal to the first element of the needle
            var j = 0; // set j to 0
            while (j < needle.length && i + j < haystack.length && haystack[i + j] === needle[j]) { // while j is less than the length of the needle and i + j is less than the length of the haystack and the current element of the haystack is equal to the current element of the needle
                j++;
            }
            if (j === needle.length) {
                return i;
            }
        }
    }
    return -1;
};

// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)

function sum_odd_5000() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
        return sum;
    }
}

// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

var divide = function (dividend, divisor) {
    var sign = 1;
    if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) { // if the dividend is less than 0 and the divisor is greater than 0 or the dividend is greater than 0 and the divisor is less than 0
        sign = -1;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    var result = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        result++;
    }
    return sign * result;
};

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }
    var count = strs[0];
    for (var i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(count) !== 0) {
            count = count.slice(0, -1);
        }
    }
    return count;
};