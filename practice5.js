// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

var threeSum = function (nums) {
    var result = []; // create an empty array to store the result
    nums.sort(function (a, b) { // sort the array
        return a - b; // sort the array in ascending order
    });
    for (var i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) { // if the current element is equal to the previous element
            continue;
        }
        var j = i + 1; // set j to i + 1
        var k = nums.length - 1; // set k to the length of the array - 1
        while (j < k) { // while j is less than k
            if (nums[i] + nums[j] + nums[k] === 0) { // if the sum of the current element, the next element, and the last element is equal to 0
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
};