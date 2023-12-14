// input: string only containing chars: (,),{,},[,]
// output true if is valid, otherwise false
// {}() valid
// ({}[]) valid
// ({)} invalid
function isValid(str) {
  // ({}[{}])
  // stack: 
  // iterate through string
  // if open bracket, push into stack
  // if closed bracked:
      // peek in stack
      // if stack empty- return false
      // if bracket is not same type- return false
      // if not return false, pop stack
  // after loop, if hasnt returned false, then string is valid, return true

  // initialize vars
  const openBrackets = '[{(';
  const bracketPairs = {
      '[': ']',
      '{': '}',
      '(': ')'
  }
  const stack = [];
  for (const char of str) {
      // if the bracket is an o[en bracket, push it into stack
      if (openBrackets.includes(char)) {
          stack.push(char);
      } else { // if bracket is closed, pop matching bracket from stack
          if (stack.length === 0) { // if stack is empty, then is not valid string
              return false;
          }
          // check if the stack char is the corresponding closing bracket
          const stackChar = stack[stack.length - 1];
          if (char != bracketPairs[stackChar]) {
              return false; // return false if they are not matching
          }
          // pop the stack if is matching pair
          stack.splice(stack.length - 1, 1);
      }
  }
  // if stack is not empty, then we didn't close all open brackets
  if (stack.length != 0) return false;
  // if we have not returned false, then it is a valid string
  return true;
}
