// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

export function solution(list) {
  let result = "";
  let tempArr = [list[0]];
  for (let i = 1; i < list.length; i++) {
    if (Math.abs(list[i] - list[i - 1]) === 1) {
      tempArr.push(list[i]);

      if (list[i + 1] === undefined && tempArr.length > 2) {
        result += "," + tempArr[0] + "-" + tempArr[tempArr.length - 1];
        tempArr = [];
      }
    } else {
      if (tempArr.length > 2) {
        result +=
          result.length > 0
            ? "," + tempArr[0] + "-" + tempArr[tempArr.length - 1]
            : tempArr[0] + "-" + tempArr[tempArr.length - 1];
        tempArr = [];
      } else if (tempArr.length > 0) {
        result +=
          result.length > 0 ? "," + tempArr.join(",") : tempArr.join(",");
        tempArr = [];
      }
      tempArr.push(list[i]);
    }
  }
  if (tempArr.length > 0) {
    result += "," + tempArr.join(",");
  }

  return result;
}
