// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

export function humanReadable(seconds) {
  if (seconds > 359999) {
    return "99:59:59";
  }
  const hours = parseInt(seconds / 3600);
  const hoursFloat = seconds % 3600 === 0 ? 0 : seconds - hours * 3600;
  const minutes = parseInt(hoursFloat / 60);
  const minutesFloat = hoursFloat % 60 === 0 ? 0 : hoursFloat - minutes * 60;

  const res = [
    String(hours).padStart(2, "0"),
    String(minutes).padStart(2, "0"),
    String(minutesFloat).padStart(2, "0"),
  ];

  return res.join(":");
}
