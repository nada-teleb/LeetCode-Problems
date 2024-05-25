/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

	if (s.length == 1)
		return 1;

	var longestString = '';
	var tempLongestString = '';

	for (var index = 0; index < s.length; index++) {
		console.log("tempLongestString", tempLongestString);
		console.log("longestString", longestString);
		if (!tempLongestString.includes(s[index])) {
			tempLongestString += s[index];
		}
		else {
			if (longestString.length < tempLongestString.length)
				longestString = tempLongestString;
			tempLongestString = s[index];
		}
	}

	if (longestString.length < tempLongestString.length)
		longestString = tempLongestString;

	return longestString.length;
};