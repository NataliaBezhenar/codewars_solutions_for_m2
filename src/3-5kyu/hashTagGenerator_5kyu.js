// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

export function generateHashtag(str) {
  if (!str.trim()) return false;
  else {
    let formattedStr =
      "#" +
      str
        .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())
        .replace(/\s/g, "");
    if (formattedStr.length > 140) {
      return false;
    } else return formattedStr;
  }
}
