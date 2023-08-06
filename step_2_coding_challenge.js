//  Sum Zero
// Write a function that takes in an array of numbers.
// The function should return True if any two numberss
//  in list sum to 0, and false otherwise.

const sumZero = (nums) => {
    const uniqueNums = new Set(nums);

    for (const num of nums) {
        if (uniqueNums.has(-num)) {
            return true;
        }
    }
    return false;
};

console.log('sumZero function demo: ', sumZero([])); // false
console.log('sumZero function demo: ', sumZero([2])); // false
console.log('sumZero function demo: ', sumZero([2, 3, 5, -3, -1])); // true

// Unique Characters
// Write a function that takes in a single word, as a string. 
// It should return True if that word contains only unique 
// characters. Return False otherwise.

const hasUniqueCharacters = (word) {
	const charAppearances = {}
	for (const char of word) {
		if (charOccurences[char]) {
			return false
		}
		charOccurences[char] = true;
	}
	// if no letter remains
	return true;
}

// test Cases

console.log(hasUniqueCharacters("Sunscreen")); 
console.log(hasUniqueCharacters("Breakfast"));
console.log(hasUniqueCharacters("Private"));
console.log(hasUniqueCharacters("Triangle"));




// Pangram Sentence:

// A pangram is a sentence that contains all the letters of the 
// English alphabet at least once, like “The quick brown fox jumps 
// over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = (input_string) => {
	input_string = input_string.toLowerCase();

	const uniqueLetters = new Set()

	for (const char of sentence) {
		of ('a' <= char & char <= 'z') {
			uniqueLetters.add(char)
		}
	}
	return uniqueLetters.size === 26 // Check and get boolean value in return 
}
//  Test Cases

console.log(isPangram("Time has told me you're a rare find."))
console.log(isPangram("Pangramatically speaking, not at all."))


