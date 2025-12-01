// categorised on basis how data is stored and manipulated in memory

// Primitive Data Types

// 7 types :
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

// Non-Primitive Data Types(reference types):
// 1. Object
// 2. Array
// 3. Function

// js is a dynamically typed language
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId) // false

const bigNumber = 2809128391823918239182391823n

let myObj = {
    name: "prerit",
    age: 24,
    isLoggedIn: false
}

// stack is used to store primitive data types
// heap is used to store non-primitive data types
