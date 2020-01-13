function validAnagram(str1, str2) {
    const frequencyCounterStr1 = {};
    const frequencyCounterStr2 = {};

    if (str1.length !== str2.length) {
        return false;
    }

    for (const char of str1) {
        frequencyCounterStr1[char] = ++frequencyCounterStr1[char] || 1;
    }

    for (const char of str2) {
        frequencyCounterStr2[char] = ++frequencyCounterStr2[char] || 1;
    }

    for (const key in frequencyCounterStr1) {
        if (!frequencyCounterStr2.hasOwnProperty(key)) {
            return false;
        }

        if (frequencyCounterStr1[key] !== frequencyCounterStr2[key]) {
            return false;
        }
    }

    return true;
}

console.log(validAnagram('amor', 'roma'));