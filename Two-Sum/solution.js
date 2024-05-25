/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

	var map = new Map();

	for (let index = 0; index < nums.length; index++) {

		// the second value we search for
		var potenialSecondNumber = target - nums[index];

		if (map.has(potenialSecondNumber)) {

			// map.get to get item's index
			return [map.get(potenialSecondNumber), index];
		}

		map.set(nums[index], index);
	}

	return [];
};