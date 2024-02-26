// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

export function incrementString(strng) {
  const matcher = strng.match(/\d+$/);
  if (matcher) {
    const substringWithNumber = matcher[0];
    const substringWithNumberLength = substringWithNumber.length;
    const newNumber = +substringWithNumber + 1;
    const newSubstring = String(newNumber).padStart(
      substringWithNumberLength,
      "0"
    );

    return (
      strng.slice(0, strng.length - substringWithNumberLength) + newSubstring
    );
  }
  return strng + "1";
}
