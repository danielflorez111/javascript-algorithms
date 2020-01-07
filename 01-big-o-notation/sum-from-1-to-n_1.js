// Calculate the sum of all numbers from 1 up to n

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time: ${(t2 - t1) / 1000} seconds.`);
