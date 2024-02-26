// As a JS user, you know that you are limited in so many ways, so let's break the limit! In this kata, we are focusing on Tail Call.

// Requirement
// You are given fd, an array of function descriptions. Your task is to return an array of functions that are able to handle tail calls properly. Each of elements in fd is a 3-length-array having the format [functionName, parameter, functionBody] where

// functionName: string. The name of this function
// parameter: string[]. The parameter names of this function, each elements is a identifier
// functionBody: string. The body of this function
// It's guaranteed that

// These functions would only invoke each others or built-in functions.
// These functions would only be invoked in the tail positions.
// All function bodys are valid, which means no error will occur if it is passed to the new Function constructor.
// Example
// var result = tco([['f',['x'],'return x ? f(--x) : "foo"']])
// The result should contains a function functionally equals to function f(x){return x ? f(--x) : "foo"}. Then we can test it with a large number

// result[0](1e6) === 'foo'
// So, why not just return function f(x){return x ? f(--x) : "foo"}? Because

// (function f(x){return x ? f(--x) : "foo"})(1e6)
// throws RangeError: Maximum call stack size exceeded.

// If any functions throws an error, just let it go.

// tco([['f',[],'throw "Whatever"']])[0]()
// should throws "Whatever"

// Checkout more in example tests.

// Note
// The purpose of this kata has nothing to do with perfomance, but to test if it is able to handle tail calls, functions may be invoked for tens of thousands of times, you might need to be careful.
// I'm not 100 percent sure that my tests are correct. Please feel free to raise an issue.
// If the description above is not clear enough. Please feel free to question me.

export function tco(fd) {
  const functionMap = {};
  return fd.map(([name, args, body]) => {
    this[name] = (...args) => ({ name, args });
    functionMap[name] = new Function(...args, body);
    return (...args) => {
      let result = functionMap[name](...args);
      while (result && result.name) {
        result = functionMap[result.name](...result.args);
      }
      return result;
    };
  });
}
