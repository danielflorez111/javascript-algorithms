// Write a function called 'same', which accepts two arrays. The function should retrun true if every value
// in the array has it's corresponding value squared in the second array. The frequency values must be the same
// O(n^2)
function same(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let element of array1) {
        let index = array2.indexOf(element ** 2);

        if (index === -1) {
            return false;
        }

        array2.splice(index, 1);
    }

    return true;
}

// Frequency counter pattern
// O(n)
function same2(array1, array2) {
    let frequencyCounter1 = {},
        frequencyCounter2 = {};

    if (array1.length !== array2.length) {
        return false;
    }

    for (const element of array1) {
        frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1;
    }

    for (const element of array2) {
        frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (const key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(same2([1, 2, 3, 2], [1, 9, 4, 10]));
