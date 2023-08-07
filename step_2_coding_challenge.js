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

// sumZero runtime: O(n) 
// This is because it loops through the array once and creates the set. 
// The size of the array affects how large the set could be and the number of checks that need
// to be made. 

// Space Complexity: O(n) 
// In the worst-case scenario the set could store a quantity of unique numbers that is 
// proportional (not the same) to the input array.  

console.log('sumZero function demo: ', sumZero([])); // false
console.log('sumZero function demo: ', sumZero([2])); // false
console.log('sumZero function demo: ', sumZero([2, 3, 5, -3, -1])); // true

// Unique Characters
// Write a function that takes in a single word, as a string.
// It should return True if that word contains only unique
// characters. Return False otherwise.

const hasUniqueCharacters = (word) => {
    const charAppearances = {};
    for (const char of word) {
        if (charOccurences[char]) {
            return false;
        }
        charOccurences[char] = true;
    }
    // if no letter remains
    return true;
};

// hasUniqueCharacters runtime: O(n)
// This takes a single string and checks if it contains unique 
// characters and depending on the size of the string the 
// loop will iterate through each character to check. 
// So essentially the size of the input will affect the outcome

// Space Complexity: O(c)
// Meaning it depends on the quantity of unique characters. 

// test Cases

console.log(hasUniqueCharacters('Sunscreen'));
console.log(hasUniqueCharacters('Breakfast'));
console.log(hasUniqueCharacters('Private'));
console.log(hasUniqueCharacters('Triangle'));

// Pangram Sentence:

// A pangram is a sentence that contains all the letters of the
// English alphabet at least once, like “The quick brown fox jumps
// over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = (input_string) => {
    input_string = input_string.toLowerCase();

    const uniqueLetters = new Set();

    for (const char of sentence) {
        if (('a' <= char) & (char <= 'z')) {
            uniqueLetters.add(char);
        }
    }
    return uniqueLetters.size === 26; // Check and get boolean value in return
};
// isPangram runtime: O(n)
// This function loops thorugh each character in the sentence for the length of it...
// There is some consideration that the 26 characters in the alphabet could either
// limit the runtime or expand it until the criteria is reached and if there are 
// still characters in the string to achieve the pangram status. 

// Space Complexity: O(a)
// The set can store up to 26 characters. It is a new data structure with a
//  max memory use of potentially 26 characters 

//  Test Cases

console.log(isPangram("Time has told me you're a rare find."));
console.log(isPangram('Pangramatically speaking, not at all.'));

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const find_longest_word = (words) => {
    let greatestLength = 0;
    for (const word of words) {
        if (word.length > greatestLength) {
            greatestLength = word.length;
        }
    }
    return greatestLength;
};

console.log(
    'The longest word is: ',
    find_longest_word(['morning', 'breakfast', 'maneuveur', 'manufacturer'])
);

// find_longest_word runtime: O(n)
// This function iterates through each word in a list and the size of the list determines the runtime. 
// The larger the list the longer it will take to iterate through each element. 

//  Space Complexity: O(1)
//  This is constant because the amount of memory used will not change 
// regardless of the size of the input words list.