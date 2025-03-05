/* 
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    Example 1:
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    Example 2:
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
        
    Example 3:
        Input: nums = [3,3], target = 6
        Output: [0,1]

*/

var twoSum = function(nums, target) {
    // Store the given nums of array to a map into a key-value pair, each representing:
        // actual number: index (indicies)
        // So later by figuring out the difference, we can check if it exists and pull it out from the map
    let indicies = {};

    // Updating the map...using for loop
    for (let i = 0; i < nums.length; i++) {
        indicies[nums[i]] = i;
    }

    // Loop through the nums and find the difference from the target
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        
        // If the difference does exist in the map...
            // Check if it is not undefined
            // Check so that the the value of the indicies[difference] is not the same value as the current iteration (no duplicates)
        if (indicies[difference] != undefined && indicies[difference] != i) {
            // Return indicies if it's true!
            return [i, indicies[difference]]
        }
    }
}