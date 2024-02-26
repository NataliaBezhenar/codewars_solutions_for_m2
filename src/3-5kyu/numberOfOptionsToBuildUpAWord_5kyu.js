// Task
// You are given a target word and an array of strings. Your task is to count in how many ways you can build up a target word from the strings in the array. You need to use the whole string from the array, as many times as needed but you can not remove characters from those smaller strings.
// Example
// For target word example and array ['exa','exam','ple'] there is just 1 option how you can do it: taking strings 'exam' and 'ple'. So you should return 1 in this case.
// For target word example and array ['exa','exam','ple', 'mple'] we have 2 options: 'exa'+'mple' and 'exam'+'ple'. In this case you should return 2.
// For target word example and array ['exa','ple'] we can not construct target word, then return 0 for such case.
// Input
// As input you receive:
// target - target word as a string;
// arr - array of unique strings;
// All strings will be in lowercase. All inputs are valid.
// Output
// You should return a number in how many ways you can build up a target word from the strings in the array.
// Return 0 if it is impossible.
// For empty string as target you should return 1.

export const getOptionsCount = (target, arr) => {
  const targetWordLength = target.length;
  const resultArray = new Array(targetWordLength + 1).fill(0);
  resultArray[0] = 1;
  for (let i = 1; i <= targetWordLength; i++) {
    for (const part of arr) {
      if (i >= part.length && target.substring(i - part.length, i) === part) {
        resultArray[i] += resultArray[i - part.length];
      }
    }
  }

  return resultArray[target.length];
};
