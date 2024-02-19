let arr = [1, 2, 3, 4, 5, 6]

let arr1 = arr.reduce((sum, item, index) => sum + (index % 2 === 0 ? item : 0), 0)
console.log(arr1);