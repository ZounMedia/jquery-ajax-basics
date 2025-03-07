//Understanding Closures in JavaScript

/**
 * A closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function’s variables, even after the outer function has finished executing.
 * Closures allow functions to "remember" the environment in which they were created.
 */

//1. Basic Closure Example
function outerFunction() {
  let outerlet = "I'm outside!";

  function innerFunction() {
    console.log(outerlet); // Accessing outerlet from the outer function
  }

  innerFunction();
}

outerFunction(); // Output: "I'm outside!"
// outerFunction(); // Output: "I'm outside!"

/**Explanation:
 * The innerFunction is defined inside outerFunction and can access the outerlet variable even though outerlet is declared in the outer function.
 * This is a basic example of a closure.
 * */

//2. Returning a Function to Create a Closure
/**
 * In this example, the outer function returns the inner function, which retains access to the outer function’s variable even after the outer function has finished executing.
 * */
function createClosure() {
  let message = "Hello, Closure!";

  return function () {
    console.log(message); // The inner function retains access to 'message'
  };
}

let myClosure = createClosure();
// myClosure(); // Output: "Hello, Closure!"
// myClosure(); // Output: "Hello, Closure!"

/**Explanation
 * createClosure returns a function that accesses the message variable. Even after createClosure has completed, the returned function retains access to message due to closure.
 */

//3. Closures with Parameters
//Closures can also capture letiables that are passed as parameters to the outer function.
function greet(name) {
  return function () {
    console.log("Hello, " + name); // Accessing the 'name' parameter from the outer function
  };
}

let greetJohn = greet("John");
// greetJohn(); // Output: "Hello, John"

let greetJane = greet("Jane");
// greetJane(); // Output: "Hello, Jane"

/**Explanation
 * The greet function takes a name parameter and returns a function that uses that name. The returned function forms a closure that "remembers" the value of name passed when the outer function was called.
 */

//4.  Advanced Closure Example: Private Variables
/**
 * Closures can be used to create private letiables that can only be accessed or modified by specific functions
 */
function createCounter() {
  let count = 0; // 'count' is a private letiable

  return {
    increment: function () {
      count++;
      console.log(count); // Accessing and modifying 'count'
    },
    decrement: function () {
      count--;
      console.log(count); // Accessing and modifying 'count'
    },
    getCount: function () {
      return count; // Accessing 'count' without modifying it
    },
  };
}

let counter = createCounter();
// counter.increment(); // Output: 1
// counter.increment(); // Output: 2
// counter.increment(); //Output: 3
// counter.decrement(); // Output: 2
// console.log(counter.getCount()); // Output: 2

/** Explanation
 * In this example, createCounter returns an object with methods that can access and modify the count variable.
 * The count variable is private because it is only accessible within the returned methods.
 * This is a practical use of closures to create encapsulated, private state.
 */

/**Summary
 * Closures allow an inner function to access variables from its outer function, even after the outer function has finished executing.
 * Closures are useful for creating private variables, maintaining state between function calls, and avoiding variable conflicts in loops.
 */
