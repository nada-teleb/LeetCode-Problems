/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

	if (s.length == 1)
		return 1;

	var possibleSubStrings = [''];

	var secondIndex = 0;

	for (var index = secondIndex; index < s.length; index++) {

		if (!possibleSubStrings[secondIndex].includes(s[index])) {

			possibleSubStrings[secondIndex] += s[index];
		}
		else {
			index = ++secondIndex;
			possibleSubStrings[secondIndex] = s[secondIndex];
		}
	}

	return Math.max(...(possibleSubStrings.map(el => el.length)));
};