import { nextSmaller } from "../3-5kyu/nextSmallerNumberWithTheSameDigits_4kyu";

describe("nextSmaller", () => {
  it("runs without errors", () => {
    expect(nextSmaller(907)).toBe(790);
    expect(nextSmaller(531)).toBe(513);
    expect(nextSmaller(135)).toBe(-1);
    expect(nextSmaller(1234567908)).toBe(1234567890);
  });
});
