// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

function twoSum(nums, target) {
    let answer = []; // create an empty array to store the indices of the two numbers that add up to target
    for (var i = 0; i < nums.length; i++) { // iterate through the array
        for (var j = i + 1; j < nums.length; j++) { // iterate through the array again, starting at the next index of i
            if (nums[i] + nums[j] === target) { // if the sum of the two numbers at the current indices is equal to target
                answer.push(i); // push the index of the first number to the answer array
                answer.push(j); // push the index of the second number to the answer array
            }
        }
    }
    return answer;
}

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function addTwoNumbers(l1, l2) {
    let answer = new ListNode(0); // create a new ListNode to store the sum of the two numbers
    let current = answer; // create a variable to store the current node in the answer list
    let carry = 0; // create a variable to store the carryover value
    while (l1 || l2) { // while either of the two lists still has nodes to iterate through
        let sum = carry; // create a variable to store the sum of the two numbers
        if (l1) { // if the first list has a node to iterate through
            sum += l1.val; // add the value of the current node to the sum
            l1 = l1.next; // move to the next node in the first list
        }
        if (l2) { // if the second list has a node to iterate through
            sum += l2.val; // add the value of the current node to the sum
            l2 = l2.next; // move to the next node in the second list
        }
        carry = Math.floor(sum / 10); // calculate the carryover value
        current.next = new ListNode(sum % 10); // create a new node with the remainder of the sum and add it to the answer list
        current = current.next; // move to the next node in the answer list
    }
    if (carry) { // if there is a carryover value
        current.next = new ListNode(carry); // create a new node with the carryover value and add it to the answer list
    }
    return answer.next; // return the answer list
}