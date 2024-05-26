/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

	var uniqueSubString = []
	var maxLength = 0

	s.split("").forEach((character) => {

		while (uniqueSubString.includes(character))
			uniqueSubString.shift();

		uniqueSubString.push(character);

		if (uniqueSubString.length > maxLength)
			maxLength = uniqueSubString.length;
	})

	return maxLength;
};