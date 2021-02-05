// What is Big-O?
// Big-O is essentially an equation that describes how the runtime scales with respect to some input variables.

// O(1)
// - Constant time with respect to the size of the input
// - It doesn't take longer with more input.

// O(n)
// - Where n is the amount of data
// - It scales linearly with respect to the amount of input
// - Twice amount of data is going to take roughly twice as much time
// Example:
// Function that just walks through an array and checks if it contains a particular value.
function contains(array, x) {
    let isInArray = false;

    array.forEach(element => {
        if (element === x) {
            isInArray = true;
        }
    });

    return isInArray;
}

// O(n^2)
// - Array with n elements, has n^2 pairs
function printPairs(array) {
    array.forEach(x => {
        array.forEach(y => {
            console.log(x, y);
        });
    });
}
