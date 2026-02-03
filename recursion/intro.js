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
