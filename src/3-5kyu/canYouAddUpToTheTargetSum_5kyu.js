// Given an array of numbers and a target number, return an array of numbers that sums to the target number.

// You can only pick numbers from the given array, but you can pick them as many times as you like.

// To not create different solutions you should always pick as big a number as possible.

// The array of numbers will be sorted in descending order (bigger numbers come first, smaller numbers later).

// If it is impossible to get to the target number, return an empty array (or, depending on language, an empty value).

// Input
// As arguments you will receive:
// numbers: an array of numbers, positive integers from 1 to 1 000, sorted in descending order.
// target: a number, a positive integer from 1 to 100 000.
// All inputs will be valid.

// Output
// Your function should return an array of integers from the input array that, when summed, equals the target number.
// Return an empty array (Haskell: Nothing) when it is not possible.

// Tests
// Your function should pass 10 fixed tests and 990 random tests.
// Total number of tests is 1000.

// Good luck!

export const getNumbers = (numbers, target) => {
  const findCombination = (index, currentTarget, currentCombination) => {
    if (currentTarget === 0) {
      return [currentCombination];
    }
    if (index === numbers.length || currentTarget < 0) {
      return [];
    }
    const includeCurrent = findCombination(
      index,
      currentTarget - numbers[index],
      [...currentCombination, numbers[index]]
    );

    const excludeCurrent = findCombination(
      index + 1,
      currentTarget,
      currentCombination
    );

    return [...includeCurrent, ...excludeCurrent];
  };

  const allCombinations = findCombination(0, target, []);

  const uniqueCombinations = Array.from(
    new Set(allCombinations.map((combination) => combination.sort().join(",")))
  );
  const firstValidCombination = uniqueCombinations[0];

  return firstValidCombination
    ? firstValidCombination.split(",").map(Number)
    : [];
};
