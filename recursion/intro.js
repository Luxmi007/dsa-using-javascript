// Recursion: An Introduction

// Recursion is a programming technique where a function calls itself in order to solve a problem. 
// It is often used for problems that can be broken down into smaller, similar subproblems. 
// A recursive function typically has two main components: a base case that stops the recursion and a recursive case that continues the recursion.

// Here is a simple example of a recursive function that calculates the factorial of a number:
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
}

// // Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1

// In this example, the `factorial` function calls itself with a decremented value of `n` until it reaches the base case of `n` being 0 or 1.
//  Each recursive call multiplies `n` by the result of the factorial of `n - 1`, 
// ultimately calculating the factorial of the original number.

// +++++++++++++++++++++++++++ WHEN TO USE RECURSION +++++++++++++++++++++++++++++++++
// Recursion is particularly useful for problems that can be defined in terms of smaller subproblems solve those subprobles
// an then using those solutions to get the solution of the original problem
// THE SUBPROBLEMS WILL BE SIMILAR TO THE ORIGINAL PROBLEM, such as:
// - Tree and graph traversals
// - Divide and conquer algorithms (e.g., quicksort, mergesort)
// - Combinatorial problems (e.g., generating permutations, combinations)
// - Problems with overlapping subproblems (e.g., Fibonacci sequence, dynamic programming)

// ++++++++++ RECURSIVE LEAP OF FAITH ++++++++++++++++
/*          
1. UNDERSTAND THE PROBLEM AND THE FUNCTION SIGNATURE:
   - Clearly define what the function is supposed to do, its inputs, and its expected outputs.

2. IDENTIFY THE BASE CASE(S):
   - Determine the simplest possible input(s) for which the function can return a result without further recursion.
   - This is crucial to prevent infinite recursion and eventual stack overflow.     

3. DEFINE THE RECURSIVE CASE(S):
   - Figure out how to break down the problem into smaller subproblems that are similar to the original problem.
   - Ensure that each recursive call brings you closer to the base case.   

4. MAKE THE RECURSIVE CALL(S):
   - Call the function itself with the smaller subproblem(s) as arguments.
   - Use the results of these calls to build up the final result for the original problem.

5. COMBINE RESULTS (IF NECESSARY):
   - If your recursive calls return values, combine them appropriately to form the final result.
*/

// ++++++++++++++++++++++RECURSION TREE ++++++++++++++++++++++++++++++++
// A recursion tree is a visual representation of the recursive calls made by a function.
// It helps to understand how the recursion unfolds and how many calls are made at each level.
// Each node in the tree represents a function call, and its children represent the subsequent recursive calls made by that function.
// The depth of the tree corresponds to the number of recursive calls until the base case is reached.

// For example, consider the factorial function above. The recursion tree for factorial(4) would look like this:

/*
                factorial(4)
                     |
          -----------------------
          |                     |
      4 * factorial(3)     (base case not reached)
                     |
          -----------------------
          |                     |
      3 * factorial(2)     (base case not reached)
                     |
          -----------------------
          |                     |
      2 * factorial(1)     (base case reached, returns 1)
                     |
                 (returns 1)
*/

// In this tree, each level represents a recursive call to the factorial function, 
// and the leaves represent the base case where the recursion stops. 
// The final result is obtained by combining the results from the leaves back up to the root of the tree.   

// ++++++++++++++++++ RECURSIO STACK ++++++++++++++++++++++++++++++++
// The recursion stack is a data structure that keeps track of the active function calls in a recursive program.
// Each time a function is called, a new frame is added to the stack, 
// containing information about the function's parameters, local variables, and return address.
// When a function completes its execution, its frame is removed from the stack, and control returns to the previous function call.

// In the case of the factorial function, when we call factorial(4), the following frames would be added to the recursion stack:

/*
|---------------------|
| factorial(4)       |  <- Top of the stack (most recent call)
|---------------------|
| factorial(3)       |
|---------------------|
| factorial(2)       |
|---------------------|
| factorial(1)       |  <- Bottom of the stack (first call)
|---------------------|
*/

// As each recursive call is made, a new frame is pushed onto the stack. When the base case is reached (factorial(1)),
//  the function starts returning values, and the frames are popped off the stack in reverse order, 
// ultimately returning the final result to the original caller.

// ++++++++++ DIFFERENCE BETWEEN RECURSION AND ITERATION ++++++++++++++++
// Recursion and iteration are both techniques used to repeat a block of code, but they do so in different ways:

// 1. Definition:
//    - Recursion: A function calls itself to solve a smaller instance of the same problem.
//    - Iteration: A loop (e.g., for, while) repeatedly executes a block of code until a condition is met.

// 2. State Management:
//    - Recursion: Each recursive call has its own state (local variables, parameters) stored on the call stack.
//    - Iteration: The state is typically managed using loop control variables within a single function frame.

// 3. Base Case vs. Loop Condition:
//    - Recursion: Requires a base case to terminate the recursive calls.
//    - Iteration: Uses a loop condition to determine when to stop iterating.

// 4. Memory Usage:
//    - Recursion: Can lead to high memory usage due to multiple function calls on the call stack, potentially causing stack overflow.
//    - Iteration: Generally uses less memory since it maintains a single function frame.

// 5. Readability and Maintainability:
//    - Recursion: Can be more readable and easier to implement for problems that have a natural recursive structure (e.g., tree traversals).
//    - Iteration: May be more straightforward for simple repetitive tasks but can become complex for problems that are inherently recursive.