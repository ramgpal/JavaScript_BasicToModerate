/* function sum(a, b) {
    console.log(a+b);
}
sum(2, 3); */

/* function sum(a, b) {
    let sum = a*b;
    return sum;
}
console.log(sum(2, 3)); */

// Arrow function -> Part of  modern JS
/*const sum = (a, b) => {
    return a+b;
}
console.log(sum(2, 3));

const mul = (a, b) => {
    return a*b;
}
console.log(mul(2, 3)); */

// counting number of vowels in a given string
/* const countVowels = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
            count++;
        }
    }

    return count;
}
console.log(countVowels("apple")); */

// forEach
/* let arr = [1, 2, 3, 4, 5];
arr.forEach(function incByOne(val){
    console.log(val+1);
})
// using arrow function
arr.forEach((val)=> {
    console.log(val+1);
}) */

// Map method in JS
// let nums = [1, 2, 3, 4, 5];
// nums.map((val)=>{
//     console.log(val);
// })
// OR
// let newArr = nums.map((val)=> {
//     return val;
// })
// console.log(newArr);

// filter Method
/*let evenArr = nums.filter((val)=> {
    return val % 2 === 0;
})
console.log(evenArr); */

// Reduce method
// const arr = [1, 2, 3, 4];
// const Sum = arr.reduce((sum, val)=> {
//     return sum + val;
// })
// console.log(Sum);

// Filter out students whose marks are greater than 90
let marks = [80, 93, 95, 89, 63, 97];
let marksGreaterThanNinety = marks.filter((mark)=>{
    return mark > 90;
})
console.log(marksGreaterThanNinety);

let productOfMarks = marks.reduce((prev, curr)=>{
    return prev+curr;
})
console.log(productOfMarks);


