// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: 10. Under String Methods and Properties in the syllabus, the function will count the characters in the string. There was nothing annotated in the function regarding the index, that was my error. I counted the characters starting at zero index but there were no brackets.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: "o". Referencing the Index/ Accessing Elements section in the syllabus under JS Arrays. The function is asking to return the value at index 4. The index is defined by using the square brackets.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: "Ruby". Referencing the Index/ Accessing Elements section in the syllabus under JS Arrays. The function is asking to return the index variable, which is defined as 1. The zero indexing of the values results in "Ruby" being the value at 1 index. 


// --------------------4) What will this log?

//const weekendDays = ["saturday", "sunday"] 
//console.log(weekendDays.toUpperCase())


// a) Your answer: An error would occur because either saturday or sunday needs to be entered into the parenthesis. 
// b) Verify and explain: "TypeError: weekendDays.toUpperCase is not a function". weekendDays was not defined as a function. The parameters for "saturday" and "sunday" should be something different ie [dayOfWeek], since those inputs might be different every time the function is run. After the parameters are redefined, then a function can be written using string interpolation to return what ever day of the week is specified in the function.
// const weekendDays = (daysOfWeek) => {
//     return `${daysOfWeek}`
// } 
// console.log("Saturday".toUpperCase())
//Output: SATURDAY


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: 5, 5, 6
// b) Verify and explain: "number". Referencing the additional resources in the STRETCH challenges under JS Conditionals in the syllabus. The typeof returns the operand that has not been evaluated. "number" was returned because the .length property is asking for the number of elements in the array. Since a number was not returned with the .length property being stated, "number" is the answer.