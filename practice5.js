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

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

var threeSumClosest = function (nums, target) {
    nums.sort(function (a, b) { // sort the array
        return a - b; // sort the array in ascending order
    });
    var result = nums[0] + nums[1] + nums[2]; // set result to the sum of the first, second, and third elements of the array
    for (var i = 0; i < nums.length - 2; i++) { // loop through the array
        if (i > 0 && nums[i] === nums[i - 1]) { // if the current element is equal to the previous element
            continue;
        }
        var j = i + 1; // set j to i + 1
        var k = nums.length - 1; // set k to the length of the array - 1
        while (j < k) { // while j is less than k
            var sum = nums[i] + nums[j] + nums[k]; // set sum to the sum of the current element, the next element, and the last element
            if (Math.abs(sum - target) < Math.abs(result - target)) { // if the absolute value of the difference between the sum and the target is less than the absolute value of the difference between the result and the target
                result = sum; // set result to the sum
            }
            if (sum === target) { // if the sum is equal to the target
                return sum; // return the sum
            } else if (sum < target) { // if the sum is less than the target
                j++; // increment j
            } else { // if the sum is greater than the target
                k--; // decrement k
            }
        }
    }
    return result; // return the result

};