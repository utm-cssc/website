---
title: JavaScript Open Source Guide
icon: /icons/javascript.svg
desc: Quick guide to Javascript!
link: javascriptguide
tags:
  - open-source
  - web
---

# Javascript Done Quick

## Introduction

JavaScript is a powerful script programming language that commonly used for web
development (it can also be used for other purposes too, but web development is
the most popular use). With endless support libraries and frameworks, JavaScript
is growing strongly.

This guide will cover basic topics that you may need to know for the CSSC
Open-source Contest. Note that we will mostly go through keywords and important
concepts, and you may want to read other documentation for more details.

## Compile JS Code

- **Nodejs**: The most popular environment for executing JS code, with the use
  of V8 engines. You can install Nodejs here:
  [Download | Node.js (nodejs.org)](https://nodejs.org/en/download/). After
  installing successfully Node to your computer, you can run your .js files by
  doing this in your Command-line/Powershell
  ```jsx
  path-to-folder-where-js-file-located>node example.js // run example.js file
  ```
- **Online IDE:** There are many online IDEs that support editing and compiling
  JS code. Note that you can choose either Nodejs or VanillaJS for development
  (which technically are both JavaScript).
  - [Home - Replit](https://replit.com/~)
  - [CodeSandbox: Online Code Editor and IDE for Rapid Web Development](https://codesandbox.io/)
  - [CodePen Free Sign Up](https://codepen.io/accounts/signup/user/free)
- **Browser Devtool**: Your browsers (Google, Microsoft Edge, Firefox,...) also
  support V8 engines to execute your code! You can go to More (3-dot icon at the
  top right bar) > More Tools > Developer Tool, or using `Ctrl+Shift+I`/`F12`
  ![Untitled](Javascript%20c2c5b/Untitled.png)
  Now you can compile your JS Code in the Console of Developer Tool!
  ![Untitled](Javascript%20c2c5b/Untitled%201.png)

![Untitled](Javascript%20c2c5b/Untitled%202.png)

## Data Types

- String
  - Notable methods:
    - `replace`
    - `slice`
    - `split`
    - `join`
    - `trim`
  - String template: Using backticks ``
    ```jsx
    const hi = 'Hello'
    console.log(`${hi}, World!`) // print Hello, World! in the console
    ```
- Number
- Array
  - Properties:
    - `length`: return length of array
  - Notable methods:
    - `toString`: convert array to string (default is comma separated)
    - `pop`: remove the last element in array
    - `push`: add a new element at the end of array
    - `splice`: add or remove items
    - `slice`: slice out part of array
  - Built-in array iteration:
    - `forEach`: iterate through each element or array and execute parameter
      function
    ```jsx
    const arr = [1, 2, 3]
    arr.forEach(printNum) // print each number with a new line in the console
    function printNum(num) {
      console.log(num)
    }
    ```
    - `map`: creates a new array by performing a function on each array element
    ```jsx
    const arr = [1, 2, 3]
    const doubledArr = arr.map(doubleNum)
    function doubleNum(num) {
      return num * 2
    }
    console.log(doubledArr) // we can expect [2, 4, 6] being printed in the console
    ```
    - `filter`: creates a new array with array elements that passes a test
      performing by a given function
    ```jsx
    const arr = [1, 2, 3]
    const evenArr = arr.filter(isEven)
    function isEven(num) {
      return num % 2 === 0
    }
    console.log(evenArr) // we can expect [2] being printed in the console
    ```
    - `indexOf`: searches an array for an element value and returns its
      position.
    ```jsx
    const arr = [1, 2, 3]
    const position = arr.indexOf(2)
    console.log(position) // 1 (index of value 2) will be printed in the console
    ```
    - `find`: returns the value of the first array element that passes a test
      function.
    ```jsx
    const arr = [1, 2, 3, 4]
    const firstEvenNumber = arr.find(isEven)
    function isEven(num) {
      return num % 2 === 0
    }
    console.log(firstEvenNumber) // we can expect 2 (first even number) being printed in the console
    ```
    - `findIndex`: returns the index of the first array element that passes a
      test function.
    ```jsx
    const arr = [1, 2, 3, 4]
    const firstEvenNumberIndex = arr.findIndex(isEven)
    function isEven(num) {
      return num % 2 === 0
    }
    console.log(firstEvenNumberIndex) // we can expect 1 (index of first even number) being printed in the console
    ```
- Object
  - properties
  ```jsx
  const person = {
    name: 'John Doe',
    age: 18,
  }
  console.log(person.name) // print John Doe in the console
  console.log(person.age) // print 18 in the console
  ```
  - methods (functions stored as properties)
  ```jsx
  const person = {
    name: 'John Doe',
    age: 18,
    greeting: function() {
      console.log(`Hello, my name is ${this.name}. I am ${this.age} years old!`)
    },
  }
  person.greeting() // call the method greeting, which will print "Hello, my name is John Doe. I am 18 years old!"
  ```
  - Keyword `this`
    - In an object method, `this` refers to the **object**.
    - Alone, `this` refers to the **global object**.
    - In a function, `this` refers to the **global object**.
    - In a function, in strict mode, `this` is **undefined**.
    - In an event, `this` refers to the **element that received the event**.
    - Methods like call(), apply(), and bind() can refer `this` to **any
      object**.
- Boolean: `true` and `false`
- Null: an object with an absence of value
- Undefined: a data type whose variable is not initialized

## Variables

You must use keywords (`var`, `let`, or `const`) to declare your variables. For
example:

```jsx
const num = 1; // declare variable num with initial value of 1.
console.log(num); // Print 1 to the console
const maybeNum; // declare variable maybeNum without initial value. You must assign a value afterward before running the code.
```

Here are some key differences between these 3 keywords:

|                          | var              | let             | const           |
| ------------------------ | ---------------- | --------------- | --------------- |
| Version supported        | Beginning of JS  | ES6+            | ES6+            |
| Can reassign value?      | Yes              | Yes             | No              |
| Can redeclare variables? | Yes              | No              | No              |
| Scope                    | Global, Function | Function, Block | Function, Block |

## Operators & Logic

- Operators:
  - `+` (Note that in JS we can add 2 or more values with different data types.
    You can read and experiment how JS handle such cases)
  - `-`
  - `*`
  - `/`
  - `%`
- Logic
  - Equivalent:
    - `==`: compare values and check whether they are equivalent
    ```jsx
    > 2 == '2'
    < true
    ```
    - `===`: compare values and data types to check whether they are equivalent
    ```jsx
    > 2 === '2'
    < false
    > 2 === 2
    < true
    ```
  - Comparision
    - `>=`
    - `<=`
    - `!=`
    - `!==`
  - Negation: `!`

## Conditions

- `if`, `else`, `else if`
- Conditional operators: `? :`

```jsx
// This if else statement
if (2 > 1) {
  console.log('You can do math')
} else {
  console.log('You must learn math')
}
// equals to the following statement
2 > 1 ? console.log('You can do math') : console.log('You must learn math')
```

- Switch & case (Source:
  [JavaScript Switch Statement (w3schools.com)](https://www.w3schools.com/js/js_switch.asp?msclkid=07b9a249a54811ecb2b23caacbfb598b))
  1. The switch expression is evaluated once.
  2. The value of the expression is compared with the values of each case.
  3. If there is a match, the associated block of code is executed.
  4. If there is no match, the default code block is executed.

```jsx
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday'
    break
  case 1:
    day = 'Monday'
    break
  case 2:
    day = 'Tuesday'
    break
  case 3:
    day = 'Wednesday'
    break
  case 4:
    day = 'Thursday'
    break
  case 5:
    day = 'Friday'
    break
  case 6:
    day = 'Saturday'
}
```

## Iteration

- For Loop (Source of Guide: W3Schools)
  The `for` loop has the following syntax:
  ```jsx
  for (*statement 1*; *statement 2*; *statement 3*) {
    // *code block to be executed*
  }
  ```
  - **Statement 1** is executed (one time) before the execution of the code
    block.
  - **Statement 2** defines the condition for executing the code block.
  - **Statement 3** is executed (every time) after the code block has been
    executed.
  Here is an example of a loop that print 1 to 5 in the console:
  ```jsx
  for (let i = 1; i <= 5; i++) {
    console.log(i)
  }
  ```
  We can also perform the `for` loop with keywords `in` and `of`. You can read
  more here:
  - [JavaScript For In (w3schools.com)](https://www.w3schools.com/js/js_loop_forin.asp)
  - [JavaScript For Of (w3schools.com)](https://www.w3schools.com/js/js_loop_forof.asp)
- While Loop
  ```jsx
  while (condition) {
    // code block to be executed when the condition evaluated to true
  }
  ```
- Keywords:
  - `break`: exit the loop
  - `continue`: terminate the loop in current iteration and move to next
    iteration

## Functions

(Source: W3Schools)

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

Function **parameters** are listed inside the parentheses () in the function
definition.

Function **arguments** are the **values** received by the function when it is
invoked. Inside the function, the arguments (the parameters) behave as local
variables.

- Formal function
  - Defined with the `function` keyword, followed by a **name**, followed by
    parentheses **()**.
  ```jsx
  function *name*(*parameter1, parameter2, parameter3*) {
  	// *code to be executed*
  }
  ```
  - Function names can contain letters, digits, underscores, and dollar signs
    (same rules as variables).
  - The parentheses may include parameter names separated by
    commas:**(_parameter1, parameter2, ..._)**
  - The code to be executed, by the function, is placed inside curly brackets:
    **{}**
- Arrow function: new way to declare function in ES6+
  ```jsx
  // 2 functions below do the same thing
  const sayHi = () => {
    console.log('Hello World!')
  }
  const stillSayHi = () => console.log('Hello World!')
  ```
  - The key difference between arrow functions and normal functions is the
    reference of the `this` keyword. You can read more here:
    [Difference between regular functions and arrow functions in JavaScript (tutorialspoint.com)](https://www.tutorialspoint.com/difference-between-regular-functions-and-arrow-functions-in-javascript#:~:text=Difference%20between%20regular%20functions%20and%20arrow%20functions%20in,Arrow%20functions%20are%20callable%20but%20not%20constructable.%20?msclkid=ea630a57a56011ec829bd018a1d17945)
- Promises:
  [JavaScript Promises (w3schools.com)](https://www.w3schools.com/Js/js_promise.asp?msclkid=b44549bba56111ec98e0a0ca49533f09)
- Async & Await: Make a function executing asynchronously. More details:
  [JavaScript Async/Await | W3Docs Tutorial](https://www.w3docs.com/learn-javascript/async-await.html?msclkid=3d0d87e4a56111eca29d0dda35329e15).

## Other Guidelines

- W3Schools
- Mozilla Developers
