/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

	for (var index = 0; index < nums.length; index++) {
		for (var innerIndex = index + 1; innerIndex < nums.length; innerIndex++) {
			if (nums[index] + nums[innerIndex] == target)
				return [index, innerIndex];
		}
	}
	return [];
};