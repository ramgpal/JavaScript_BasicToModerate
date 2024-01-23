// Loops > for, while, do-while

// for 
/* for(let i = 1; i <= 5; i++) {
    console.log(i);
} */ 

// while
/* let i = 1;
while(i <= 5) {
    console.log(i);
    i++;
} */

// do-while
/* let i = 5;
do {
    console.log(i);
    i--;
} while(i > 1); */

// for-of
/* let str = "RamGPal";
for(let val of str) {
    console.log(val);
} */

// for-in
/* let student = {
    name: "Ram G Pal",
    age: 20,
    isPass: true,
}; 
for(let keys in student) {
    console.log(keys);
} */

//QS1: Print all even no's from 0 to 100
/* for(let i = 0; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log(i);
    } 
} */

// Strings
/* let str = "RamGPal";
console.log(str);
console.log("length of the string is: ", str.length);
console.log("Character at 2nd position in str is: ", str[1]) ;
console.log(`String is ${str} having length ${str.length}`); */

//QS1: Prompt the user o enter their full name, generate a username for them based on given input. start username with @, followed by fullname and ending with the fullname length
let user = "ramgpal"; //prompt("Enter your name: ");
let output = "@" + user + user.length;
console.log("username is: ", output);
