//Operators -> Arithmatic, logical, assignment, relational, bitwise
/* let a = 5;
let b = "5";
console.log(a===b);
console.log(a==b);  */

// Conditionals -> if, if-else, else-if
/* let age = 20;
if(age > 19 && age < 29) {
    console.log("Young");
} else if(age <= 19){
    console.log("Teenagers");
} else {
    console.log("Man");
} */

// QS: Get user to input a number using prompt ("Enter a number: "). Check if the given number is a multiple of 5 or not?
/* let num = prompt("Enter a number: ");
if(num % 5 === 0) {
    console.log(num + "is a multiple of 5");
} else {
    console.log(num + "number is not a multiple of 5");
} */

// QS2: Write a code which can give grades to students according to their marks
let marks = prompt("Enter marks: ");
if(marks >= 0 && marks <= 49) {
    console.log("F");
} else if (marks >= 50 && marks <= 59) {
    console.log("D");
} else if(marks >= 60 && marks <= 69) {
    console.log("C");
} else if(marks >= 70 && marks <= 89) {
    console.log("B");
}else {
    console.log("A");
} 

