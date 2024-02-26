// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.

export function nextSmaller(n) {
  const digits = String(n).split("").map(Number);

  let i = digits.length - 1;
  while (i > 0 && digits[i - 1] <= digits[i]) {
    i--;
  }

  if (i <= 0) return -1;

  let j = digits.length - 1;
  while (digits[j] >= digits[i - 1]) {
    j--;
  }

  [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];

  const result = parseInt(
    [...digits.slice(0, i), ...digits.slice(i).sort((a, b) => b - a)].join(""),
    10
  );

  return result > 0 && String(result).length === digits.length ? result : -1;
}
