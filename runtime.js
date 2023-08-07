const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


//  tinyArray Results:
// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let tinyResultsAppend = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let tinyResultsInsert = perf.stop();


// smallArray Results:
// Try it with first function
perf.start();                    
doublerAppend(smallArray);
let smallResultsAppend = perf.stop(); 

// Try it with second function
perf.start();
doublerInsert(smallArray);
let smallResultsInsert = perf.stop();


// mediumArray Results:
// Try it with first function
perf.start();                     
doublerAppend(mediumArray);
let mediumResultsAppend = perf.stop(); 

// Try it with second function
perf.start();
doublerInsert(mediumArray);
let mediumResultsInsert = perf.stop();


// largeArray Results:
// Try it with first function
perf.start();                    
doublerAppend(largeArray);
let largeResultsAppend = perf.stop();  

// Try it with second function
perf.start();
doublerInsert(largeArray);
let largeResultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords); // insert 859.706458 ms
console.log("append", resultsAppend.preciseWords); // append 1.784417 ms
console.log('-----------------');

console.log('Results for the tinyArray');
console.log("insert", tinyResultsInsert.preciseWords); // insert 15.208 μs
console.log("append", tinyResultsAppend.preciseWords); // append 65.458 μs
console.log('-----------------');

console.log('Results for the smallArray');
console.log("insert", smallResultsInsert.preciseWords); // insert 5.833 μs
console.log("append", smallResultsAppend.preciseWords); // append 1.708 μs
console.log('-----------------');

console.log('Results for the mediumArray');
console.log("insert", mediumResultsInsert.preciseWords); // insert 87.875 μs
console.log("append", mediumResultsAppend.preciseWords); // append 5.708 μs
console.log('-----------------');

console.log('Results for the largeArray');
console.log("insert", largeResultsInsert.preciseWords); // insert 6.116208 ms
console.log("append", largeResultsAppend.preciseWords); // append 56.458 μs