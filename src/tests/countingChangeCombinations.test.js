import { countChange } from "../3-5kyu/countingChangeCombinations_4kyu";

describe("countChange", () => {
  it("runs without errors", () => {
    expect(countChange(4, [1, 2])).toBe(3);
    expect(countChange(10, [5, 2, 3])).toBe(4);
    expect(countChange(11, [5, 7])).toBe(0);
  });
});
