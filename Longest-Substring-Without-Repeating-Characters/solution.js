/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

	if (s.length == 1)
		return 1;

	var longestString = '';
	var tempLongestString = '';

	var secondIndex = 0;

	for (var index = secondIndex; index < s.length; index++) {

		if (!tempLongestString.includes(s[index])) {
			tempLongestString += s[index];
		}
		else {
			if (longestString.length < tempLongestString.length)
				longestString = tempLongestString;
			secondIndex++;
			index = secondIndex;
			tempLongestString = s[secondIndex];
		}
	}

	if (longestString.length < tempLongestString.length)
		longestString = tempLongestString;

	return longestString.length;
};