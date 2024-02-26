import { getNumbers } from "../3-5kyu/canYouAddUpToTheTargetSum_5kyu";

describe("Can you add up to the target sum?", () => {
  it("should run", () => {
    expect(getNumbers([100, 25, 15, 7, 3], 24)).toStrictEqual([15, 3, 3, 3]);
  });
});
