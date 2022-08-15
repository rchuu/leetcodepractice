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