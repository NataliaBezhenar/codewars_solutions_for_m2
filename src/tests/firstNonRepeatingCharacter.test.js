import { firstNonRepeatingLetter } from "../3-5kyu/firstNonRepeatingCharacter_5kyu";

describe("firstNonRepeatingLetter", () => {
  it("should run", () => {
    expect(firstNonRepeatingLetter("a")).toBe("a");
    expect(firstNonRepeatingLetter("stress")).toBe("t");
    expect(firstNonRepeatingLetter("moonmen")).toBe("e");
    expect(firstNonRepeatingLetter("sTreSS")).toBe("T");
    expect(firstNonRepeatingLetter("abba")).toBe("");
  });
});
