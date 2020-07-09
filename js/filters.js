// filter函数的使用
// filter中的回调函数有一个要求：必须返回一个 boolean值
// true: 当返回true时，函数内部会自动将这次回调的 n 加入到新的数组中
// false：当返回false时，函数内部会过滤掉这次的 n
const nums = [10, 20, 111, 222, 444, 40, 50];

// let newNums = [];

let newNums = nums.filter(n => {
    return n < 100
})


// map函数的使用

let newNums2 = newNums.map(n => {
    return n * 2
})