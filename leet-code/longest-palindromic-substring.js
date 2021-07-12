/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 *  输入：s = "babad"
	输出："bab"
	解释："aba" 同样是符合题意的答案。


	输入：s = "cbbd"
	输出："bb"

	输入：s = "a"
	输出："a"
 * 
 */

 const isPalSubstring = str => {
	if (str === '') return false

	let left = 0,
		right = str.length - 1,
		flag = true

	while(left < right){
		if (str[left] === str[right]) {
			left++
			right--
		} else {
			flag = false
			break
		}
	}

	return flag
 }

//  console.log(isPalSubstring('abab'))
//  console.log(isPalSubstring('abwab'))
//  console.log(isPalSubstring('abwba'))
//  console.log(isPalSubstring('abba'))
//  console.log(isPalSubstring('0abba'))
// console.log(isPalSubstring(''))
// console.log(isPalSubstring('a'))

 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	if (s.length === 0) return ''

	let longestPalSubstring = ''

	for (let i = 0; i < s.length; i++){
		for (let j = i + 1; j < s.length + 1; j++){
			const subS = s.slice(i, j)
			if (isPalSubstring(subS) && subS.length > longestPalSubstring.length){
				longestPalSubstring = subS
			}
		}
	}

	return longestPalSubstring
}


console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
