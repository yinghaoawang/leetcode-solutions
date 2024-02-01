/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (const token of tokens) {
        let operation;
        if (token === '+') {
            operation = (a,b) => Number(a) + Number(b); 
        } else if (token === '-') {
            operation = (a,b) => Number(a) - Number(b);
        } else if (token === '*') {
            operation = (a,b) => a * b;
        } else if (token === '/') {
            operation = (a,b) => Math.trunc(a / b);
        }

        if (operation !== undefined) {
            const val2 = stack.pop();
            const val1 = stack.pop();
            const res = operation(val1, val2);
            stack.push(res);
        } else {
            stack.push(token);
        }
    }
    return stack[0];
};