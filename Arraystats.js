function arrayStats(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let mean = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    return { max, min, mean };
}

console.log(arrayStats([1, 2, 3, 4, 5]));