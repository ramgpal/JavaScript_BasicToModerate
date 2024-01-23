/* let marks = [25, 40, 5, 2, 1];
console.log(marks);
console.log(marks.length);
console.log(marks[2], marks[3]);
for(let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
// OR 
for(let values of marks) {
    console.log(values);
} */

//QS1: For a given array with marks, find the average marks of the entire class
/* let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
let avg = sum / marks.length;
console.log("Avg of marks is: ",avg); */


// QS2: For a given array with prices of 5 items. All items have an offer of 10% on them, Change the array to store final price after applying offer
let prices = [250, 645, 300, 900, 50];
for(let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] - (prices[i]*10)/100;
    console.log(prices[i]);
}
