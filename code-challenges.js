// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

//Problem: create a function that compares the character length of two strings. The return should be the string that has the greater number of characters.
//function expression: 
    //if string1 has more characters than string2, return string1
    //if string2 has more characters than string1, return string2
    //else which can reflect that both strings have the same character length then return "Better Luck in Vegas" or "Better Luck in Temecula" for the second set of variables.
//set parameters
    //(string1, string2) - these two strings will be different with each function
        //set one:fruit1 = "apple"
                //fruit2 = "banana"
        //set two:fruit3 = "cherry"
                //fruit4 = "kiwi"
//make a decision and use conditional to compare the character length of both strings
    //string.length --> fruit1.length
//return string with the greater character length

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

if(fruit1.length > fruit2.length) {
    console.log(`${fruit1}`)
} else if(fruit2.length > fruit1.length) {
    console.log(`${fruit2}`)
} else {
    console.log("Better Luck in Vegas")
}
//Output: banana

//I had to refer back to the example provided in the syllabus under conditional statement examples. I know this was the instructor example but I could use the practice. 

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

if(fruit3.length > fruit4.length) {
    console.log(`${fruit3}`)
} else if(fruit4.length > fruit3.length) {
    console.log(`${fruit4}`)
} else {
    console.log("Better Luck in Temecula")
}
//Output: cherry

//I copied and pasted the code from the fruit1/fruit2 function and changed the numbers to 3 & 4 to match the provided variables. 


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:

//problem: given a variable with a certain temperature, create a function to return whether the provided variable (temperature) is below, above or at boiling point. Boiling point is 212 degrees Fahrenheit.
//function expression: if a temperature is less than 212 then the return should be "<temp> is below boiling point". if a temperature is greater than 212 the return should be "<temp> is above boiling point". if a temperature is equal to 212 then the return should be "212 is at boiling point."
//set parameters: 
    //boiling point num === 212
    //temp < 212 return "<temp> is below boiling point"
    //temp > 212 return "<temp> is above boiling point"
    //temp = 212 return "<temp> is at boiling point"
//make a decision: use if and else if statements with <.>.= when making the function for the three possible returns.
//return should be one of the three string interpolations of below, above or at boiling point with the temperature listed. 

const temp1 = 42
const temp2 = 350
const temp3 = 212

if(temp1 < 212) {
    console.log(`${temp1} is below boiling point`)
}if(temp2 > 212) {
    console.log(`${temp2} is above boiling point`)
}if(temp3 === 212) {
    console.log(`${temp3} is at boiling point`)
}

//Output: 42 is below boiling point
//350 is above boiling point
//212 is at boiling point

// I had to keep swtiching the conditional statements but I eventually got the ouput that I wanted. I originally had if and else if statements because I was following the example in the syllabus. I'm still trying to understand the differences between them and how and when to use them. I can break down the function in words but putting it together in code has been a struggle for me since jumpstart. 


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:

//problem: combining two arrays and return how many elements are in the new combined array.
//function expression: use .length on new array to return the number of elements in the new array
//set parameters: both arrays need to be added together in order to get the total number of elements.
//make a decision: use the addition symbol to add the length of each array. Use ".length" after each variable to get the length of each array. 
//return: the total number of elements of merged arrays console.log(myNumbers1.length + myNumbers2.length)

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.length + myNumbers2.length)

//Output: 10

//I honestly did not think that would work. I've told myself to stop over thinking and try the simplest way to work the problem first then start branching out.


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code:

//problem: the letters in the string need to be reversed
//function expression: I'm going to try .reverse() to see if that works with the string. If not then I'll try charsReversed.
//set parameters: the letters in the string need to be be in reverse order
//make decision: using .reverse() should work to return the letters in reverse order 
//return: the letters in the string to be reversed. 
    //After trying both of those and doing more research on w3 and the syllabus, I've decided to try indexing the string and then reversing it.
    //That did not work so I will try joining and then reversing the string.
    //Also did not work so I will do the opposite of join and split the string.

const currentCohort = "Delta 2022"
console.log(currentCohort.split(""))

var cohortSplit = currentCohort.split("")
    console.log(cohortSplit.reverse(), cohortSplit.join(""))
return(cohortSplit.reverse(), cohortSplit.join(""))
//Output: 2202 atleD

//This took me about an hour and a half to figure it out. I figured out I had to split and join and reverse the values. I went back to the syllabus to see which order to put it in and also went back to the practice we did in class. It was pretty frustrating that the code didn't work like how i thought it was going to the first time.



// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
//problem: the numbers in the array need to be identified as odd or even and returned as such.
//function expression: using a for loop, index the list of numbers and then have the new indexed array % 2 === 0 for the even numbers. For the odd numbers, the indexed array $ 2 == 1. 
//set parameters: myArray[i] % 2 === 0; myArray[i] % 2 == 1. 
//make decision: write a for loop indexing starting with i=0, ending at i<=42 (largest number in the array). Then write an if for the odd numbers and another if function for the even numbers. If the number is odd or even return the appropriate word ("even" or "odd").
//return: "even" "odd"

const myArray = [13, 34, 5, 10, 27, 42] 
for(let i=0; i<=42; i++){
    if(myArray[i] % 2 === 0){
        console.log('"even"')
    }
    if(myArray[i] % 2 == 1){
        console.log('"odd"')
    }
}
//Output: "odd" "even" "odd" "even" "odd" "even"
//I wasn't sure if the quotations needed to be included in the final output so I added them in to match the provided output.


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// problem: Given two numbers, the smaller number needs to be subtracted from the larger number and the output is the difference.
// function expression: if statement for the first possible subtraction combination number1 > number2; if else for the second subtraction combination number2 > number1; else for if the numbers are equal.
// set parameters: if (number1 is > than number2){console.log (number1 - number2)} if else (number2 > number1){console.log(number2 - number1)}
// make decision: write if statements for both sets of numbers. write an else statement if the variables are equal to one another.
// return: 42 (set one), 3 (set two)


// Set one:
const number1 = 58
const number2 = 100

if(number1 > number2){
    console.log(number1 - number2)
} else if(number2 > number1){
    console.log(number2 - number1)
} else {
    console.log("Try Again")
}

// Set two:
const number3 = 27
const number4 = 24

if(number3 > number4){
    console.log(number3 - number4)
} else if(number4 > number3){
    console.log(number4 - number3)
} else {
    console.log("Try Again")
}

//Output: 42,3
//I was able to get the logic on this problem and figure out the equation to use. I started with plugging in a simple equation (did not think it would work) before trying other processes.